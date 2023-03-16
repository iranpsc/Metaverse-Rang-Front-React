import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

const TabContainer = styled.section`
  width: 99%;
  height: 500px;
  margin-top: 24px;
  position: relative;
  background: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 16px;
`;

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

const TabPanel = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 91%;
`;


function useTabs(tabs, current) {
  const [Tabs, ] = useState(tabs);
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if(current) {
      setActiveTab(current)
    }
    setPage(Tabs[activeTab].content);
  }, [Tabs, activeTab, current])

  return (
    <TabContainer>
      <TabList>
        {Tabs.map((tab, index) => 
          <Tab key={shortid.generate()} className={`${activeTab === index && 'active'}`} onClick={() => setActiveTab(index)}>{ tab.title }</Tab>
        )}
      </TabList>
        
      <TabPanel>
        { page }
      </TabPanel>
    </TabContainer>
  );
}

export default useTabs;