import { CiEdit } from "react-icons/ci";
import { EditContext } from "./NoteDetails";
import { GoTrash } from "react-icons/go";
import Title from "../../Title";
import circle from "../../../assets/images/reports/link-circle.png";
import insta from "../../../assets/images/reports/instagram.png";
import send from "../../../assets/images/reports/send-2.png";
import styled from "styled-components";
import { useContext } from "react";
import whatsapp from "../../../assets/images/reports/whatsapp.png";

const Button = styled.div`
  background-color: #3b3b3b;
  border-radius: 10px;
  display: flex;
  padding: 10px 22px;
  gap: 6px;
  cursor: pointer;
  color: #949494;
  svg {
    margin-top: 2px;
  }
`;

const Container = styled.div`
  background-color: #1a1a18;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  direction: rtl;
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
    color: #ffffff;
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
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
    span {
      font-weight: 600;
      color: white;
    }
  }
`;

const Label = styled.h3`
  color: #a0a0ab;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Subject = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
  }
`;
const Status = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }
`;
const Date = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }
`;
const socials = [
  { id: 1, icon: circle },
  { id: 2, icon: whatsapp },
  { id: 3, icon: insta },
  { id: 4, icon: send },
];
const NoteCard = ({
  status,
  code,
  name,
  title,
  publish_date,
  onRemove,
  description,
  date,
  time,
  member,
}) => {
  const { isEditing, setIsEditing } = useContext(EditContext);
  return (
    <Container>
      <Info>
        <Texts>
          <Title title={title} />
          <p>#{code}</p>
        </Texts>
        <Socials>
          <h3>اشتراک گذاری سند</h3>
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
          <Label>ثبت کننده</Label>
          <h2>{name}</h2>
        </Subject>
        <Status status={status}>
          <Label>تاریخ ثبت یاداشت</Label>
          <h2>{publish_date}</h2>
        </Status>
        <Date>
          <Label>آخرین بروزرسانی</Label>
          <h2>{publish_date}</h2>
        </Date>
        <div
          style={{
            marginRight: "auto",
            display: "flex",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <Button onClick={onRemove}>
            <GoTrash size={22} />
            <h4>حذف</h4>
          </Button>
          <Button onClick={() => setIsEditing(true)}>
            <CiEdit size={22} />
            <h4>ویرایش</h4>
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default NoteCard;
