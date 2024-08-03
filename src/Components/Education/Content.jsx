import { FaChevronCircleLeft } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 5px;
  padding-right: 10px;
  height: ${(props) => (props.show ? "160px" : "")};
  overflow-y: auto;
  direction: ltr;
  @media (max-width: 1400px) {
    height: ${(props) => (props.show ? "244px" : "")};
  }
  @media (min-width: 1401px) {
    padding-right: 15px;
    height: 160px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    direction: rtl;
    h3 {
      color: #008bf8;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      @media (min-width: 1400px) {
        display: none;
      }
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 7px;
    margin-bottom: 10px;
  }
  p {
    color: #969696;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    text-align: justify;
    direction: rtl;
    @media (max-width: 1400px) {
      display: ${(props) => (props.show ? "block" : "none")};
    }
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  z-index: 888;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 1400px) {
    display: none !important;
  }
  div {
    background-color: white;
    width: 25px;
    height: 25px;
    right: 10px;
    border-radius: 100%;
    position: absolute;
  }
  svg {
    height: 100%;
    width: 100%;
    position: relative;
    color: #3b3b3b;
  }
`;

const Content = ({ show, setShow }) => {
  return (
    <Container show={show}>
      <div>
        <h2>آموزش ورود به متاورس</h2>
        {show ? (
          <Icon>
            <div />
            <FaChevronCircleLeft onClick={() => setShow(false)} />
          </Icon>
        ) : (
          <h3 onClick={() => setShow(!show)}>محتوای متنی</h3>
        )}
      </div>
      <p>
        شما با استفاده از ورود میتوانید در متاورس رنگ حضور پیدا کنید و از خدمات
        آن بهره مند شوید ازخدمات متاورس رنگ میتوان به خرید و فروش VOD, فروشندگی
        محصول, کسب علم و دانش توسط دانشگاه ها و موسسه های موجود در متاورس رنگ
        اشاره کرد. شما با استفاده از ورود میتوانید در متاورس رنگ حضور پیدا کنید
        و از خدمات آن بهره مند شوید ازخدمات متاورس رنگ میتوان به خرید و فروش
        VOD, فروشندگی محصول, کسب علم و دانش توسط دانشگاه ها و موسسه های موجود در
        متاورس رنگ اشاره کرد. و از خدمات آن بهره مند شوید ازخدمات متاورس رنگ
        میتوان به خرید و فروش VOD, فروشندگی محصول, کسب علم و دانش توسط دانشگاه
        ها و موسسه های موجود در متاورس رنگ اشاره کرد.
      </p>
    </Container>
  );
};

export default Content;
