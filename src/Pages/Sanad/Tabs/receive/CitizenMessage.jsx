import avatar from "../../../../Assets/images/defulte-profile.png";
import download from "../../../../Assets/images/download.png";
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
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
  h4 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
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
    &:first-of-type {
      display: flex;
      gap: 12px;
    }
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
  width: 80%;
  margin-top: 20px;
`;

const Download = styled.img`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 36px;
  height: 36px;
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
    &:first-of-type {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

// Image downloader function
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
  return (
    <Container>
      <Content>
        <Header>
          <span>{data?.sender}</span>
          <a
            href="https://rgb.irpsc.com/fa/citizens/hm-2000001"
            target="_blank"
          >
            HM-200020
          </a>
        </Header>
        <Text>
          <p>{SanitizeHTML(data?.content)}</p>
          <h4>
            {data?.date} | {data?.time}
          </h4>
        </Text>
        {data?.attachment ? (
          <Files>
            <div>
              <Image>
                <img
                  src={data?.attachment}
                  alt="file"
                  width={200}
                  height={179}
                />
                <Download
                  src={download}
                  alt="download"
                  width={36}
                  height={36}
                  onClick={() => handleDownload(data?.attachment, "photo.png")}
                />
              </Image>
            </div>
            {data?.date} | {data?.time}
          </Files>
        ) : null}
      </Content>
      <Avatar src={avatar} alt="avatar" width={50} height={50} />
    </Container>
  );
};

export default CitizenMessage;
