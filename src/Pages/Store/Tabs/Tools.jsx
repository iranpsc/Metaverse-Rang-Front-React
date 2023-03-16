import { useEffect, useState } from "react";
import useRequest from "../../../Services/Hooks/useRequest";
import { addCommas } from "@persian-tools/persian-tools";
import Tippy from "@tippyjs/react";
import shortid from "shortid";

import {
  Button,
  ButtonContainer,
  Container,
  ImageButton,
  Item,
  ItemContainer,
} from "../Styles";

import ToolsImage_1 from "../../../Assets/images/tools-1.png";
import ToolsImage_2 from "../../../Assets/images/tools-2.png";
import ToolsImage_3 from "../../../Assets/images/tools-3.png";
import ToolsImage_4 from "../../../Assets/images/tools-4.png";
import ToolsImage_5 from "../../../Assets/images/tools-5.png";
import ToolsImage_6 from "../../../Assets/images/tools-6.png";

const LANG_CONVERT = {
  yellow: "رنگ زرد",
  blue: "رنگ آبی",
  red: "رنگ قرمز",
};

export default function Tools() {
  const [index, setIndex] = useState(1);
  const [assets, setAssets] = useState([]);

  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    Request("store", HTTP_METHOD.POST, {
      codes: [`tools-b-${index}`, `tools-r-${index}`, `tools-y-${index}`],
    }).then((response) => {
      setAssets(response.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const onClickHandler = (e) => {
    setIndex(Number(e.target.id));
  };

  const paymentHandler = (asset, amount) => {
    Request("order", HTTP_METHOD.POST, { asset, amount }).then((response) => {
      window.location.href = response?.data?.link;
    });
  };

  return (
    <Container>
      <ButtonContainer>
        <ImageButton
          id="1"
          src={ToolsImage_1}
          width={80}
          className={`${index !== 1 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="2"
          src={ToolsImage_2}
          width={80}
          className={`${index !== 2 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="3"
          src={ToolsImage_3}
          width={80}
          className={`${index !== 3 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="4"
          src={ToolsImage_4}
          width={80}
          className={`${index !== 4 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="5"
          src={ToolsImage_5}
          width={80}
          className={`${index !== 5 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="6"
          src={ToolsImage_6}
          width={80}
          className={`${index !== 6 && "object-disabled"}`}
          onClick={onClickHandler}
        />
      </ButtonContainer>

      <ItemContainer>
        {assets.map((asset) => (
          <Item key={shortid.generate()}>
            <img src={asset.image} alt={asset.asset} width={80} />

            <Tippy
              content={
                <div
                  className="tooltip-container "
                >
                  <div className="tooltip-container-2">
                    <span className="title-toltip">اخطار</span>
                    <p>
                      درصورت بروز هرگونه مشکل برای رفع آن ما را با خبر سازید
                    </p>
                  </div>
                </div>
              }
              zIndex={10000}
            >
              <p className="store-help">?</p>
            </Tippy>
            <p>{addCommas(asset.amount)} عدد</p>
            <p>{LANG_CONVERT[asset.asset]}</p>

            <Button onClick={() => paymentHandler(asset.asset, asset.amount)}>
              {addCommas((asset.amount * asset.unitPrice) / 10)} تومان
            </Button>
          </Item>
        ))}
      </ItemContainer>
    </Container>
  );
}
