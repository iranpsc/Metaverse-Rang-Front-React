import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  direction: ltr;
  display: grid;
  height: 232px;
  padding-right: 15px;
  overflow-y: auto;

  @media (min-width: 880px) {
    height: 187px;
  }
  @media (min-width: 890px) {
    height: 257px;
  }
  @media (min-width: 930px) {
    height: 273px;
  }
  @media (min-width: 1024px) {
    height: 375px;
  }
  @media (min-width: 1180px) {
    height: 575px;
  }
  @media (min-width: 1280px) {
    height: 560px;
  }
  @media (min-width: 1366px) {
    height: 620px;
  }
  @media (min-width: 1500px) {
    height: 540px;
  }
  @media (min-width: 1900px) {
    height: 620px;
  }
`;

export const Header = styled.div`
  display: grid;
  margin-bottom: 20px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  @media (min-width: 1366px) {
    grid-template-columns: 100px 510px;
  }
`;

export const Citizens = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 15px;
  padding-right: 10px;
  height: calc(100% - 10px);
  overflow: auto;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
`;

export const SelectButton = styled.button`
  color: #ffffff;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#18c08f")};
  border-radius: 10px;
  border: none;
  height: 49px;
  padding: 10px 22px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
`;
