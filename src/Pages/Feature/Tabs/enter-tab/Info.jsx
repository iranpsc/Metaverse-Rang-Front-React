import EnterCode from "./EnterCode";
import EnterConfirmModal from "./EnterConfirmModal";
import EnterInputs from "./EnterInputs";
import LoadingModal from "./LoadingModal";
import { LuEye } from "react-icons/lu";

import styled from "styled-components";
import { useState } from "react";
import Title from "../../../../Components/Title";

const Container = styled.div`
  direction: rtl;
  color: aliceblue;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Onlines = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  padding: 4px 8px 4px 12px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.newColors.primaryText};
  svg {
    font-size: 22px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.5rem;
  margin-top: 10px;
  font-weight: 300;
  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: ${(props) => (props.blue ? "#18C08F" : "#E9E9E9")};
  color: ${(props) => (props.blue ? "#FFFFFF" : "#949494")} !important;
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
`;

const Info = ({ data, edit, setEdit, payed, setPayed, isOwner, isMobile }) => {
  const [payStatus, setPayStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <HeaderContainer>
        <Title title="پیشتاز ورود به “ نام مجموعه ”" />
        <Onlines>
          <LuEye />
          <p>تعداد نفرات آنلاین: ۲۰ نفر</p>
        </Onlines>
      </HeaderContainer>
      <EnterInputs data={data} />
      {!payed && !edit && (
        <EnterCode
          setEdit={setEdit}
          isOwner={isOwner}
          setPayStatus={setPayStatus}
        />
      )}
      <Title payed={payed} title="درباره مجموعه" />
      <Text>{data[0].inputs[4].about}</Text>
      {payed && !edit && (
        <Buttons>
          <Button blue onClick={() => setEdit(true)}>
            ویرایش اطلاعات
          </Button>
          <Button onClick={() => {}}>ورود به ملک</Button>
        </Buttons>
      )}
      {payStatus && (
        <EnterConfirmModal
          data={data}
          setPayStatus={setPayStatus}
          setPayed={setPayed}
          setLoading={setLoading}
        />
      )}
      {loading && <LoadingModal isMobile={isMobile} />}
    </Container>
  );
};

export default Info;
