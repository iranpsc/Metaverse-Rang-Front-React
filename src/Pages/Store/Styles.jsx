import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 80%;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
`;

export const ImageButton = styled.img`
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%) !important;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8px;
  padding: 16px;
  position: relative;

  & > p {
    direction: rtl;
    font-size: 18px;
    font-weight: bold;
    color: #666;
  }
  
  & .store-help {
    font-size: 30px;
    position: absolute;
    left: 20%;
    color: red;
    top: 50%;
    cursor: pointer;
  }

  &:nth-child(1) {
    border-bottom: 2px solid #999;
  }

  &:nth-child(2) {
    border-bottom: 2px solid #999;
  }
`;

export const Button = styled.button`
  --bs-bg-opacity: 1;
  background-color: var(--bs-orange) !important;
  border: none;
  border-radius: 8px;
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  padding: 8px 24px 8px 24px;
  direction: rtl;
  font-size: 18px;
`;
