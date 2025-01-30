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
  { id: 2, slug: "follow", label: "to follow", icon: <RiUserForbidLine /> },
  {
    id: 3,
    slug: "send_message",
    label: "send message",
    icon: <BiMessageDetail />,
  },
  {
    id: 4,
    slug: "view_profile_images",
    label: "view images",
    icon: <CiImageOn />,
  },
  {
    id: 5,
    slug: "view_features_locations",
    label: "voice message",
    icon: <FaEarDeaf />,
  },
  {
    id: 6,
    slug: "email",
    label: "send the document",
    icon: <MdOutlineMailOutline />,
  },
  { id: 7, slug: "sound", label: "voice conversation", icon: <BiVolumeMute /> },
  { id: 8, slug: "send_ticket", label: "", icon: <BiMessageSquareDetail /> },
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
    send_message: false,
    sound: false,
    email: false,
    view_features_locations: false,
    view_profile_images: false,
    send_ticket: false,
    follow: false,
    share: false,
  });

  const { Request, HTTP_METHOD } = useRequest();
  const [user] = useContext(UserContext);

  const [hasExistingLimitation, setHasExistingLimitation] = useState(false);

  useEffect(() => {
    Request(`users/${user?.id}/profile-limitations`, HTTP_METHOD.GET).then(
      (response) => {
        if (response.data.data?.options) {
          const convertedOptions = Object.entries(
            response.data.data.options
          ).reduce(
            (acc, [key, value]) => ({
              ...acc,
              [key]: value === "1",
            }),
            {}
          );

          setOptions({
            ...options,
            ...convertedOptions,
            id: response.data.data.id,
          });
          setHasExistingLimitation(true);
        }
      }
    );
  }, []);

  const handleIconClick = (slug) => {
    const updatedOptions = {
      ...options,
      [slug]: !options[slug],
    };
    setOptions(updatedOptions);

    const formData = new FormData();
    const optionsToSend = [
      "follow",
      "share",
      "send_ticket",
      "view_profile_images",
      "view_features_locations",
      "send_message",
    ];

    optionsToSend.forEach((key) => {
      formData.append(`options[${key}]`, updatedOptions[key] ? "1" : "0");
    });

    formData.append("note", "");
    if (hasExistingLimitation) {
      formData.append("_method", "put");
    }

    Request(
      hasExistingLimitation
        ? `profile-limitations/${options.id}`
        : "profile-limitations",
      HTTP_METHOD.POST,
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    ).catch((error) => {
      console.error("Error updating restrictions:", error);
    });
  };
  console.log(options);
  return (
    <Container>
      <Title>
        {getFieldTranslationByNames(8720)}
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
