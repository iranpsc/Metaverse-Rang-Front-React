import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 0 40px 0;
  width: 100%;
  background-color: white;
  direction: rtl;
`;

export const Thead = styled.div`
  display: table-row;
  width: 100%;
  font-weight: bold;
  font-family: iransans;
  color: #ffffff;
  background: var(--bs-orange);
  text-align: center;
`;

export const Cell = styled.div`
  padding: 6px 12px;
  display: table-cell;
  text-align: center;
`;

export const Row = styled.div`
  display: table-row;

  &:nth-of-type(odd) {
    background: #e9e9e9;
  }
`;
