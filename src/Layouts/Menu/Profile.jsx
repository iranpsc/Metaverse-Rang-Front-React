import React, { useState } from "react";
import styled from "styled-components";
import Message from "../../Assets/svg/message.svg";
import ProfileMember from "../../Assets/svg/profileMember.svg";
import Ticket from "../../Assets/svg/ticket.svg";
import Setting from "../../Assets/svg/setting.svg";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import Fallowing from "./Fallowing";
import Dynasty from "./Dynasty";
import Union from "./Union";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  text-decoration: none;
  transition: all 0.5s ease-out;
`;

const Btn = styled.button`
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) => (props.isOpenDrop ? "#000000" : "transparent")};
  height: 40px;
  border-radius: 10px;
`;
const BtnNavigator = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: 0 10px;
  border: none;
  background: ${(props) =>
    props.isOpenDrop ? props.theme.menuBg : "transparent"};
  height: 40px;
  border-radius: 10px;
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 28.8px */
  text-transform: capitalize;
`;
const SubMenu = styled.div`
  display: ${(props) => (props.isOpenDrop ? "block" : "none")};
  padding-left: 20px;
  position: ${(props) => (props.isOpen ? "none" : "fixed")};
  top: ${(props) => (props.isOpen ? "0" : "10%")};
  right: ${(props) => (props.isOpen ? "0" : "5.1%")};
  z-index: 1200;
  background-color: ${(props) =>
    props.isOpen ? "transparent" : props.theme.menuBg};
  padding: ${(props) => (props.isOpen ? "0" : " 10px 10px 8.5px 10px")};
  border-radius: 10px;
  width: ${(props) => (props.isOpen ? "100%" : "16.6%")};
`;
const Icon = styled.img`
  width: 22px;
`;
const Text = styled.p`
  color: #868b90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  text-transform: capitalize;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Profile = () => {
  const [isOpenDrop, SetIsOpenDrop] = useState(false);
  const { isOpen } = useMenuContext();
  return (
    <Container>
      <Btn isOpenDrop={isOpenDrop} onClick={() => SetIsOpenDrop(!isOpenDrop)}>
        <Text isOpen={isOpen}>منو اصلی</Text>
        <img
          src="https://s3-alpha-sig.figma.com/img/1a74/6c1c/a929cb45abf9fb338cf0492b93aca494?Expires=1698019200&Signature=q4ujsVI-NA0x4jnWOYLB~FM5lkf2lR5WxuUiDja4jy9EuTdLq7ldEfY8BguYc2ho8dk4JuoHJ~~1HzhSnTtCcirUt1m5HKyFLuQtF2O5JjcN6ps~ijnKJ0tbz-RpeViLMN3lVI4Y463N8LlalX57AyYqtMZ8t5OxwH2qehdDHyDdWKDFKonlgDXCvcxNlrlSIYseiLS0-VeHcXTWzCe0kYYnSKQiJwQulZFzYGMFCZGT1lBmEdalX9HRNMshRVTmBK-vq8ODWcpYyz10qvJ9E00L9FNSIxXCXK2mAELjg51gQ1CptT5vd5Z20w1d9P2u-Y-cn4f053XFX-29tnACGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          style={{ width: "30px", height: "30px" }}
          alt=""
        />
      </Btn>
      <SubMenu isOpenDrop={isOpenDrop} isOpen={isOpen}>
        <Btn
          isOpenDrop={isOpenDrop}
          onClick={() => SetIsOpenDrop(!isOpenDrop)}
          isHidden={isOpen}
        >
          <Text isOpen={isOpen}>منو اصلی</Text>
          <img
            src="https://s3-alpha-sig.figma.com/img/1a74/6c1c/a929cb45abf9fb338cf0492b93aca494?Expires=1698019200&Signature=q4ujsVI-NA0x4jnWOYLB~FM5lkf2lR5WxuUiDja4jy9EuTdLq7ldEfY8BguYc2ho8dk4JuoHJ~~1HzhSnTtCcirUt1m5HKyFLuQtF2O5JjcN6ps~ijnKJ0tbz-RpeViLMN3lVI4Y463N8LlalX57AyYqtMZ8t5OxwH2qehdDHyDdWKDFKonlgDXCvcxNlrlSIYseiLS0-VeHcXTWzCe0kYYnSKQiJwQulZFzYGMFCZGT1lBmEdalX9HRNMshRVTmBK-vq8ODWcpYyz10qvJ9E00L9FNSIxXCXK2mAELjg51gQ1CptT5vd5Z20w1d9P2u-Y-cn4f053XFX-29tnACGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            style={{ width: "30px", height: "30px" }}
            alt=""
          />
        </Btn>
        <BtnNavigator>
          <Icon src={Ticket} />
          ارسال سند
        </BtnNavigator>
        <BtnNavigator>
          <Icon src={Message} />
          گفتگو
        </BtnNavigator>
        <BtnNavigator>
          <Icon src={ProfileMember} />
          پروفایل
        </BtnNavigator>
        <BtnNavigator>
          <Icon src={Setting} />
          تنظیمات
        </BtnNavigator>
        <Fallowing />
        <Dynasty />
        <Union />
      </SubMenu>
    </Container>
  );
};

export default Profile;
