// import necessary modules
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Create a styled TabContainer component
const TabContainer = styled.section`
  width: 99%;
  height: 500px;
  margin-top: 24px;
  position: relative;
  background: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 16px;
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
  margin-top: 40px;
  width: 100%;
  height: 91%;
`;

// Create a function that uses the tabs and current index
function useTabs(tabs, current) {
  // Set active tab to current index or 0
  const [activeTab, setActiveTab] = useState(current || 0);
  // Set initial location page state
  const [locationPage, setLocationPage] = useState("");
  // Get current location
  const Location = useLocation();
  
  // Update location page on active tab change
  useEffect(() => {
    const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
    setLocationPage(newStr + (activeTab + 1));
  }, [activeTab, Location]);

  // Set location state
  Location.state = locationPage;

  // Return the TabContainer component with the appropriate styling and content
  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab
            key={index} // Use tab index as key
            className={`${activeTab === index && "active"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabPanel>{tabs[activeTab].content}</TabPanel>
    </TabContainer>
  );
}

// Export the useTabs function
export default useTabs;