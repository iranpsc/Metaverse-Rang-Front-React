// import necessary modules
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useScrollDirectionContext } from "../../reducers/ScrollDirectionContext";

// Create a styled TabsWrapper component
const TabsWrapper = styled.div`
  border-bottom: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 998px) {
    padding-bottom: 70px;
  }
`;

// Create a styled Tab component
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
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
`;
const TabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  min-height: 50px; 

  border-bottom: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};

  transition: min-height 0.3s ease;
  &::-webkit-scrollbar {
    height: 0px;
  }

  @media (max-height: 500px) and (max-width: 1000px) {
    min-height: ${(props) => (props.isScrollingDown ? "0px" : "40px")};
    height: 0px;
    transition: min-height 0.3s ease;
  }
`;

// Create a function that uses the tabs and current index
function useTabs(tabs, current, fullHeight) {
  const [activeTab, setActiveTab] = useState(
    current !== undefined ? current : 0
  );
  const Location = useLocation();
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const [locationPage, setLocationPage] = useState("");
  Location.state = { ...Location.state, locationPage };
  const tabRefs = useRef([]); // آرایه‌ای از ref‌ها برای هر Tab

  useEffect(() => {
    if (current !== undefined) {
      setActiveTab(current);
    }
  }, [current]);

  useEffect(() => {
    setLocationPage(newStr + (activeTab + 1));
  }, [activeTab, Location]);

  useEffect(() => {
    if (Location.state && Location.state.activePageNumber !== undefined) {
      setActiveTab(Location.state.activePageNumber);
    }
  }, [Location]);
  const { isScrollingDown } = useScrollDirectionContext();

  useEffect(() => {
    tabRefs.current[activeTab]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeTab]);

  return (
    <TabsWrapper fullHeight={fullHeight}>
      <TabContainer isScrollingDown={isScrollingDown}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            active={activeTab === index}
            onClick={() => {
              setActiveTab(index);
              Location.state = {
                ...Location.state,
                activePageNumber: index,
                locationPage,
              };
              // اسکرول کردن تب به وسط
              tabRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center", // این باعث میشه در افقی وسط باشه
              });
            }}
          >
            {tab.title}
          </Tab>
        ))}
      </TabContainer>
      {tabs[activeTab]?.content}
    </TabsWrapper>
  );
}

// Export the useTabs function
export default useTabs;
