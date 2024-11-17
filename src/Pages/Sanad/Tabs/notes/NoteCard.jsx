import { CiEdit } from "react-icons/ci";
import { EditContext } from "./NoteDetails";
import { GoTrash } from "react-icons/go";

import circle from "../../../../Assets/images/link-circle.png";
import insta from "../../../../Assets/images/instagram.png";
import send from "../../../../Assets/images/send-2.png";
import styled from "styled-components";
import { useContext } from "react";
import whatsapp from "../../../../Assets/images/whatsapp.png";
import Title from "../../../../Components/Title";
import useRequest from "../../../../Services/Hooks/useRequest";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Button = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.garyBtn};
  border-radius: 10px;
  display: flex;
  padding: 10px 22px;
  gap: 6px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.newColors.otherColors.grayBtnText};
  svg {
    margin-top: 2px;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.inputBg};
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #454545;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
`;
const Socials = styled.div`
  padding-right: 20px;
  border-right: 1px solid #454545;
  h3 {
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
  div {
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
const Texts = styled.div`
  p {
    margin: 10px 0;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
    span {
      font-weight: 600;
      color: ${(props) => props.theme.colors.newColors.shades.title};
    }
  }
`;

const Label = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Subject = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;
const Status = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;
const Date = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;
const socials = [
  { id: 1, icon: circle },
  { id: 2, icon: whatsapp },
  { id: 3, icon: insta },
  { id: 4, icon: send },
];
const NoteCard = ({ data }) => {
  const { isEditing, setIsEditing } = useContext(EditContext);
  const { state, dispatch } = useContext(GlobalNoteStateContext);
  const { Request } = useRequest();
  const removeNoteHandler = async () => {
    try {
      await Request(`notes/${data.id}`, "DELETE");
      dispatch({ type: "REMOVE_NOTE", payload: data.id });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };
  return (
    <Container>
      <Info>
        <Texts>
          <Title title={data?.title} />
          <p>#{data?.id}</p>
        </Texts>
        <Socials>
          <h3>{getFieldTranslationByNames(15090)}</h3>
          <div>
            {socials.map((item) => (
              <img
                width={24}
                height={24}
                key={item.id}
                src={item.icon}
                alt="icon"
              />
            ))}
          </div>
        </Socials>
      </Info>
      <Content>
        <Subject>
          <Label>{getFieldTranslationByNames(15111)}</Label>
          <h2>{data?.name}</h2>
        </Subject>
        <Status status={data?.status}>
          <Label>
            {getFieldTranslationByNames(15104)}
          </Label>
          <h2>{data?.date}</h2>
        </Status>
        <Date>
          <Label>
            {getFieldTranslationByNames(15097)}
          </Label>
          <h2>{data?.date}</h2>
        </Date>
        <div
          style={{
            marginRight: "auto",
            display: "flex",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <Button onClick={removeNoteHandler}>
            <GoTrash size={22} />
            <h4>{getFieldTranslationByNames(15083)}</h4>
          </Button>
          <Button onClick={() => setIsEditing(true)}>
            <CiEdit size={22} />
            <h4>{getFieldTranslationByNames(15076)}</h4>
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default NoteCard;
