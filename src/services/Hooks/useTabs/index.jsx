import { useEffect, useRef } from "react";
import {useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useScrollDirectionContext } from "../../reducers/ScrollDirectionContext";
import { Outlet } from "react-router-dom";
const TabsWrapper = styled.div`
  border-bottom: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 998px) {
    padding-bottom: 70px;
  }
`;

const Tab = styled.h3`
  white-space: nowrap;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.newColors.shades[30]};
  font-weight: 500;
  margin: 0;
  font-size: 15px;
  padding: 8px 26px;
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) =>
      props.active
        ? props.theme.colors.primary
        : props.theme.colors.newColors.otherColors.inputBorder};

  @media (min-width: 998px) {
    font-size: 18px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border-bottom-color: ${(props) => props.theme.colors.primary};
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
const TabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  transition: min-height 0.3s ease, max-height 0.3s ease;

  min-height: 50px;
  &::-webkit-scrollbar {
    height: 0px;
  }

  @media (max-height: 500px) and (max-width: 1000px) {
    min-height: ${(props) => (props.isScrollingDown ? "0px" : "40px")};
    max-height: ${(props) => (props.isScrollingDown ? "0px" : "40px")};
  }
`;

function Tabs({ items = [], fullHeight }) {
  if (!items.length) return null;

  const navigate = useNavigate();
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const tabRefs = useRef([]);
  const { isScrollingDown } = useScrollDirectionContext();

  const isFeatureRoute = segments[1] === "feature";
  const hasSubTab = segments.length > 3;

  const basePath = isFeatureRoute
    ? `/${segments[0]}/${segments[1]}/${segments[2]}`
    : hasSubTab
    ? `/${segments[0]}/${segments[1]}`
    : location.pathname.split("/").slice(0, -1).join("/");

  const mainTabPaths = items.map((i) => i.path);

  let activeTabPath = segments[segments.length - 1];

  if (!mainTabPaths.includes(activeTabPath)) {
    activeTabPath = segments[segments.length - 2];
  }

  const activeIndex = items.findIndex((i) => i.path === activeTabPath);
  const activeTab = activeIndex === -1 ? 0 : activeIndex;

  useEffect(() => {
    tabRefs.current[activeTab]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeTab]);

  const isInfoFeatureUrl = /^\/metaverse\/feature\/\d+/.test(location.pathname);

  return (
    <TabsWrapper fullHeight={fullHeight}>
      <TabContainer isScrollingDown={isScrollingDown}>
        {items.map((item, index) => (
          <Tab
            key={item.path}
            ref={(el) => (tabRefs.current[index] = el)}
            active={index === activeTab}
            onClick={() =>
              navigate(`${basePath}/${item.path}`, { replace: true })
            }
          >
            {item.title}
          </Tab>
        ))}
      </TabContainer>

      {isInfoFeatureUrl ? items[activeTab]?.content : <Outlet />}
    </TabsWrapper>
  );
}

export default Tabs;
