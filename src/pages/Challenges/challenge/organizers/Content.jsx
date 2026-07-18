import Other from "./Other";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styled from "styled-components";
import { useTheme } from "../../../../services/reducers/ThemeContext";
import {
  getTranslation,
  convertToPersian,
  ConvertJalali,
} from "../../../../services/Utility";
import { metarangUrlCitizen } from "../../../../services/Utility";
import red from "../../../../assets/gif/red-color.gif";
import blue from "../../../../assets/gif/blue-color.gif";
import yellow from "../../../../assets/gif/yellow-color.gif";
import nopic from "../../../../assets/images/nopic.jpg";
import Container from "../../../../components/Common/Container";
const MainPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 270px;
  border-radius: 10px;
  overflow: hidden;
  &:hover #hover {
    opacity: 100%;
  }
  img {
    width: 100%;
  }
  @media (min-width: 1400px) {
    order: 1;
  }
`;

const Count = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  padding: 4px 8px;
  z-index: 50;
  background-color: #ffffff;
  span {
    font-size: 14px;
    font-weight: 600;
    color: #949494;
  }
`;

const Hover = styled.div`
  transition: all 0.1s linear;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;

const Contents = styled.div`
  padding: 10px 20px 20px 10px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Top = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #fcfcfc;
  }
  h3 {
    font-size: 13px;
    font-weight: 400;
    color: #fcfcfc;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;
const Center = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    span {
      font-size: 13px;
      font-weight: 400;
      color: #fcfcfc;
    }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 13px;
    font-weight: 400;
    color: #fcfcfc;
  }
`;
const Titlee = styled.h2`
  font-size: 13px;
  font-weight: 500;
  color: #fcfcfc;
`;
const Others = styled.div`
  display: grid;
  align-items: start;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media (min-width: 1400px) {
    order: 2;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 10px;
  margin-top: 20px;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;
const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;
const Image = styled.img`
  object-fit: fill;
  height: 100%;
`;
const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.newColors.otherColors.menuBg};
  padding: 5px 20px;
  color: ${({ theme }) => theme.colors.newColors.otherColors.headerMenu};

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 24px;
    display: block;
    width: 50px;
    text-align: left;
  }
`;
const Content = ({ organizers, time }) => {
  const main = organizers?.[0];
  /** useEffect(() => {
    console.log("main", main);
  }, []); */
  const { theme } = useTheme();
  const colors = {
    red,
    blue,
    yellow,
  };
  const color = colors[main?.investment_asset] ?? null;
  return (
    <Container>
      <Time>
        <h3>برگزار کنندگان آزاد</h3>
        <div data-tooltip-id="time">
          <span>{time}</span>
          <ReactTooltip
            style={{
              backgroundColor: "#1a1a18",
              borderRadius: "10px",
              width: "150px",
              paddingBottom: "9.5px",
              textAlign: "center",
              zIndex: "999",
            }}
            id="time"
            place="top"
            content="منتظر برقراری ارتباط باشید"
          />
        </div>
      </Time>{" "}
      <Div>
        <Others>
          {organizers?.[8] &&
            organizers.slice(1, 7).map((other) => {
              return <Other key={other.id} {...other} />;
            })}
        </Others>
        <MainPhoto>
          <Count data-tooltip-id="main">
            <span>1</span>
            <img src={color} alt={main?.count} width={20} height={20} />
            <ReactTooltip
              style={{
                backgroundColor: theme === "light" ? "#FCFCFC" : "#1A1A18",
                borderRadius: "10px",
                width: "100px",
                textAlign: "center",
                zIndex: "999",
                color: theme === "light" ? "#1A1A18" : "#FCFCFC",
              }}
              id="main"
              place="bottom"
              content="سرمایه گذاری"
            />
          </Count>
          <Hover id="hover">
            <div />
            <Contents>
              <Top>
                <h2>{main?.title}</h2>
                <h3>{main?.description}</h3>
              </Top>
              <Bottom>
                <Right>
                  <Titlee>شناسه تولید</Titlee>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={metarangUrlCitizen(main?.code)}
                  >
                    {main?.code}
                  </a>
                </Right>
                <Center>
                  <Titlee>حمایت مالی</Titlee>
                  <div>
                    <span>{main?.investment_value}</span>
                    <img
                      loading="lazy"
                      src={color}
                      alt={main?.color}
                      width={24}
                      height={24}
                    />
                  </div>
                </Center>
                <Left>
                  <Titlee>تاریخ اتمام تخفیف ها</Titlee>
                  <span>{convertToPersian(ConvertJalali(main?.ends_at))}</span>
                </Left>
              </Bottom>
            </Contents>
          </Hover>
          {main?.video_url ? (
            <Video src={main.video_url} autoPlay muted loop playsInline />
          ) : (
            <Image
              loading="lazy"
              src={main?.image_url}
              alt={main?.company}
              width={70}
              height={70}
            />
          )}
        </MainPhoto>
      </Div>
    </Container>
  );
};

export default Content;
