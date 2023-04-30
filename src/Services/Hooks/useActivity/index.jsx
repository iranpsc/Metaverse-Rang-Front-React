import React, { useEffect, useState } from 'react'
import shortid from 'shortid';
import styled from 'styled-components';

const Container = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BtnProperty = styled.button`
  border: none;
  width: 80%;
  height: 60px;
  background-color: transparent;
  border-left: 1px #b8b8b8 solid;

  &.active {
    border-left: 4px solid var(--bs-orange);
  }
`;

// const tabs = [
//     {name: 'کف قیمت', component: <p>hello world</p>}
// ]

// This is a custom hook named useActivity which takes two arguments
// `tabs`: an array of objects containing information about tabs and their corresponding components
// `style`: an object containing styles to be applied to the container

export default function useActivity(tabs, style) {
  // Two state variables are defined using the useState hook
  const [activity, setActivity] = useState(0); // `activity` stores the index of the currently active tab
  const [current, setCurrent] = useState(<></>); // `current` represents the rendered component corresponding to the currently active tab
  
  // The useEffect hook updates the `current` variable whenever the `activity` variable changes
  useEffect(() => {
    setCurrent(tabs[activity].component);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

  // The hook returns JSX with the following structure:
  // A Container component that wraps two child components: 
    // A MainContainer component that renders the currently active component
    // A BtnContainer component that wraps multiple child components representing each tab. Each button is associated with a corresponding tab and sets the activity state when clicked.

  return (
    <Container>
      <MainContainer style={{...style}}>
        { current }
      </MainContainer>

      <BtnContainer>
        {
            tabs.map((tab, index) => (
                <BtnProperty key={shortid.generate()} onClick={() => setActivity(index)} className={`${activity === index && "active"}`}>{tab.name}</BtnProperty>
            ))
        }
      </BtnContainer>
    </Container>
  );
}
