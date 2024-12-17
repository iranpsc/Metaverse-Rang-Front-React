import Button from "../../../../../Components/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import MemberCard from "./MemberCard";
import Title from "../../../../../Components/Title";
import { convertToPersian } from "../../../../../Services/Utility";
import gift from "../../../../../Assets/images/satisfy.png";
import pscGif from "../../../../../Assets/gif/psc.gif";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  width: 80%;
  height: 80%;
  position: relative;
  border-radius: 10px;
  background-color: #000000;
  overflow-y: auto;
  padding: 20px;
  z-index: 999;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    h3 {
      color: #ffffff;
      font-size: 18px;
      font-weight: 400;
    }
    svg {
      color: #949494;
    }
  }
`;

const Info = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  p {
    &:nth-of-type(2) {
      color: #c30000;
      margin: 10px 0;
    }
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  h3 {
    color: #868b90;
    font-size: 20px;
    font-weight: 500;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
const Subject = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const Back = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const RequestDetails = ({
  setShowDetails,
  status,
  psc,
  gif,
  code,
  date,
  time,
}) => {
  return (
    <Back>
      <Container>
        <Header>
          <Title title="درخواست ارسال شده از شهروند" />
          <div onClick={() => setShowDetails(false)}>
            <h3>بازگشت</h3>
            <FaArrowLeftLong />
          </div>
        </Header>
        <MemberCard status={status} date={date} time={time} code={code} />
        {status === "confirmed" && (
          <>
            <Info>
              <h2>سلام [ نام و نام خانوادگی ]</h2>
              <p>
                درخواستی جهت ورود به سلسله خانوادگی برای شما از سمت شناسه
                شهروندی [ نام شهروند دریافت کننده ] ارسال گردیده است. خوشبختانه
                شما این درخواست را قبول و شهروندی به عنوان [ نسبت خانوادگی ] در
                سلسله شما اضافه گردیده است.
              </p>
              <p>
                با تشکیل سلسله خانوادگی خود در دنیای موازی متاورس رنگ شما از
                پاداش‌های خاصی برخوردار خواهید شد.
              </p>
              <p>
                پاداش‌های زیر برای عضویت [ نسبت خانوادگی ] در سلسله میباشد و
                برای دریافت آن میبایست سلسله داشته باشید.
              </p>
            </Info>
            <Wrapper>
              <Subject>
                <Div>
                  <h3>{convertToPersian(gif)}</h3>
                  <Image
                    width={300}
                    height={300}
                    alt="doctor"
                    loading="lazy"
                    src={gift}
                  />
                </Div>
                <Div>
                  <h3>{convertToPersian(psc)}</h3>
                  <Image
                    width={300}
                    height={300}
                    alt="doctor"
                    loading="lazy"
                    src={pscGif}
                  />
                </Div>
              </Subject>
              <Button
                onclick={() => setShowDetails(false)}
                label="جذب پاداش"
                color="#18C08F"
                fit
                textColor="#D7FBF0"
              />
            </Wrapper>
          </>
        )}
        {status === "failed" && (
          <>
            <Info>
              <h2>سلام [ نام و نام خانوادگی ]</h2>
              <p>
                درخواستی جهت ورود به سلسله خانوادگی از طرف شما به شهروند [ نام
                شهروند دریافت کننده ] ارسال شده است، در صورتی تایید شهروند [ نام
                شهروند دریافت کننده ] افزایش اعضای سلسله شما با نسبت خانوادگی [
                نسب خانوادگی ] صورت میپذیرد{" "}
              </p>
              <p>
                در نظر گرفته شود در صورتی که ارسال درخواست به هر عنوانی به صورت
                اشتباه صورت گیرد تصمیم نهایی از طرف شما بوده و جریمه نقدی و غیر
                نقدی توسط شما میبایست پرداخت گردد{" "}
              </p>
              <p>
                برای تایید یا رد سلسله بر روی گزینه سبز میپذیرم و برای لغو این
                پیام گزینه قرمز نمیپذیرم میبایست توسط شهروند دریافت کننده انجام
                گیرد{" "}
              </p>
              <Buttons>
                <Button
                  label="بله, قبول میکنم"
                  color="#18C08F"
                  onclick={() => setShowDetails(false)}
                  fit
                  textColor="#D7FBF0"
                />
                <Button
                  label="خیر, نمی پذیرم"
                  color="#C30000"
                  onclick={() => setShowDetails(false)}
                  fit
                  textColor="#FFFFFF"
                />
              </Buttons>
            </Info>
          </>
        )}
        {status === "pending" && (
          <>
            <Info>
              <h2>سلام [ نام و نام خانوادگی ]</h2>
              <p>
                درخواستی جهت ورود به سلسله خانوادگی از طرف شما به شهروند [ نام
                شهروند دریافت کننده ] ارسال شده است، در صورتی تایید شهروند [ نام
                شهروند دریافت کننده ] افزایش اعضای سلسله شما با نسبت خانوادگی [
                نسب خانوادگی ] صورت میپذیرد{" "}
              </p>
              <p>
                در نظر گرفته شود در صورتی که ارسال درخواست به هر عنوانی به صورت
                اشتباه صورت گیرد تصمیم نهایی از طرف شما بوده و جریمه نقدی و غیر
                نقدی توسط شما میبایست پرداخت گردد{" "}
              </p>
              <p>
                برای تایید یا رد سلسله بر روی گزینه سبز میپذیرم و برای لغو این
                پیام گزینه قرمز نمیپذیرم میبایست توسط شهروند دریافت کننده انجام
                گیرد{" "}
              </p>
              <Buttons>
                <Button
                  label="بله, قبول میکنم"
                  color="#18C08F"
                  onclick={() => setShowDetails(false)}
                  fit
                  textColor="#D7FBF0"
                />
                <Button
                  label="خیر, نمی پذیرم"
                  color="#C30000"
                  onclick={() => setShowDetails(false)}
                  fit
                  textColor="#FFFFFF"
                />
              </Buttons>
            </Info>
          </>
        )}
      </Container>
    </Back>
  );
};

export default RequestDetails;
