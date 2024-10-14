import avatar from "../../../../Assets/images/defulte-profile.png";
import download from "../../../../Assets/images/arrow-down.png";
import file from "../../../../Assets/images/factor-1.png";
import photo from "../../../../Assets/images/Eye.png";
import styled from "styled-components";

const Content = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    color: #ffffff;
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
  background-color: #1a1a18;
  padding: 12px;
  border-radius: 10px;
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
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

const Files = styled.div`
  background-color: #1a1a18;
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
    color: #a0a0ab;
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
  margin-right: auto;

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

const handleDownload = (imageSrc, filename) => {
  const link = document.createElement("a");
  link.href = imageSrc;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CitizenMessage = ({ member }) => {
  return (
    <Container>
      <Content>
        <Header>
          <span>{member}</span>
          <a href="https://rgb.irpsc.com/fa/citizens/hm-2000001">HM-200020</a>
        </Header>
        <Text>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <h4>۲۱ اردیبهشت ۱۴۰۳ | ۱۲:۲۰</h4>
        </Text>
        <Files>
          <div>
            <Image>
              <img src={photo} alt="file" width={200} height={179} />
              <Download
                src={download}
                alt="download"
                width={36}
                height={36}
                onClick={() => handleDownload(photo, "photo.jpeg")}
              />
            </Image>
            <Image>
              <img src={file} alt="file" width={200} height={179} />
              <Download
                src={download}
                alt="download"
                width={36}
                height={36}
                onClick={() => handleDownload(file, "file.png")}
              />
            </Image>
          </div>
          <h4>۲۱ اردیبهشت ۱۴۰۳ | ۱۲:۲۰</h4>
        </Files>
      </Content>
      <Avatar src={avatar} alt="avatar" width={50} height={50} />
    </Container>
  );
};

export default CitizenMessage;
