import avatar from "../../../../assets/images/profile/slide.png";
import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 30px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover img {
    box-shadow: 0px 10px 25px -5px #0066ff40;
    border: 2px solid #0066ff;
  }
  h3 {
    color: #dedee9;
    font-size: 18px;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: #0066ff;
    font-size: 16px;
    font-weight: 500;
  }
  img {
    border-radius: 100%;
    border: 2px solid transparent;
    transition: all 0.2s linear;
  }
`;

const Status = styled.div`
  h2 {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    color: #18c08f;
    margin-top: 4px;
  }
`;
const Date = styled.div`
  h2 {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
    margin-top: 4px;
  }
`;

const MemberCard = ({ status, code, date, time }) => {
  return (
    <Container>
      <Profile>
        <img src={avatar} width={80} height={80} />
        <div>
          <h3>Sorena Qadiri</h3>
          <a
            h
            href={`https://rgb.irpsc.com/fa/citizen/${code}`}
            target="_blank"
          >
            HM-{code}
          </a>
        </div>
      </Profile>
      <Status>
        <h2>وضعیت درخواست</h2>
        <h3
          style={{
            color: `${
              status === "confirmed"
                ? "#18C08F"
                : status === "pending"
                ? "#FFC700"
                : "#FF0000"
            }`,
          }}
        >
          {status === "confirmed"
            ? "تایید شده"
            : status === "pending"
            ? "در دست بررسی"
            : "رد شده"}
        </h3>
      </Status>
      <Date>
        <h2>تاریخ و ساعت ارسال </h2>
        <h3>
          {date} | {time}
        </h3>
      </Date>
    </Container>
  );
};

export default MemberCard;
