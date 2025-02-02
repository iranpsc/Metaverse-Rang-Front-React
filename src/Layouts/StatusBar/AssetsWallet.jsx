import React from "react";
import { useContext } from "react";
import { WalletContext } from "../../Services/Reducers/WalletContext";
import styled from "styled-components";
import BlueSpray from "../../Assets/gif/blue-color.gif";
import RedSpray from "../../Assets/gif/red-color.gif";
import YellowSpray from "../../Assets/gif/yellow-color.gif";
import Satisfaction from "../../Assets/gif/satisfaction.gif";
import Psc from "../../Assets/gif/psc.gif";
import Irr from "../../Assets/gif/rial.gif";
import { convertToPersian } from "../../Services/Utility";

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

const AssetItem = ({ title, value, img, index, totalAssets }) => (
  <>
    <Asset>
      <TextAsset>{convertToPersian(value || "0.000")}</TextAsset>
      <ImgAsset src={img} />
    </Asset>
    {index !== totalAssets - 1 && <Line />}
  </>
);

const AssetsWallet = () => {
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
          totalAssets={assets.length}
        />
      ))}
    </>
  );
};

export default AssetsWallet;
