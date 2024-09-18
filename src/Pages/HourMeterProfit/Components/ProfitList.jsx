import { animated, useTransition } from "react-spring";

import ProfitCard from "./ProfitCard";
import styled from "styled-components";

const Container = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfitList = ({ cards, onClick }) => {
  const transitions = useTransition(cards, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  });

  return (
    <Container>
      {transitions((style, item) => (
        <animated.div key={item.id} style={style}>
          <ProfitCard {...item} onclick={() => onClick(item)} />
        </animated.div>
      ))}
    </Container>
  );
};

export default ProfitList;
