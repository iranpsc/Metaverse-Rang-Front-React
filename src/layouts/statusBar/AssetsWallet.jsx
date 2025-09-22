import React from "react";
import { useContext } from "react";
import { WalletContext } from "../../services/reducers/WalletContext";
import styled from "styled-components";
import BlueSpray from "../../assets/gif/blue-color.gif";
import RedSpray from "../../assets/gif/red-color.gif";
import YellowSpray from "../../assets/gif/yellow-color.gif";
import Satisfaction from "../../assets/gif/satisfaction.gif";
import Psc from "../../assets/gif/psc.gif";
import Irr from "../../assets/gif/rial.gif";
import { convertToPersian } from "../../services/Utility";

const Asset = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 13%;
`;

const ImgAsset = styled.img`
  width: 25px;
  height: 25px;
  @media (min-width: 1024px) {
    width: 35px;
    height: 35px;
  }
`;

const TextAsset = styled.p`
  color: #868b90;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 25.2px */
  text-transform: capitalize;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #efefef;
`;

const AssetItem = ({ title, value, img, index, totalassets }) => (
  <>
    <Asset>
      <TextAsset>{convertToPersian(value || "0.000")}</TextAsset>
      <ImgAsset src={img} />
    </Asset>
    {index !== totalassets - 1 && <Line />}
  </>
);

const assetsWallet = () => {
  const [wallet] = useContext(WalletContext);

  const assets = [
    { title: "blue", value: wallet?.blue, img: BlueSpray },
    { title: "red", value: wallet?.red, img: RedSpray },
    { title: "yellow", value: wallet?.yellow, img: YellowSpray },
    { title: "satisfaction", value: wallet?.satisfaction, img: Satisfaction },
    { title: "psc", value: wallet?.psc, img: Psc },
    { title: "irr", value: wallet?.irr, img: Irr },
  ];

  return (
    <>
      {assets.map((asset, index) => (
        <AssetItem
          key={asset.title}
          title={asset.title}
          value={asset.value}
          img={asset.img}
          index={index}
          totalassets={assets.length}
        />
      ))}
    </>
  );
};

export default assetsWallet;
