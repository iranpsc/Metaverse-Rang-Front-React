import { BsPlus } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";

const card_items = [
  { id: 1, name: 19292, percent: 20, count: 120 },
  { id: 2, name: 19292, percent: 20, count: 120 },
];

const Div = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 32px;
  @media (min-width: 1180px) {
    grid-template-columns: 3fr 3fr 3fr 2fr;
  }
`;

const CodeCard = styled.div`
  padding: 4px 4px 4px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    cursor: pointer;
  }
`;

const CodeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
`;

const AddCode = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 10px 14px 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 30px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  cursor: pointer;
  white-space: nowrap;
  @media (max-width: 900px) {
    h5 {
      font-size: 11px;
    }
  }
`;

const Summary = styled.div`
  h5 {
    &:first-of-type {
      font-size: 13px;
      color: #949494;
      font-weight: 600;
    }
    &:last-of-type {
      font-size: 13px;
      color: #949494;
    }
  }
`;

const Input = styled.input`
  border-radius: 5px;

  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  height: 48px;
  padding: 0 10px;

  width: 100%;
  height: 100%;
  outline: none;
  font-size: 16px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Codes = () => {
  const [cards, setCards] = useState(card_items);
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [count, setCount] = useState("");

  const handleCardRemoval = (id) => {
    const updatedCards = cards.filter((item) => item.id !== id);
    setCards(updatedCards);
  };

  const handleAddCode = () => {
    const newCodeId = cards.length + 1;
    const newCode = {
      id: newCodeId,
      name: code,
      percent: percent,
      count: count,
    };
    if (code !== "" && percent !== "" && count !== "") {
      setCards((prevCards) => [...prevCards, newCode]);
      setCode("");
      setPercent("");
      setCount("");
    }
  };

  return (
    <Div>
      <Container>
        <Input
          onChange={(event) => setCode(event.target.value)}
          value={code}
          placeholder="کد اختصاصی ورود "
        />
        <Input
          onChange={(event) => setPercent(event.target.value)}
          value={percent}
          placeholder="درصد تخفیف"
        />
        <Input
          onChange={(event) => setCount(event.target.value)}
          value={count}
          placeholder="تعداد استفاده"
        />
        <AddCode onClick={handleAddCode}>
          <BsPlus size={24} />
          <h5>افزودن کد اختصاصی</h5>
        </AddCode>
      </Container>
      <CodeCards>
        {cards.map((card) => (
          <CodeCard key={card.id}>
            <RiCloseFill onClick={() => handleCardRemoval(card.id)} size={24} />
            <Summary>
              <h5>open-{card.name}</h5>
              <h5>{`${card.percent}% تخفیف | ${card.count} نفر`}</h5>
            </Summary>
          </CodeCard>
        ))}
      </CodeCards>
    </Div>
  );
};

export default Codes;
