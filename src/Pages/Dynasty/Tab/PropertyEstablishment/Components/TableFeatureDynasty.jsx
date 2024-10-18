import styled from "styled-components";
import PscCoin from "../../../../../Assets/images/psc-2.png";
import DataBaseIcon from "../../../../../Assets/images/database.png";
import SatisfactionICoin from "../../../../../Assets/images/satisfaction.png";
import IncreaseICoin from "../../../../../Assets/images/increase.png";
import BankICoin from "../../../../../Assets/images/bank.png";
import DynastyICoin from "../../../../../Assets/images/dynsty.png";
import Arrow from "../../../../../Assets/images/arrow.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
  flex-direction: column;
`;
const Text = styled.p`
  display: inline-block;
  width: 100%;
`;
const ContainerTable = styled.div`
  width: 100%;
  height: 50%;
`;
const Table = styled.table`
  width: 100%;
  background: #e9e9e9;
  border-spacing: 0;
  & td {
    text-align: center;
    padding: 5px;
  }
`;
const TableBody = styled.tbody`
  tr:nth-of-type(odd) {
    background: white;
  }
  tr:nth-of-type(even) {
    background: #e9e9e9;
  }
`;
const Tr = styled.tr`
  height: 30px !important;
  padding: 5px;
`;
const IconHerader = styled.img`
  width: 30px;
`;
const ContainerArrow = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;
const ImgArrow = styled.img`
  width: 60px;
  rotate: 180deg;
`;
export default function TableFeatureDynasty({ dynasty }) {
  return (
    <Container>
      <Text style={{ fontWeight: 700 }}>تاسیس سلسه</Text>
      <Text>با تاسیس سلسه از پاداش وخروجی های فوق العاده بهره مند شوید</Text>
      <Text>میزان خروجی در هر افزایش</Text>
      <ContainerTable>
        <Table>
          <thead>
            <td>
              <IconHerader src={DynastyICoin} />
            </td>
            <td>
              <IconHerader src={PscCoin} />
            </td>
            <td>
              <IconHerader src={DataBaseIcon} />
            </td>
            <td>
              <IconHerader src={BankICoin} />
            </td>
            <td>
              <IconHerader src={IncreaseICoin} />
            </td>
            <td>
              <IconHerader src={SatisfactionICoin} />
            </td>
          </thead>
          <TableBody>
            {dynasty?.prizes?.map((prize) => (
              <Tr>
                <td>{prize?.member}</td>
                <td>{prize?.psc}</td>
                <td>{prize?.data_storage}%</td>
                <td>{prize?.accumulated_capital_reserve}%</td>
                <td>{prize?.introduction_profit_increase}</td>
                <td>{prize?.satisfaction}</td>
              </Tr>
            ))}
          </TableBody>
        </Table>
      </ContainerTable>
      <ContainerArrow>
        <ImgArrow src={Arrow} />
        <Text>برای تاسیس سلسله خود ملک مسکونی انتخاب کنید</Text>
      </ContainerArrow>
    </Container>
  );
}
