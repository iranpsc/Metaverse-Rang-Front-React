import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import useRequest from "../../../../../services/Hooks/useRequest";
import Members from "../index";
import { ToastError, ToastSuccess } from "../../../../../services/Utility";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const ContainerMessage = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;

  padding: 2rem;
  line-height: 2;
`;
const Text = styled.p`
  font-weight: 500;
`;
const ContainerBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
`;
const CancelButton = styled.button`
  --bs-bg-opacity: 1;
  background-color: transparent;
  border-color: var(--bs-orange) !important;
  border: 1px solid;
  border-radius: 8px;
  --bs-text-opacity: 1;
  color: var(--bs-orange) !important;
  padding: 8px 24px 8px 24px;
`;
const UserItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  gap: 10px;
`;
const ProfilePhoto = styled.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;
const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI";
  text-transform: uppercase;
`;

const BorderImg = styled.div`
  border-radius: 100%;
  border: 1px solid #777;
  padding: 3px;
  width: 79px;
  height: 79px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SubmitDanasty({
  Permission,
  Relationship,
  RelationshipFamily,
  UserData,
}) {
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();
  const [showMembers, setShowMembers] = useState(false);
  const { id, age } = UserData;

  const handleSubmit = async () => {
    let body = { user: id, relationship: RelationshipFamily };
    if (age <= 18) body = { ...body, permissions: Permission };

    try {
      await sendRequest(Request, "dynasty/add/member", HTTP_METHOD.POST, body);

      ToastSuccess("دعوت نامه با موفقیت ارسال شد");
      setShowMembers(true);
    } catch (error) {
      handleRequestError(error, Navigate);
      setShowMembers(true);
    }
  };

  if (showMembers) {
    return <Members />;
  }

  return (
    <Container>
      <ContainerMessage>
        <UserItem>
          <ContainerName>
            <p style={{ color: "#0800FF", fontWeight: "700" }}>
              {UserData.code}
            </p>
            <p style={{ fontWeight: "600" }}>{UserData.name}</p>
          </ContainerName>
          <BorderImg>
            <ProfilePhoto src={UserData.image} alt="" />
          </BorderImg>
        </UserItem>

        <Text>نسبت {Relationship}</Text>

        <Text>
          در صورت
          <span style={{ fontWeight: "600" }}>
            {`«شهروند مورد نظر به عنوان ${Relationship}»`}
          </span>
          یک پیام تاییدیه برای شهروند ارسال می‌شود و در صورت تایید اطلاعات سلسله
          خانوادگی در بانک اطلاعات مرکزی متارنگ ذخیره خواهد شد.
        </Text>

        <Text>
          سلسله خانوادگی قابلیت ویرایش نخواهد داشت و فرزند شما در آینده
          نمی‌تواند شما را حذف کند و همچنین شما نیز نمی‌توانید فرزند خود را حذف
          نمایید.
        </Text>

        <Text>
          قابلیت ویرایش تنظیمات دسترسی فرزند شما در هر زمان به صورت یک طرفه از
          سمت شما امکان پذیر است. فرزند شما تنها تا قبل از سن قانونی توسط شما
          محدود خواهد شد (سن قانونی ۱۸).
        </Text>

        <Text style={{ color: "red" }}>
          جریمه هایی که در خصوص دروغ گویی توسط دادگاه متارنگ در نظر گرفته می‌شود
          بسیار سنگین خواهد بود.
        </Text>

        <ContainerBtn>
          <Submit
            text="تایید می‌کنم"
            type="primary"
            options={{ onClick: handleSubmit }}
          />
          <CancelButton onClick={() => setShowMembers(true)}>
            تایید نمی‌کنم
          </CancelButton>
        </ContainerBtn>
      </ContainerMessage>
    </Container>
  );
}

function handleRequestError(error, Navigate) {

    ToastError(error.response.data.message);
  
}

async function sendRequest(request, url, method, body) {
  try {
    const response = await request(url, method, body);
    return response;
  } catch (error) {
    throw error;
  }
}

export default React.memo(SubmitDanasty);
