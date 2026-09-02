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
import useRequest from "../../../../services/Hooks/useRequest";
import { UserContext } from "../../../../services/reducers/UserContext";
import { getTranslation } from "../../../../services/Utility";

const icons = [
  {
    id: 1,
    slug: "share",
    label: 734,
    icon: <FiShare2 />,
  },
  {
    id: 2,
    slug: "follow",
    label: 733,
    icon: <RiUserForbidLine />,
  },
  {
    id: 3,
    slug: "send_message",
    label: 469,
    icon: <BiMessageDetail />,
  },
  {
    id: 4,
    slug: "view_profile_images",
    label: 732,
    icon: <CiImageOn />,
  },
  {
    id: 5,
    slug: "view_features_locations",
    label: 731,
    icon: <FaEarDeaf />,
  },
  {
    id: 6,
    slug: "email",
    label: 730,
    icon: <MdOutlineMailOutline />,
  },
  {
    id: 7,
    slug: "sound",
    label: 729,
    icon: <BiVolumeMute />,
  },
  {
    id: 8,
    slug: "send_ticket",
    label: 728,
    icon: <BiMessageSquareDetail />,
  },
  {
    id: 9,
    slug: "record",
    label: 727,
    icon: <FaCircle />,
  },
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
      : props.theme.colors.newColors.otherColors.menuBg};

  &:hover {
    background-color: #ff000029;

    svg {
      color: #f44545ab;
    }
  }

  svg {
    font-size: 20px;
    color: ${(props) => (props.isActive ? "#f44545ab" : "#868B90")};
  }

  cursor: pointer;
`;

const RestrictUser = () => {
  const { Request, HTTP_METHOD } = useRequest();
  const [user] = useContext(UserContext);

  const [limitationId, setLimitationId] = useState(null);
  const [hasExistingLimitation, setHasExistingLimitation] = useState(false);

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

  useEffect(() => {
    const requestId = user?.id;

    if (!requestId) return;

    Request(`users/${requestId}/profile-limitations`, HTTP_METHOD.GET)
      .then((response) => {
        const limitation = response?.data?.data ?? response?.data;

        if (!limitation?.id) {
          setHasExistingLimitation(false);
          setLimitationId(null);
          return;
        }

        setLimitationId(limitation.id);

        setOptions((prevOptions) => ({
          ...prevOptions,
          follow: limitation.options?.follow === true,
          send_message: limitation.options?.send_message === true,
          send_ticket: limitation.options?.send_ticket === true,
          share: limitation.options?.share === true,
          view_features_locations:
            limitation.options?.view_features_locations === true,
          view_profile_images: limitation.options?.view_profile_images === true,
        }));

        setHasExistingLimitation(true);
      })
      .catch((error) => {
        console.error("Error getting profile limitations:", error);
      });
  }, [user?.id]);

  const handleIconClick = (slug) => {
    const optionsToSend = [
      "follow",
      "send_message",
      "send_ticket",
      "share",
      "view_features_locations",
      "view_profile_images",
    ];

    if (!optionsToSend.includes(slug)) {
      return;
    }

    const updatedOptions = {
      ...options,
      [slug]: !options[slug],
    };

    setOptions(updatedOptions);

    const formData = new FormData();

    optionsToSend.forEach((key) => {
      formData.append(key, updatedOptions[key] ? "true" : "false");
    });

    formData.append("note", "");

    if (hasExistingLimitation) {
      formData.append("_method", "put");
    }

    Request(
      hasExistingLimitation
        ? `profile-limitations/${limitationId}`
        : "profile-limitations",
      HTTP_METHOD.POST,
      formData,
      {
        "Content-Type": "multipart/form-data",
      },
    )
    /** .then((response) => {
        console.log("restriction updated:", response);
      }) */
     
      .catch((error) => {
        console.error("Error updating restrictions:", error);

        setOptions(options);
      });
  };

  return (
    <Container>
      <Title>{getTranslation("726")}</Title>

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
              content={getTranslation(icon.label)}
            />
          </div>
        ))}
      </Icons>
    </Container>
  );
};

export default RestrictUser;
