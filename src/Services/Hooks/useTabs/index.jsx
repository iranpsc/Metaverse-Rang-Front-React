// import necessary modules
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Create a styled TabContainer component
const TabContainer = styled.section`
  width: 99%;
  height: ${props => props.fullHeight ? '93%' : '500px'};
  margin-top: ${props => props.fullHeight ? '0' : '24px'};;
  position: relative;
  background: #f6f6f6;
  border-radius: 8px;
  margin-bottom:${props => props.fullHeight ? '0' : '16px'};;
`;

// Create a styled TabList component
const TabList = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row-reverse;
  background: #fff;
  top: 0;
  border-bottom: 2px solid var(--bs-orange);
`;

// Create a styled Tab component
const Tab = styled.button`
  border: none;
  font-size: 14px;
  font-weight: bold;
  width: 150px;
  border-radius: 8px 8px 0px 0px;
  background: #fff;
  color: #999;

  &:hover {
    color: var(--bs-orange);
  }

  &.active {
    background: #f6f6f6;
    color: var(--bs-orange);
    height: 40px;
    border: 2px solid var(--bs-orange);
    border-bottom: none;

    &:hover {
      border: none;
      border: 2px solid var(--bs-orange);
      border-bottom: none;
      filter: none;
      cursor: auto;
    }
  }
`;

// Create a styled TabPanel component
const TabPanel = styled.div`
  margin-top: ${props => props.fullHeight ? '20px' : '40px'};;
  width: 100%;
  height: 90%;
`;

// Create a function that uses the tabs and current index
function useTabs(tabs, current,fullHeight) {
  // Set active tab to current index or 0
  const [activeTab, setActiveTab] = useState(current || 0);
  // Get current location

  const Location = useLocation();
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const [locationPage, setLocationPage] = useState("");
  // Update location page on active tab change
  Location.state = { ...Location.state, locationPage };
  useEffect(() => {
    setLocationPage(newStr + (activeTab + 1));
  }, [activeTab, Location, current]);
  useEffect(() => {
    if (Location.state && Location.state.activePageNumber) {
      setActiveTab(Location.state.activePageNumber);
    }
  }, [Location]);

  // Return the TabContainer component with the appropriate styling and content
  return (
    <TabContainer fullHeight={fullHeight}>
      <TabList fullHeight={fullHeight}>
        {tabs.map((tab, index) => (
          <Tab
            key={index} // Use tab index as key
            className={`${activeTab === index && "active"}`}
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
      </TabList>
      <TabPanel fullHeight={fullHeight}>{tabs[activeTab]?.content}</TabPanel>
    </TabContainer>
  );
}

// Export the useTabs function
export default useTabs;
