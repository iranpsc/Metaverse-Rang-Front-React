import { FiSearch } from "react-icons/fi";
import Input from "./Input";
import RichText from "./RichText";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../../../Components/Button";

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  color: #ffffff;
  background-color: #2c2c2c;
  overflow: hidden;
  height: 212px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  direction: rtl;
  margin-top: 20px;
`;
const Field = styled.div`
  height: 50px;
  border-radius: 5px;
  padding: 0 10px 0 15px;
  outline: none;
  flex-grow: 1;
  border: none;
  color: #84858f;
  background-color: #2c2c2c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    svg {
      color: white;
      font-size: 24px;
    }
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      color: #84858f;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

const First = styled.div`
  display: flex;
  gap: 10px;
`;
const Third = styled.div`
  display: flex;
  gap: 10px;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  padding: 10px;
  outline: none;
  flex-grow: 1;
  border: none;
  color: #84858f;
  background-color: #2c2c2c;
  font-size: 16px;
`;

const Text = styled.p`
  color: #ffffff;
  line-height: 1.5rem;
  margin-top: 5px;
  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;

const EditInputs = ({ inputs, setInputs, setEdit }) => {
  const [fields, setFields] = useState({
    activity: "",
    name: "",
    address: "",
    post: "",
    web: "",
    about: "",
  });

  return (
    <Container>
      <First>
        <Field>
          <div>
            <FiSearch />
            <input
              value={fields.activity}
              onChange={(e) =>
                setFields({ ...fields, activity: e.target.value })
              }
              placeholder="رشته فعالیت"
            />
          </div>
          <span>+</span>
        </Field>
        <Input
          value={fields.name}
          onchange={(e) => setFields({ ...fields, name: e.target.value })}
          key={inputs.first_row_info[1].id}
          placeholder={inputs.first_row_info[1].title}
        />
      </First>
      <Input
        value={fields.address}
        onchange={(e) => setFields({ ...fields, address: e.target.value })}
        placeholder={inputs.second_row_info.title}
      />
      <Third>
        <Input
          type="number"
          value={fields.post}
          onchange={(e) => setFields({ ...fields, post: e.target.value })}
          placeholder="کد پستی فیزیکی مجموعه"
        />
        <Input
          value={fields.web}
          onchange={(e) => setFields({ ...fields, web: e.target.value })}
          placeholder="آدرس وب سایت"
        />
      </Third>
      {/* <TextArea
        onChange={(e) => setFields({ ...fields, about: e.target.value })}
        value={fields.about}
        rows={4}
        placeholder="هدف تاسیس"
      /> */}
      <Wrapper>
        <RichText />
      </Wrapper>
      <Text>ویرایش محتوای ثبت شده پس تایید سطوح بالا منتشر خواهد شد</Text>
      <Button edit onclick={() => setEdit(false)} label="ویرایش اطلاعات" />
    </Container>
  );
};

export default EditInputs;
