import circle from "../../../../assets/images/link-circle.png";
import insta from "../../../../assets/images/instagram.png";
import send from "../../../../assets/images/send-2.png";
import styled from "styled-components";
import whatsapp from "../../../../assets/images/whatsapp.png";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import useRequest from "../../../../services/Hooks/useRequest";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
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
  gap: 15px;
`;

const Buttons = styled.div`
  margin-right: auto;
  display: flex;
  gap: 10px;
  button {
    white-space: nowrap;
  }
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
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;
const socials = [
  { id: 1, icon: circle },
  { id: 2, icon: whatsapp },
  { id: 3, icon: insta },
  { id: 4, icon: send },
];
const VodCard = ({ data }) => {
  const { Request, HTTP_METHOD } = useRequest();
  const onCloseTicket = () => {
    Request(`tickets/close/${data.id}`)
      .then(() => {
        setShowDetails(false);
      })
      .catch((error) => {
        ToastError(error.response.data.message);
      });
  };

  return (
    <Container>
      <Info>
        <Texts>
          <Title title={data.title} />
          <p>#{data.code}</p>
        </Texts>
        <Socials>
          <h3>{getFieldTranslationByNames("1348")}</h3>
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
          <Label>{getFieldTranslationByNames("1340")}</Label>
          <h2>{data.sender.name}</h2>
        </Subject>
        <Status status={data?.status}>
          <Label>{getFieldTranslationByNames("1341")}</Label>
          <h2>
            {data?.status === "confirmed"
              ? getFieldTranslationByNames("1343")
              : data?.status === "pending"
              ? getFieldTranslationByNames("1344")
              : getFieldTranslationByNames("1345")}
          </h2>
        </Status>
        <Date>
          <Label>{getFieldTranslationByNames("64")}</Label>
          <h2>
            {data?.date} | {data?.time}
          </h2>
        </Date>
        <Buttons>
          <Button
            fit
            onclick={() => onCloseTicket()}
            grayTheme
            label={getFieldTranslationByNames("1350")}
          />
          <Button
            fit
            onclick={() => onCloseTicket()}
            grayTheme
            label={getFieldTranslationByNames("1349")}
          />
        </Buttons>
      </Content>
    </Container>
  );
};

export default VodCard;
