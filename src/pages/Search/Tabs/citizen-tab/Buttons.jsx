import { BiCommentDots } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { TiUserAddOutline } from "react-icons/ti";
import { RiUserUnfollowLine } from "react-icons/ri";
import styled from "styled-components";
import { useContext } from "react";
import { FollowContext } from "../../../../services/reducers/FollowContext";
import useRequest from "../../../../services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { getFieldTranslationByNames } from "../../../../services/Utility";

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: ${(props) =>
      props.theme.colors.newColors.otherColors.buttonPrimaryText};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 18px;
`;

const Buttons = ({ user }) => {
  const [follow, dispatch] = useContext(FollowContext);
  const { Request } = useRequest();
  const Navigate = useNavigate();

  //Function to handle when user follows another user
  const onFollowHandler = (id) => {
    Request(`follow/${id}`).then(() => {
      Request("following").then((response) => {
        dispatch(response.data.data);
      });
    });
  };

  //Function to handle when user unfollows another user
  const onUnFollowHandler = (id) => {
    Request(`unfollow/${id}`).then(() => {
      Request("following").then((response) => {
        dispatch(response.data.data);
      });
    });
  };

  // Determine if the user is already followed
  const isFollowed =
    _.findIndex(follow, (o) => parseInt(o.id) === parseInt(user?.id)) > -1;

  const items = [
    {
      id: 1,
      icon: isFollowed ? <RiUserUnfollowLine /> : <TiUserAddOutline />,
      label: isFollowed
        ? getFieldTranslationByNames("467")
        : getFieldTranslationByNames("467"),
      onClick: isFollowed
        ? () => onUnFollowHandler(user?.id)
        : () => onFollowHandler(user?.id),
    },
    {
      id: 2,
      icon: <BiCommentDots />,
      label: getFieldTranslationByNames("468"),
      onClick: () => {},
    },
    {
      id: 3,
      icon: <MdOutlineMailOutline />,
      label: getFieldTranslationByNames("469"),
      onClick: () =>
        Navigate("/metaverse/Documents", {
          state: { code: user?.code, user: user?.id },
        }),
    },
  ];

  return (
    <Container>
      {items.map((item) => (
        <div key={item.id} onClick={item.onClick}>
          <IconWrapper data-tooltip-id={item.label}>{item.icon}</IconWrapper>
          <ReactTooltip
            style={{ backgroundColor: "#434343", borderRadius: "10px" }}
            place="right"
            id={item.label}
            content={item.label}
          />
        </div>
      ))}
    </Container>
  );
};

export default Buttons;
