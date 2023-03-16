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

export default function useActivity(tabs, style) {
  const [activity, setActivity] = useState(0);
  const [current, setCurrent] = useState(<></>);

  useEffect(() => {
    setCurrent(tabs[activity].component)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

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
