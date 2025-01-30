import { BiCommentDots } from "react-icons/bi";

import { LuShare2 } from "react-icons/lu";
import ShareModal from "./ShareModal";
import { TiUserAddOutline } from "react-icons/ti";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import ButtonIcon from "../../../../Components/ButtonIcon";
import useAuth from "../../../../Services/Hooks/useAuth";
import { UserContext } from "../../../../Services/Reducers/UserContext";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  padding: 15px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-bottom-left-radius: 10px;
  @media (min-width: 840px) {
    padding: 12px;
  }
  @media (min-width: 1024px) {
    padding: 20px;
  }
  @media (min-width: 1400px) {
    padding: 20px;
    border-bottom-right-radius: 10px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #454545;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 13px;
    font-weight: 500;
  }
`;
const Title = styled.h2`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 20px;
  font-weight: 600;
`;
const Code = styled.a`
  color: #0066ff;
  font-weight: 500;
  color: #0066ff;
  text-decoration: none;
  text-transform: uppercase;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const Follow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 12px;
  }
`;
const Count = styled.h2`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 20px;
  font-weight: 500;
`;
const Buttons = styled.div``;
const Upper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0 10px 0;
`;
const Info = () => {
  const [openShare, setOpenShare] = useState(false);
  const [userId] = useContext(UserContext);
  const [user, setUser] = useState({});
  const { Request } = useRequest();
  useEffect(() => {
    Request(`users/${userId.id}/profile`).then((response) => {
      setUser(response.data.data);
    });
  }, []);
  console.log(user);
  return (
    <Container>
      <Header>
        <div>
          <Title>{user?.name}</Title>
          <Code
            href={`https://rgb.irpsc.com/fa/citizens/${user?.code}`}
            target="_blank"
          >
            {user?.code}
          </Code>
        </div>
        <span>
          {getFieldTranslationByNames("citizenship-account", "Membership from")}{" "}
          {user?.registered_at}
        </span>
      </Header>
      <Content>
        <Follow>
          <Count>{user?.followers_count}</Count>
          <span>
            {getFieldTranslationByNames("citizenship-account", "followers")}
          </span>
        </Follow>
        <div
          style={{ height: "55px", width: "1px", backgroundColor: "#454545" }}
        />
        <Follow>
          <Count>{user?.following_count}</Count>
          <span>
            {getFieldTranslationByNames("citizenship-account", "following")}
          </span>
        </Follow>
      </Content>
      <Buttons>
        <Upper>
          {/* <ButtonIcon
            grow
            icon={<TiUserAddOutline />}
            label="دنبال کردن"
            fill
            onclick={() => {}}
          /> */}
          <ButtonIcon
            grow
            icon={<LuShare2 />}
            label={getFieldTranslationByNames("citizenship-account", "sharing")}
            onclick={() => setOpenShare(true)}
          />
        </Upper>
        {/* <ButtonIcon
          grow
          icon={<BiCommentDots />}
          label="پیام دادن"
          onclick={() => {}}
        /> */}
      </Buttons>
      {openShare && <ShareModal setOpenShare={setOpenShare} data={user} />}
    </Container>
  );
};

export default Info;
