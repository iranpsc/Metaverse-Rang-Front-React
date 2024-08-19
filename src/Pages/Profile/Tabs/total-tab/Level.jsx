import { Tooltip as ReactTooltip } from "react-tooltip";
import level from "../../../../Assets/images/level.png";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 10px 20px 10px 15px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
`;

const Percent = styled.div`
  border-left: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  padding-left: 25px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  h2 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 600;
    font-size: 16px;
  }
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 500;
    font-size: 16px;
  }
`;
const ProgressContainer = styled.div`
  height: 8px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  border-radius: 28px;
  direction: ltr;
`;
const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  width: 70%;
  height: 100%;
`;
const LevelCount = styled.div`
  display: flex;
  padding-right: 10px;
  justify-content: end;
  align-items: end;
  margin-top: 10px;
  img {
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
      transition: transform 0.2s;
    }
  }
`;

const Level = () => {
  return (
    <Container>
      <Percent>
        <Title>
          <h2>سطح مشارکت کننده</h2>
          <h3>٪۷۰</h3>
        </Title>
        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>
      </Percent>
      <LevelCount>
        {["شهروند", "خبرنگار", "خبرنگار", "خبرنگار"].map((item) => (
          <div key={item}>
            <img
              data-tooltip-id={item}
              width={65}
              height={65}
              src={level}
              alt={item}
            />
            <ReactTooltip id={item} place="top" content={item} />
          </div>
        ))}
      </LevelCount>
    </Container>
  );
};

export default Level;
