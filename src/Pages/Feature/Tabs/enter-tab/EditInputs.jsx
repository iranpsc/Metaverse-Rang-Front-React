import Codes from "./Codes";
import EditInput from "./EditInput";
import EditLevelInput from "./EditLevelInput";
import RichText from "./RichText";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  direction: rtl;
`;
const First = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Second = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10px;
`;
const TextArea = styled.textarea`
  border-radius: 5px;
  padding: 10px;
  outline: none;
  resize: none;
  flex-grow: 1;
  border: none;
  color: #84858f;
  background-color: #2c2c2c;
  font-size: 16px;
`;
const Title = styled.h3`
  font-weight: 600;
  color: white;
  @media (max-width: 1024px) {
    font-size: 14px;
    margin-top: 8px;
  }
`;
const Button = styled.button`
  border-radius: 10px;
  background-color: #FFC700;
  color: #191b21;
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  color: #ffffff;
  background-color: #2c2c2c;
  overflow: hidden;
  height: 205px;
`;
const EditInputs = ({ data, setData, setEdit, setPayed }) => {
  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setData((prevInputValues) => ({
  //     ...prevInputValues[0].inputs,
  //     [name]: value,
  //   }));
  // };
  return (
    <Container>
      <First>
        {data[0].inputs.slice(0, 2).map((input) => (
          <EditInput
            type={input.type}
            name={input.level}
            slug={input.slug}
            icon={input.icon}
            // onchange={changeHandler}
            title={input.title}
            key={input.id}
          />
        ))}
      </First>
      <Second>
        {data[0].inputs.slice(3, 4).map((input) => (
          <EditLevelInput {...input} key={input.id} />
        ))}
        {data[0].inputs.slice(2, 3).map((input) => (
          <EditInput
            name={input.level}
            type={input.type}
            // onchange={changeHandler}
            // {...input}
            title={input.title}
            key={input.id}
          />
        ))}
      </Second>
      {/* <TextArea
        onchange={() => {}}
        value=""
        rows={3}
        placeholder="درباره مجموعه"
      /> */}
      <Wrapper>
        <RichText />
      </Wrapper>
      <Title>درست کردن کد اختصاصی ورود</Title>
      <Codes />
      <Button
        onClick={() => {
          setEdit(false);
        }}
      >
        ویرایش اطلاعات
      </Button>
    </Container>
  );
};

export default EditInputs;
