import psc from "../../../assets/images/profile/psc.gif";
import rial from "../../../assets/images/profile/rial.gif";
import styled from "styled-components";

const items = [
  {
    id: 1,
    title: "آدرس vod",
    value: "قزوین, پونک, خیابان پیروزی, روبه روی درماگاه محمدزاده, طبقه چهارم",
  },
  { id: 2, title: "شناسه مالک", value: "HM-2000000" },
  { id: 3, title: "قیمت گذاری (PSC)", value: "4000" },
  { id: 4, title: "قیمت گذاری (ریال)", value: "3000000" },
];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  h3 {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    color: #dedee9;
    max-width: 280px;
    cursor: ${(props) => props.textId === 2 && "pointer"};
  }
  a {
    color: #0066ff;
    text-decoration: none;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

const Info = () => {
  return (
    <Container>
      {items.map((item) => (
        <Wrapper textId={item.id} key={item.id}>
          <div>
            <h3>{item.title}</h3>
            {item.id === 3 && (
              <img
                width={20}
                height={20}
                loading="lazy"
                src={psc}
                alt={item.title}
              />
            )}
            {item.id === 4 && (
              <img
                width={20}
                height={20}
                loading="lazy"
                src={rial}
                alt={item.title}
              />
            )}
          </div>
          {item.id === 1 && <h2 dir="ltr">{item.value}</h2>}
          {item.id === 3 && (
            <h2 dir="ltr">
              {item.value >= 1000000
                ? `${Math.floor(item.value / 1000000)}M`
                : `${Math.floor(item.value / 1000)}K`}
            </h2>
          )}
          {item.id === 4 && (
            <h2 dir="ltr">
              {item.value >= 1000000
                ? `${Math.floor(item.value / 1000000)}M`
                : `${Math.floor(item.value / 1000)}K`}
            </h2>
          )}
          {item.id == 2 && (
            <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">
              {item.value}
            </a>
          )}
        </Wrapper>
      ))}
    </Container>
  );
};

export default Info;
