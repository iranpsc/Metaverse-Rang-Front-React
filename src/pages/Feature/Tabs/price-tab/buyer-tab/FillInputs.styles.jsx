import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    padding-left: 0;
  }
`;

export const ResultWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;

  @media (min-width: 670px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1023px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  height: 40px !important;
  border: 1px solid #454545;
  font-weight: 400;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  overflow: hidden;

  @media (min-width: 998px) {
    height: 48px !important;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 5px 20px;

  @media (min-width: 998px) {
    padding: 8px 20px;
  }
`;

export const Value = styled.p`
  font-size: 18px;
  padding: 5px 20px;

  @media (min-width: 998px) {
    padding: 8px 20px;
  }
`;

export const SuggestWrapper = styled.div`
  height: 250px !important;
  margin-bottom: 10px;
`;

export const Sec = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
`;

export const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 5px;
`;
