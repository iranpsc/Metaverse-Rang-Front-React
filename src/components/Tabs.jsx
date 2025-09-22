import styled from "styled-components";
import { useRef } from "react";

const TabsWrapper = styled.div`
  border-bottom: 1px solid #454545;
  justify-content: flex-start;
  display: flex;
  margin-top: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabItem = styled.h3`
  color: ${(props) => (props.active ? "#ffc700" : "#dedee9")};
  font-weight: 500;
  margin: 0;
  font-size: 16px;
  padding: 8px 26px;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.active ? "#ffc700" : "#454545")};
  @media (min-width: 998px) {
    font-size: 18px;
  }
  &:hover {
    color: #ffc700;
    border-bottom: 2px solid #ffc700;
  }
`;

const Tabs = ({ tabs, active, setActive, onTabClick }) => {
  const tabsRef = useRef();

  const handleClick = (tab, tabsRef) => {
    setActive(tab.key);
    if (onTabClick) {
      onTabClick(tab.key, tabsRef.current);
    }
  };

  return (
    <TabsWrapper ref={tabsRef}>
      {tabs.map((tab) => (
        <TabItem
          key={tab.key}
          data-tab={tab.key}
          active={active === tab.key}
          onClick={() => handleClick(tab)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
