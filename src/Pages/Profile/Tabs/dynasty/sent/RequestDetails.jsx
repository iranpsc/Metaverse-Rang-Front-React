import Button from "../../../../../Components/Button";
import MemberCard from "./MemberCard";
import { getFieldTranslationByNames, ToastError, ToastSuccess } from "../../../../../Services/Utility";
import styled from "styled-components";
import ModalLg from "../../../../../Components/Modal/ModalLg";
import { UserContext } from "../../../../../Services/Reducers/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../../Services/Hooks/useRequest";

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const RequestDetails = ({
  setShowDetails,
  status,
  code,
  date,
  time,
  data,
  type,
}) => {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();

  const handleSubmit = () => {
    Request(`dynasty/requests/${type === "send" ? "send" : "recieved"}/${data.id}`, HTTP_METHOD.POST)
      .then(() => {
        ToastSuccess("سلسله با موفقیت تاسیس شد.");
      })
      .catch((error) => {
        if (error.response.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
          return navigate("/metaverse/confirmation");
        }
        ToastError(error.response.data.message);
      });
  };

  const isSendType = type === "send";
  
  return (
    <ModalLg
      setShowModal={setShowDetails}
      titleId={isSendType ? "113" : "114"}
    >
      <MemberCard 
        status={status} 
        date={date} 
        time={time} 
        code={isSendType ? user.code : code} 
        name={isSendType ? user.name : data.from_user.name} 
        image={isSendType ? user.image : data.user_from?.image} 
      />
      <div dangerouslySetInnerHTML={{ __html: data.message }} />
      {data?.status === 0 && !isSendType && (
        <Buttons>
          <Button
            label={getFieldTranslationByNames(823)}
            color="#18C08F"
            onclick={handleSubmit}
            fit
            textColor="#D7FBF0"
          />
          <Button
            label={getFieldTranslationByNames(824)}
            color="#C30000"
            onclick={() => setShowDetails(false)}
            fit
            textColor="#FFFFFF"
          />
        </Buttons>
      )}
    </ModalLg>
  );
};

export default RequestDetails;
