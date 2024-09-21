import { Tooltip as ReactTooltip } from "react-tooltip";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Services/Reducers/UserContext";
import useRequest from "../../../../Services/Hooks/useRequest";

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
`;
const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  width: ${(props) => `${props.percentage}%`};
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
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
  const [userId] = useContext(UserContext);
  const [user, setUser] = useState({});
  const { Request } = useRequest();
  useEffect(() => {
    Request(`users/${userId.id}/level`).then((response) => {
      setUser(response.data.data);
    });
  }, []);

  return (
    <Container>
      <Percent>
        <Title>
          <h2>{user?.latest_level?.name}</h2>
          <h3>{user?.score_percentage_to_next_level}%</h3>
        </Title>
        <ProgressContainer>
          <ProgressBar percentage={user?.score_percentage_to_next_level} />
        </ProgressContainer>
      </Percent>
      <LevelCount>
        {user.previous_levels &&
          user?.previous_levels.map((item, index) => (
            <div key={index}>
              <img
                data-tooltip-id={item.slug}
                width={65}
                height={65}
                src={item.image}
                alt={item.image}
              />
              <ReactTooltip id={item.slug} place="top" content={item.name} />
            </div>
          ))}
      </LevelCount>
    </Container>
  );
};

export default Level;
