import styled from "styled-components";

const ContainerSpecification = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 5px;
`;

const TitleSpecification = styled.div`
  width: 120px;
  background: white;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: end;
  border: 1px solid #c2c2c2;
  border-left: none;
  padding-right: 5px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

const ValueSpecification = styled.div`
  width: 70%;
  background-color: #e9e9e9;
  text-align: left !important;
  display: flex;
  padding-left: 8px;
  align-items: center;
  border-radius: 5px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  border: 1px solid #c2c2c2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export default function Specification({ title, value, style }) {
    return (
      <ContainerSpecification style={{...style}}>
        <ValueSpecification>{value}</ValueSpecification>
        <TitleSpecification>{title}</TitleSpecification>
      </ContainerSpecification>
    );
  }