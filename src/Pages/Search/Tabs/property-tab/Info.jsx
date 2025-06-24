import psc from "../../../../assets/gif/psc.gif";
import rial from "../../../../assets/gif/rial.gif";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

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
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
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

const Info = ({ item }) => {
  const items = [
    {
      id: 1,
      title: getFieldTranslationByNames("46"),
      value: item?.address,
    },
    {
      id: 2,
      title: getFieldTranslationByNames("43"),
      value: item?.owner_code,
    },
    {
      id: 3,
      title: getFieldTranslationByNames("45"),
      value: item?.price_psc,
    },
    {
      id: 4,
      title: getFieldTranslationByNames("44"),
      value: item?.price_irr,
    },
  ];
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
          {item.id === 1 && <h2>{item.value}</h2>}
          {item.id === 3 && (
            <h2>
              {item.value >= 1000000
                ? `${Math.floor(item.value / 1000000)}M`
                : `${Math.floor(item.value / 1000)}K`}
            </h2>
          )}
          {item.id === 4 && (
            <h2>
              {item.value >= 1000000
                ? `${Math.floor(item.value / 1000000)}M`
                : `${Math.floor(item.value / 1000)}K`}
            </h2>
          )}
          {item.id == 2 && (
            <a
              href={`https://rgb.irpsc.com/fa/citizens/${item.value}`}
              target="_blank"
            >
              {item.value}
            </a>
          )}
        </Wrapper>
      ))}
    </Container>
  );
};

export default Info;
