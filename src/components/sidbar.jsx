import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  border-radius: 5px;
  padding: 15px 0;
  font-size: 16px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  padding-bottom: 40px;
  min-width: fit-content;

  @media (min-width: 998px) {
    font-size: 18px;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  white-space: nowrap;
  color: ${(props) =>
    props.menu
      ? props.theme.colors.primary
      : props.theme.colors.newColors.shades.title};
  padding: 3px 20px;

  @media (min-width: 998px) {
    padding: 8px 20px;
  }
  cursor: pointer;
  border-inline-start: 2px solid
    ${(props) => (props.menu ? props.theme.colors.primary : "transparent")};
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border-inline-start: 2px solid ${(props) => props.theme.colors.primary};
  }
`;
