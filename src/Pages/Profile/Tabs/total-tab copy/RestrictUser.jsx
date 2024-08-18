import {
  BiMessageDetail,
  BiMessageSquareDetail,
  BiVolumeMute,
} from "react-icons/bi";
import { FaCircle, FaEarDeaf } from "react-icons/fa6";

import { CiImageOn } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { RiUserForbidLine } from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";

const icons = [
  { id: 1, slug: "share", label: "اشتراک گذاری", icon: <FiShare2 /> },
  { id: 2, slug: "user", label: "دنبال کردن", icon: <RiUserForbidLine /> },
  { id: 3, slug: "comment", label: "ارسال پیام", icon: <BiMessageDetail /> },
  { id: 4, slug: "pic", label: "مشاهده تصاویر", icon: <CiImageOn /> },
  { id: 5, slug: "location", label: "پیام صوتی", icon: <FaEarDeaf /> },
  { id: 6, slug: "email", label: "ارسال سند", icon: <MdOutlineMailOutline /> },
  { id: 4, slug: "sound", label: "مکالمه صوتی", icon: <BiVolumeMute /> },
  { id: 8, slug: "message", label: "", icon: <BiMessageSquareDetail /> },
  { id: 9, slug: "record", label: "", icon: <FaCircle /> },
];

const Container = styled.div`
  border: 1px solid #454545;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;
const Title = styled.h2`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 15px;
  svg {
    color: #949494;
  }
`;
const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) => (isActive ? "#ff000029" : "#1a1a18")};
  &:hover {
    background-color: #ff000029;
    svg {
      color: #f44545ab;
    }
  }
  svg {
    font-size: 20px;
    color: ${({ isActive }) => (isActive ? "#f44545ab" : "#949494")};
  }
  cursor: pointer;
`;
const RestrictUser = () => {
  const [options, setOptions] = useState({
    record: false,
    message: true,
    sound: true,
    email: false,
    location: false,
    pic: false,
    comment: false,
    user: false,
    share: true,
  });

  const handleIconClick = (slug) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [slug]: !prevOptions[slug],
    }));
  };

  return (
    <Container>
      <Title>محدود کردن کاربر</Title>
      <Icons>
        {icons.map((icon) => (
          <div key={icon.id}>
            <IconWrapper
              data-tooltip-id={icon.slug}
              isActive={options[icon.slug]}
              onClick={() => handleIconClick(icon.slug)}
            >
              {icon.icon}
            </IconWrapper>
            <ReactTooltip id={icon.slug} place="top" content={icon.label} />
          </div>
        ))}
      </Icons>
    </Container>
  );
};

export default RestrictUser;
