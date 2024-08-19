import Button from "../../Button";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { convertToPersian } from "../../../lib/convertToPersian";
import pscpng from "../../../assets/images/profile/psc.gif";
import rialpng from "../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import { useState } from "react";

const PhotoName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h3 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    color: #ffc700;
    font-size: 14px;
    font-weight: 500;
  }
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
const Meter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Div = styled.div`
  display: flex;
  gap: 12px;
  div {
    display: flex;
    gap: 6px;
  }
`;
const Delete = styled.div`
  font-size: 16px;
  color: #c30000;
  white-space: nowrap;
  font-weight: 600;
  background-color: #c3000026;
  border-radius: 10px;
  padding: 10px 0px;
  text-align: center;
  cursor: pointer;
`;
const Left = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 130px;
`;
const Right = styled.div`
  display: grid;
  align-items: center;
  gap: 20px;
  grid-template-columns: 2fr 100px;
  @media (min-width: 840px) {
    grid-template-columns: 2fr 180px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 2fr 220px;
  }
`;
const Container = styled.div`
  display: grid;
  align-items: center;
  direction: rtl;
  gap: 20px;
  grid-template-columns: 1fr;
  background-color: #1a1a18;
  padding: 10px 10px 10px 20px;
  border-radius: 5px;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

const CardItem = ({ name, code, color, address, meter, psc, rial, photo }) => {
  const [isDeleted, setIsDeleted] = useState(true);
  const formattedRial =
    rial >= 1000000
      ? `${Math.floor(rial / 1000000)}M`
      : `${Math.floor(rial / 1000)}K`;

  const formattedPsc =
    psc >= 1000000
      ? `${Math.floor(psc / 1000000)}M`
      : `${Math.floor(psc / 1000)}K`;

  return (
    <Container>
      <Right>
        <PhotoName>
          <ImageWrapper color={color}>
            <img src={photo} />
          </ImageWrapper>
          <Name>
            <h3>{name}</h3>
            <span>{code}</span>
          </Name>
        </PhotoName>
        <Address>
          <span>آدرس</span>
          <p data-tooltip-id={address}>{address}</p>
          <ReactTooltip
            style={{
              backgroundColor: "#000000",
              borderRadius: "10px",
              width: "265px",
              textAlign: "center",
            }}
            id={address}
            place="top"
            content={address}
          />
        </Address>
      </Right>
      <Left>
        <Meter>
          <span>متراژ</span>
          <p>{convertToPersian(meter)}</p>
        </Meter>
        {isDeleted ? (
          <div />
        ) : (
          <Price>
            <span>قیمت</span>
            <Div>
              <div>
                <img width={24} height={24} src={rialpng} />
                <span>
                  {convertToPersian(formattedRial)}
                </span>
              </div>
              <div>
                <img width={24} height={24} src={pscpng} />
                <span>
                  {convertToPersian(formattedPsc)}
                </span>
              </div>
            </Div>
          </Price>
        )}
        {isDeleted ? (
          <Button fit label="قیمت گذاری" onclick={() => setIsDeleted(false)} />
        ) : (
          <Delete onClick={() => setIsDeleted(true)}>حذف قیمت</Delete>
        )}
      </Left>
    </Container>
  );
};

export default CardItem;
