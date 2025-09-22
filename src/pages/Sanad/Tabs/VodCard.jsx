import circle from "../../../assets/images/link-circle.png";
import insta from "../../../assets/images/instagram.png";
import send from "../../../assets/images/send-2.png";
import styled from "styled-components";
import whatsapp from "../../../assets/images/whatsapp.png";
import Title from "../../../components/Title";

const Container = styled.div`
  background-color: #1a1a18;
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
const Code = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
  }
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
    color: ${(props) =>
      props.status === "confirmed"
        ? "#18C08F"
        : props.status === "pending"
        ? "#FFC700"
        : "#A0A0AB"};
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
const VodCard = ({ status, code, date, time, member, domain, subdomain }) => {
  return (
    <Container>
      <Info>
        <Texts>
          <Title title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم" />
          <p>
            گزارش خود را از صفحه <span>{domain}</span> بخش{" "}
            <span>{subdomain}</span> نوشته شده است
          </p>
        </Texts>
        <Socials>
          <h3>اشتراک گذاری گزارش</h3>
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
        <Code>
          <Label>کد گزارش</Label>
          <h2>#{code}</h2>
        </Code>
        <Subject>
          <Label>موضوع</Label>
          <h2>{member}</h2>
        </Subject>
        <Status status={status}>
          <Label>وضعیت</Label>
          <h2>
            {status === "confirmed"
              ? "پاسخ داده شده"
              : status === "pending"
              ? "در حال برسی"
              : "بسته شده"}
          </h2>
        </Status>
        <Date>
          <Label>تاریخ و ساعت ارسال</Label>
          <h2>
            {date} | {time}
          </h2>
        </Date>
      </Content>
    </Container>
  );
};

export default VodCard;
