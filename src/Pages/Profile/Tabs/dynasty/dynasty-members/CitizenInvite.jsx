import CitizenCard from "./CitizenCard";

import citizen from "../../../../../Assets/images/profile.png";
import styled from "styled-components";
import Button from "../../../../../Components/Button";
import Title from "../../../../../Components/Title";
import SearchInput from "../../../../../Components/SearchInput";

const Container = styled.div`
  padding: 20px 0;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: 100px 510px;
  justify-content: space-between;
`;

const Citizens = styled.div`
  max-height: 450px;
  overflow-y: auto;
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const citizens = [
  { id: 1, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 2, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 3, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 4, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 5, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 6, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 7, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 8, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 9, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
  { id: 10, name: "مهدی قربان زاده", code: "HM-2000003", image: citizen },
];
const CitizenInvite = () => {
  return (
    <Container>
      <Header>
        <Title title="دعوت شهروند" />

        <SearchInput
          value=""
          placeholder="نام یا شناسه کاربری شهروند مورد نظر خود را جستجو کنید"
          onchange={() => {}}
        />
      </Header>
      <Citizens>
        {citizens.map((citizen) => (
          <CitizenCard key={citizen.id} {...citizen} />
        ))}
      </Citizens>
      <Buttons>
        <Button fit color="#18C08F" textColor="#FFFFFF" label="ذخیره شود" />
        <Button fit color="#C30000" textColor="#FFFFFF" label="لغو" />
      </Buttons>
    </Container>
  );
};

export default CitizenInvite;
