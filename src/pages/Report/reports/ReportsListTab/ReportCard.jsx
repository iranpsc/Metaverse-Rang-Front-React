import Title from "../../../../components/Title";
import { ReactComponent as CircleIcon } from "../../../../assets/images/reports/link-circle.svg";
import { ReactComponent as InstaIcon } from "../../../../assets/images/reports/instagram.svg";
import { ReactComponent as SendIcon } from "../../../../assets/images/reports/send-2.svg";
import { ReactComponent as WhatsappIcon } from "../../../../assets/images/reports/whatsapp.svg";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";
import { convertToPersian } from "../../../../services/Utility/index";
import { useLanguage } from "../../../../services/reducers/LanguageContext";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
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
  grid-template-columns: 1fr 1fr 1fr /*1fr*/;
  margin-top: 20px;
`;
const Socials = styled.div`
  ${({ isPersian }) =>
    isPersian ? "padding-right: 20px;" : "padding-left: 20px;"}
  ${({ isPersian }) =>
    isPersian
      ? "border-right: 1px solid #454545;"
      : "border-left: 1px solid #454545;"}  
  

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

    .stroke-color {
      stroke: ${(props) => props.theme.colors.newColors.shades.title};
    }
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
  color: #a0a0ab;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;
const Code = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
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
  { id: 1, icon: <CircleIcon /> },
  { id: 2, icon: <WhatsappIcon /> },
  { id: 3, icon: <InstaIcon /> },
  { id: 4, icon: <SendIcon /> },
];

const ReportCard = ({
  reportDetails,
  status,
  code,
  date,
  time,
  member,
  domain,
  subdomain,
}) => {
  const isPersian = useLanguage();
  const truncateTitle = (titleString) => {
    return titleString.length > 60
      ? titleString.substring(0, 60) + "..."
      : titleString;
  };
  return (
    <Container>
      <Info>
        <Texts>
          <Title title={truncateTitle(reportDetails.title)} />
          <p>
            {getFieldTranslationByNames("1376")} <span>{domain}</span>{" "}
            {getFieldTranslationByNames("1377")}
            <span> {subdomain}</span>{" "}
          </p>
        </Texts>
        <Socials isPersian={isPersian}>
          <h3>{getFieldTranslationByNames("244")}</h3>
          <div>
            {socials.map((item) => (
              <div key={item.id} style={{ width: 24, height: 24 }}>
                {item.icon}
              </div>
            ))}
          </div>
        </Socials>
      </Info>
      <Content>
        <Code>
          <Label>{getFieldTranslationByNames("1383")} </Label>
          <h2>#{convertToPersian(code)}</h2>
        </Code>
        {/* <Subject>
          <Label>{getFieldTranslationByNames("746")}</Label>
          <h2>{member}</h2>
        </Subject>*/}
        <Status status={status}>
          <Label>{getFieldTranslationByNames("65")}</Label>
          <h2>
            {status === "confirmed"
              ? getFieldTranslationByNames("1343")
              : status === "pending"
              ? getFieldTranslationByNames("852")
              : getFieldTranslationByNames("852")}
            {/*getFieldTranslationByNames("1345")*/}
          </h2>
        </Status>
        <Date>
          <Label>{getFieldTranslationByNames("850")}</Label>
          <h2>
            {date} | {time}
          </h2>
        </Date>
      </Content>
    </Container>
  );
};

export default ReportCard;
