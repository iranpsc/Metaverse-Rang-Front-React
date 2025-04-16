import avatar from "../../../../assets/images/defulte-profile.png";
import download from "../../../../assets/images/download.png";
import styled from "styled-components";
import { SanitizeHTML } from "../../../../Services/Utility";

const Content = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 600;
  }
  a {
    color: #0066ff;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
  }
`;

const Text = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 12px;
  border-radius: 10px;
  p,
  h4 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
  p {
    text-align: right;
  }
  h4 {
    width: fit-content;
    margin-right: auto;
    margin-top: 10px;
  }
`;

const Files = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: auto;
  width: fit-content;
  div {
    display: flex;
    gap: 12px;
  }
  h4 {
    color: #a0a0a0ab;
    font-size: 16px;
    font-weight: 400;
    width: fit-content;
    margin-right: auto;
    margin-top: 10px;
  }
`;

const Avatar = styled.img`
  border-radius: 100%;
`;

const Container = styled.div`
  display: flex;
  gap: 12px;
  width: fit-content;
  margin-left: auto;
  margin-top: 20px;
`;

const Download = styled.img`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 36px !important;
  height: 36px !important;
  cursor: pointer;
`;

const Image = styled.div`
  position: relative;
  width: 192px;
  height: 171px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  overflow: hidden;
  border: 1px solid gray;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const handleDownload = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CitizenMessage = ({ data }) => {
  const citizenResponses = data?.responses?.filter(
    (response) => response.responser_name === data?.sender?.name
  );

  const renderMessage = (content, date, time, attachment) => (
    <>
      <Text>
        <p>{SanitizeHTML(content)}</p>
        <h4>
          {date} | {time}
        </h4>
      </Text>
      {attachment && (
        <Files>
          <div>
            <Image>
              <img src={attachment} alt="file" />
              <Download
                src={download}
                alt="download"
                onClick={() => handleDownload(attachment, "photo.png")}
              />
            </Image>
          </div>
          {date} | {time}
        </Files>
      )}
    </>
  );

  return (
    <>
      <Container>
        <Content>
          <Header>
            <span>{data?.sender?.name}</span>
            <a
              href={`https://rgb.irpsc.com/fa/citizens/${data?.sender?.code}`}
              target="_blank"
            >
              {data?.sender.code}
            </a>
          </Header>
          {renderMessage(
            data?.content,
            data?.date,
            data?.time,
            data?.attachment
          )}
        </Content>
        <Avatar
          src={data?.sender["profile-photo"] || avatar}
          alt="avatar"
          width={50}
          height={50}
        />
      </Container>
      {citizenResponses?.map((response) => (
        <Container key={response.id}>
          <Content>
            <Header>
              <span>{data?.sender?.name}</span>
              <a
                href={`https://rgb.irpsc.com/fa/citizens/${data?.sender?.code}`}
                target="_blank"
              >
                {data?.sender.code}
              </a>
            </Header>
            {renderMessage(
              response.response,
              response.date,
              response.time,
              response.attachment
            )}
          </Content>
          <Avatar
            src={data?.sender["profile-photo"] || avatar}
            alt="avatar"
            width={50}
            height={50}
          />
        </Container>
      ))}
    </>
  );
};

export default CitizenMessage;
