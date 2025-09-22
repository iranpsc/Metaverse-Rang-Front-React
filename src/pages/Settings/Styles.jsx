import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const ContainerBox = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #979696;
  border-radius: 10px;
`;

export const PermissionToChange = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const CounterChange = styled.span`
  width: 25px;
  height: 25px;
  background-color: #fff12c;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 5px #2b2a2a;
  border-radius: 5px;
`;

export const SpanPermission = styled.p`
  font-size: 0.8rem;
  color: #707070;
`;

export const TitleOperation = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 16px;
  color: #707070;
  font-weight: 700;
`;

export const ContainerOperation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-direction: column;
  padding: 12px;
`;

export const ContainerVariable = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleVariable = styled.p`
  color: #707070;
  font-size: 16px;
`;

export const InputVariable = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid #707070;
  border-radius: 6px !important;
  text-align: center;
  padding: 0 !important;
  &::placeholder {
    text-align: center;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type=number] {
      -moz-appearance:textfield; /* Firefox */
  }
`;