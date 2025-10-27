// import necessary modules
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

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
  &::-webkit-scrollbar{
  height: 0px; 
  }
min-height: 50px;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
`;
// Create a function that uses the tabs and current index
function useTabs(tabs, current, fullHeight) {
  const [activeTab, setActiveTab] = useState(current !== undefined ? current : 0);
  const Location = useLocation();
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const [locationPage, setLocationPage] = useState("");
  Location.state = { ...Location.state, locationPage };

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

  return (
    <TabsWrapper fullHeight={fullHeight}>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            active={activeTab === index}
            onClick={() => {
              setActiveTab(index); 
              Location.state = {
                ...Location.state,
                activePageNumber: index,
                locationPage,
              };
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
