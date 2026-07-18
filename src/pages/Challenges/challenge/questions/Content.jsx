import Question from "./Question";
import Title from "../../../../components/Title";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Content = ({
  question,
  showAnswer,
  setShowAnswer,
  setTimer,
  setFirstPage,
  setSelect,
  setFooters,
  setShining,
  
}) => {
  return (
    <Container>
      <Title right title={question.title} />
      <Wrapper>
        {question.options.map((item) => (
          <Question
            key={item.id}
            {...item}
            setShowAnswer={setShowAnswer}
            setSelect={setSelect}
            showAnswer={showAnswer}
            setTimer={setTimer}
            setFirstPage={setFirstPage}
            setFooters={setFooters}
            setShining={setShining}
            question={question}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Content;
