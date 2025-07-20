import styled from "styled-components";

export const Container = styled.div`


  display: grid;

  padding-right: 15px;
  overflow-y: auto;

  height: calc(100vh - 100px);
  @media (min-width: 992px) {
    height: calc(100vh - 230px);
    padding: 15px;
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
  grid-template-columns: 1fr;

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

export const IconWrapper = styled.div`
  text-align: center;
  color: #808080;
  margin: 20px 0;

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
