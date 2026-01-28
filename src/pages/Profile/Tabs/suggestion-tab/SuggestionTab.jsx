import RecievedSuggestion from "./recieved/RecievedSuggestion";
import SentSuggestion from "./sent/SentSuggestion";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  overflow-y: hidden;
`;

const SuggestionTab = () => {

  return (
    <Container>
      <Sidebar/>
      <Outlet/>
    </Container>
  );
};

export default SuggestionTab;
