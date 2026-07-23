import Question from "./Question";
import Title from "../../../../components/Title";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;

`;

const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Content = ({
  question,
  showAnswer,
  selectedAnswerId,
  onSelectAnswer,
}) => {
  return (
    <Container>
      <Title small right title={question.title} />
      <Wrapper>
        {question.options.map((item) => (
          <Question
            key={item.id}
            {...item}
            questionID={question.questionID}
            showAnswer={showAnswer}
            selectedAnswerId={selectedAnswerId}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Content;
