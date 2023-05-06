import { useEffect, useState } from "react";
import { addCommas } from "@persian-tools/persian-tools";
import useRequest from "../../../Services/Hooks/useRequest";
import { Button, ButtonContainer, Container, ImageButton, Item, ItemContainer } from "../Styles";
import Tippy from "@tippyjs/react";


import CurrencyImage_1 from "../../../Assets/images/currency-1.png";
import CurrencyImage_2 from "../../../Assets/images/currency-2.png";
import CurrencyImage_3 from "../../../Assets/images/currency-3.png";
import CurrencyImage_4 from "../../../Assets/images/currency-4.png";
import CurrencyImage_5 from "../../../Assets/images/currency-5.png";
import CurrencyImage_6 from "../../../Assets/images/currency-6.png";
import shortid from "shortid";


const LANG_CONVERT = {
  irr: "ریال",
  psc: "PSC",
};


export default function Currency() {
  const [index, setIndex] = useState(1);
  const [assets, setAssets] = useState([]);

  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    Request("store", HTTP_METHOD.POST, {
      codes: [`currency-psc-${index}`, `currency-irr-${index}`, `currency-irr-${index}`],
    }).then((response) => {
      setAssets(response.data.data);
    });

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
          src={CurrencyImage_1}
          width={80}
          className={`${index !== 1 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="2"
          src={CurrencyImage_2}
          width={80}
          className={`${index !== 2 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="3"
          src={CurrencyImage_3}
          width={80}
          className={`${index !== 3 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="4"
          src={CurrencyImage_4}
          width={80}
          className={`${index !== 4 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="5"
          src={CurrencyImage_5}
          width={80}
          className={`${index !== 5 && "object-disabled"}`}
          onClick={onClickHandler}
        />
        <ImageButton
          id="6"
          src={CurrencyImage_6}
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
