import React from "react";
import download from "../../../assets/images/reports/download.png";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  h2 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Files = styled.div`
  border: 1px solid #454545;
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  div {
    display: flex;
    gap: 12px;
    margin-top: 10px;
  }

  h4 {
    color: #a0a0ab;
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
  width: 100%;
  margin-left: auto;
  direction: rtl;
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

const handleDownload = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const stripHtmlTags = (htmlString) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || "";
};
const CitizenMessage = ({ isEditing, description, files }) => {
  const filePreviews = files.map((file) => ({
    ...file,
    url: URL.createObjectURL(file),
  }));

  return (
    <Container>
      <Content>
        <Files>
          <h2>متن یادداشت</h2>
          <p>{stripHtmlTags(description)}</p>
          <div>
            {filePreviews.length > 0 &&
              filePreviews.map((file, index) => (
                <Image key={index}>
                  <img
                    src={file.url}
                    alt={file.name}
                    width={200}
                    height={179}
                  />
                  <Download
                    src={download}
                    alt="download"
                    width={36}
                    height={36}
                    onClick={() => handleDownload(file.url, file.name)}
                  />
                </Image>
              ))}
          </div>
        </Files>
      </Content>
    </Container>
  );
};

export default CitizenMessage;
