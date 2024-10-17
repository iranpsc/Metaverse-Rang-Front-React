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
  gap: 10px;
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
const Container = styled.div`
  display: flex;
  gap: 12px;
  width: fit-content;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    border-radius: 100%;
  }
`;
const FilesContainer = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: auto;
  width: fit-content;
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
  display: flex;
  align-items: center;
  gap: 10px;
`;
const FileItem = styled.div`
  position: relative;
  width: 192px;
  height: 171px;
  border-radius: 10px;
  background-color: white;
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
const Download = styled.img`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const AdminMessage = ({ data }) => {
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container>
      <Content>
        <Header>
          <span>{data.responser_name}</span>
          <a
            href="https://rgb.irpsc.com/fa/citizens/hm-2000001"
            target="_blank"
          >
            HM-200020
          </a>
        </Header>
        <Text>
          <p>{SanitizeHTML(data.response)}</p>
          <h4>
            {" "}
            {data?.date} | {data?.time}
          </h4>
        </Text>
        {data.attachment && (
          <FilesContainer>
            <Files>
              <FileItem>
                {data.attachment && <img src={data.attachment} />}
                <Download
                  src={data.attachment}
                  onClick={() => handleDownload(data.attachment)}
                />
              </FileItem>
            </Files>
            <h4>
              {" "}
              {data?.date} | {data?.time}
            </h4>
          </FilesContainer>
        )}
      </Content>
      <img src={avatar} alt="avatar" width={50} height={50} />
    </Container>
  );
};

export default AdminMessage;