import React from 'react';
import styled from 'styled-components';
import BtnHourProfitAll from '../Components/BtnHourProfitAll';

const BtnContainer =styled.div`
width: 100%;
padding: 0 5px;
display: flex;
align-items: center;
justify-content: center;

`
const HourProfit = () => {
    return (
       <BtnContainer>
        <BtnHourProfitAll color={"red"} value={100}/>
        <BtnHourProfitAll color={"blue"} value={100}/>
        <BtnHourProfitAll color={"yellow"} value={100}/>
       </BtnContainer>
    );
};

export default HourProfit;