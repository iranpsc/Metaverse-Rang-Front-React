import styled from "styled-components";
import avatar from "../../../../assets/images/defulte-profile.png";
import downloadIcon from "../../../../assets/images/download.png";
import nonPhoto from "../../../../assets/images/file.png";
import {
  SanitizeHTML,
  metarangUrlCitizen,
  ConvertJalali,
  convertToPersian,
} from "../../../../services/Utility";

const IMAGE_EXTENSIONS = new Set([
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
]);


const isImage = (url) => {
  if (!url) return false;

  const extension = url
    .split(/[?#]/)[0]
    .split(".")
    .pop()
    ?.toLowerCase();

  return IMAGE_EXTENSIONS.has(extension);
};

const getFileName = (url) => {
  if (!url) return "file";

  return (
    url
      .split("/")
      .pop()
      ?.split(/[?#]/)[0] || "file"
  );
};

const downloadFile = (url) => {
  if (!url) return;

  const link = document.createElement("a");

  link.href = url;
  link.download = getFileName(url);
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  document.body.appendChild(link);
  link.click();
  link.remove();
};


const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin: 20px 0;

  flex-direction: ${({ $isCurrentUser }) =>
    $isCurrentUser ? "row" : "row-reverse"};

  > img {
    flex-shrink: 0;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isCurrentUser }) =>
    $isCurrentUser ? "flex-start" : "flex-end"};
  margin-bottom: 10px;

  span {
    color: ${({ theme }) => theme.colors.newColors.shades.title};
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

const Message = styled.div`
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors.newColors.otherColors.bgContainer};

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    white-space: pre-wrap;
  }
`;

const MessageTime = styled.time`
  display: block;
  width: fit-content;
  margin-top: 10px;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 400;
`;

const Attachment = styled.div`
  width: fit-content;
  margin-top: 10px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors.newColors.otherColors.bgContainer};
`;

const AttachmentTime = styled(MessageTime)`
  color: #a0a0a0ab;
`;

const FilePreview = styled.div`
  position: relative;
  width: 192px;
  height: 171px;
  overflow: hidden;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DownloadButton = styled.button`
  position: absolute;
  bottom: 5px;
  left: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  padding: 0;

  border: 0;
  border-radius: 50%;
  background: transparent;

  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
  }
`;


const MessageItem = ({ data, isCurrentUser }) => {
  if (!data) return null;

  const {
    author = {},
    text,
    date,
    time,
    attachment,
  } = data;

  const {
    name,
    code,
    ["profile-photo"]: profilePhoto = avatar,
  } = author;

  const attachmentPreview = isImage(attachment)
    ? attachment
    : nonPhoto;

  const messageTime = `${ConvertJalali(date)} | ${convertToPersian(time)}`;

  return (
    <Container $isCurrentUser={isCurrentUser}>
      <img
        src={profilePhoto}
        alt={`${name || "user"} avatar`}
        width={50}
        height={50}
      />

      <MessageWrapper>
        <Header $isCurrentUser={isCurrentUser}>
          <span>{name}</span>

          {code && (
            <a
              href={metarangUrlCitizen(code)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {code}
            </a>
          )}
        </Header>

        <Message>
          <p>{SanitizeHTML(text)}</p>

          <MessageTime>{messageTime}</MessageTime>
        </Message>

        {attachment && (
          <Attachment>
            <FilePreview>
              <img
                src={attachmentPreview}
                alt="attachment"
              />

              <DownloadButton
                type="button"
                onClick={() => downloadFile(attachment)}
                aria-label="Download attachment"
              >
                <img
                  src={downloadIcon}
                  alt=""
                  aria-hidden="true"
                />
              </DownloadButton>
            </FilePreview>

            <AttachmentTime>
              {messageTime}
            </AttachmentTime>
          </Attachment>
        )}
      </MessageWrapper>
    </Container>
  );
};

export default MessageItem;
