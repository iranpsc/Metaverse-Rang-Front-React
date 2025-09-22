import { Tooltip as ReactTooltip } from "react-tooltip";
import pscpng from "../../../../assets/gif/psc.gif";
import rialpng from "../../../../assets/gif/rial.gif";
import styled from "styled-components";
import { useState } from "react";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../Services/Utility";
import Button from "../../../../Components/Button";
import { useLanguage } from "../../../../Services/Reducers/LanguageContext";
import { useNavigate } from "react-router-dom";

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
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 14px;
    font-weight: 600;
    @media (min-width: 1400px) {
      font-size: 16px;
    }
  }
  span {
    color: #ffc700;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 14px;
    font-weight: 600;
  }
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
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
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 14px;
    font-weight: 600;
  }
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
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

  gap: 20px;
  grid-template-columns: 1fr;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 10px 10px 10px 20px;
  border-radius: 5px;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

const StyledTooltip = styled(ReactTooltip)`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px;
  width: 265px;
  text-align: center;

  &.place-top {
    margin-bottom: 10px;
  }
`;

const CardItem = ({
  name,
  id,
  color,
  address,
  area,
  price_psc,
  price_irr,
  photo,
  navigateId
}) => {
  const [isDeleted, setIsDeleted] = useState(true);
  const formattedRial =
    price_irr >= 1000000
      ? `${Math.floor(price_irr / 1000000)}M`
      : `${Math.floor(price_irr / 1000)}K`;

  const formattedPsc =
    price_psc >= 1000000
      ? `${Math.floor(price_psc / 1000000)}M`
      : `${Math.floor(price_psc / 1000)}K`;
const Navigate=useNavigate()
  return (
    <Container>
      <Right>
        <PhotoName>
          <ImageWrapper color={color}>
            <img src={photo} />
          </ImageWrapper>
          <Name>
            <h3>{getFieldTranslationByNames(name)}</h3>
            <span onClick={() => Navigate(`/metaverse/feature/${navigateId}`)}>{id}</span>
          </Name>
        </PhotoName>
        <Address>
          <span>{getFieldTranslationByNames("59")}</span>
          <p data-tooltip-id={address}>{address}</p>
          <StyledTooltip id={address} place="top" content={address} />
        </Address>
      </Right>
      <Left>
        <Meter>
          <span>{getFieldTranslationByNames("347")}</span>
          <p>{area}</p>
        </Meter>
        {isDeleted ? (
          <div />
        ) : (
          <Price>
            <span>{getFieldTranslationByNames("60")}</span>
            <Div>
              <div>
                <img width={24} height={24} src={rialpng} />
                <span>{formattedRial}</span>
              </div>
              <div>
                <img width={24} height={24} src={pscpng} />
                <span>{formattedPsc}</span>
              </div>
            </Div>
          </Price>
        )}
        {isDeleted ? (
          <Button
            fit
            label={getFieldTranslationByNames("352")}
            onclick={() => setIsDeleted(false)}
          />
        ) : (
          <Delete onClick={() => setIsDeleted(true)}>
            {getFieldTranslationByNames("736")}
          </Delete>
        )}
      </Left>
    </Container>
  );
};

export default CardItem;
