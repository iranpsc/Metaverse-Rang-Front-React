import { Tooltip as ReactTooltip } from "react-tooltip";
import down from "../../../../../Assets/images/downcitizen.png";
import level1 from "../../../../../Assets/images/level1.png";
import level2 from "../../../../../Assets/images/level2.png";
import level3 from "../../../../../Assets/images/level3.png";
import styled from "styled-components";
import { ReactComponent as FlagIcon } from "../../../../../Assets/svg/flag.svg";

const levels = [
  { id: "1", label: "سطح 1", image: level1 },
  { id: "2", label: "سطح 2", image: level2 },
  { id: "3", label: "سطح 3", image: level3 },
];

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border: 1px solid transparent;
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  /* width: 245px; */
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s linear;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
  h2 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 20px;
    font-weight: 700;
  }
  h5 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: 500;
  }
`;
const Image = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  overflow: hidden;
  img {
    object-fit: contain;
  }
`;
const Level = styled.div`
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  padding: 18px 14px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.containerPrimary};
  justify-content: space-between;
  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: 500;
  }
`;
const Flag = styled(FlagIcon)`
  width: 20px;
  height: 20px;
  stroke: ${(props) => props.theme.colors.primary};
`;
const CitizenCard = ({ name, code, image }) => {
  return (
    <Container>
      <Image>
        <img
          src={image}
          alt="citizen"
          loading="lazy"
          width={120}
          height={120}
        />
      </Image>
      <h2>{name}</h2>
      <h5>{code}</h5>
      <Level>
        <p>سطح توسعه دهنده</p>
        <div>
          {levels.map((level) => (
            <div key={level.id}>
              <img
                data-tooltip-id={level?.id}
                src={level.image}
                alt={level.label}
                width={27}
                height={27}
                loading="lazy"
              />
              <ReactTooltip id={level.id} place="top" content={level.label} />
            </div>
          ))}
        </div>
      </Level>
      <Footer>
        <span>جزییات شهروند</span>
        <Flag />
      </Footer>
    </Container>
  );
};

export default CitizenCard;
