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
import { useContext, useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import { UserContext } from "../../../../Services/Reducers/UserContext";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const icons = [
  { id: 1, slug: "share", label: "sharing", icon: <FiShare2 /> },
  { id: 2, slug: "user", label: "to follow", icon: <RiUserForbidLine /> },
  { id: 3, slug: "comment", label: "send message", icon: <BiMessageDetail /> },
  { id: 4, slug: "pic", label: "view images", icon: <CiImageOn /> },
  { id: 5, slug: "location", label: "voice message", icon: <FaEarDeaf /> },
  {
    id: 6,
    slug: "email",
    label: "send the document",
    icon: <MdOutlineMailOutline />,
  },
  { id: 7, slug: "sound", label: "voice conversation", icon: <BiVolumeMute /> },
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
  color: ${(props) => props.theme.colors.newColors.shades.title};
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
    color: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  }
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isActive
      ? "#ff000029"
      : props.theme.colors.newColors.otherColors.iconBg};
  &:hover {
    background-color: #ff000029;
    svg {
      color: #f44545ab;
    }
  }
  svg {
    font-size: 20px;
    color: ${(props) =>
      props.isActive
        ? "#f44545ab"
        : props.theme.colors.newColors.otherColors.iconText};
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

  const { Request, HTTP_METHOD } = useRequest();
  const [user] = useContext(UserContext);

  useEffect(() => {
    Request(`users/${user?.id}/profile-limitations`, HTTP_METHOD.GET).then(
      (response) => {
        setOptions(response.data.data.options);
      }
    );
  }, [user?.id, Request, HTTP_METHOD.GET]);

  const handleIconClick = (slug) => {
    const updatedOptions = {
      ...options,
      [slug]: !options[slug],
    };
    setOptions(updatedOptions);

    const data = {
      limited_user_id: user?.id,
      options: {
        follow: updatedOptions.user ? 1 : 0,
        share: updatedOptions.share ? 1 : 0,
        send_ticket: updatedOptions.comment ? 1 : 0,
        view_profile_images: updatedOptions.pic ? 1 : 0,
        view_features_locations: updatedOptions.location ? 1 : 0,
        send_message: updatedOptions.message ? 1 : 0,
      },
      note: "", // You can change this to whatever note you need
    };

    Request("profile-limitations", HTTP_METHOD.POST, data)
      .then((response) => {
        console.log("Restrictions updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating restrictions:", error);
      });
  };

  return (
    <Container>
      <Title>
        {getFieldTranslationByNames("citizenship-account", "limitation")}
      </Title>
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
            <ReactTooltip
              id={icon.slug}
              place="top"
              content={getFieldTranslationByNames(
                "citizenship-account",
                icon.label
              )}
            />
          </div>
        ))}
      </Icons>
    </Container>
  );
};

export default RestrictUser;
