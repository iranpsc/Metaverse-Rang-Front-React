import { BiEditAlt } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";

import styled from "styled-components";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../Services/Utility";
import Result from "../../../Components/Result";

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 15px;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

const Results = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 2fr 2fr 1fr;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }
`;

const ActionWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.newColors.primary};
  cursor: pointer;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  @media (min-width: 1200px) {
    align-items: center;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 14px;
  font-weight: 500;
`;

const Value = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 400;
`;

const ResultInfo = ({ setAssign, rial, psc, setPsc, setRial }) => {
  const deleteHandler = () => {
    setPsc("");
    setRial("");
    setAssign(false);
  };
  return (
    <Wrapper>
      <Results>
        <Result
          title={
            (getFieldTranslationByNames(6774),
            getFieldTranslationByNames(6760))
          }
          value={rial}
        />
        <Result
          title={
            (getFieldTranslationByNames(6774),
            getFieldTranslationByNames(14488))
          }
          value={psc}
        />
        <ResultWrapper>
          {getFieldTranslationByNames(6781)}
          <Value>
            {convertToPersian(rial)} IRR / {convertToPersian(psc)} PSC
          </Value>
        </ResultWrapper>
        <Result
          title={getFieldTranslationByNames(6788)}
          value={"5%"}
        />
      </Results>
      <Actions>
        <ActionWrapper onClick={() => setAssign(false)}>
          <BiEditAlt size={20} />
        </ActionWrapper>
        <ActionWrapper onClick={deleteHandler}>
          <HiOutlineTrash size={20} />
        </ActionWrapper>
      </Actions>
    </Wrapper>
  );
};

export default ResultInfo;
