import CitizenCard from "./CitizenCard";
import UnderEighteenMember from "./UnderEighteenMember";
import citizen from "../../../../../Assets/images/profile.png";
import styled from "styled-components";
import Button from "../../../../../Components/Button.jsx";
import Title from "../../../../../Components/Title.jsx";
import SearchInput from "../../../../../Components/SearchInput.jsx";
import { useState } from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { ToastError } from "../../../../../Services/Utility";

const Container = styled.div`
  padding: 20px 0;
  direction: ltr;
  display: grid;
  height: 232px;
  padding-right: 15px;
  overflow-y: auto;
  @media (min-width: 880px) {
    height: 187px;
  }
  @media (min-width: 890px) {
    height: 257px;
  }
  @media (min-width: 930px) {
    height: 273px;
  }
  @media (min-width: 1024px) {
    height: 375px;
  }
  @media (min-width: 1180px) {
    height: 575px;
  }
  @media (min-width: 1280px) {
    height: 560px;
  }
  @media (min-width: 1366px) {
    height: 620px;
  }
  @media (min-width: 1500px) {
    height: 540px;
  }
  @media (min-width: 1900px) {
    height: 620px;
  }
`;

const Header = styled.div`
  display: grid;
  margin-bottom: 20px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  @media (min-width: 1366px) {
    grid-template-columns: 100px 510px;
  }
`;

const Citizens = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 15px;
  padding-right: 10px;
  height: calc(100% - 10px);
  overflow: auto;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
`;
const SelectButton = styled.button`
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "gray" : "#18c08f")};
  border-radius: 10px;
  border: none;
  height: 49px;
  padding: 10px 22px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
`;
const CitizenInvite = ({ setMode, mode, members, setMembers }) => {
  const [searched, setSearched] = useState("");
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedCitizen, setSelectedCitizen] = useState(null);
  const [citizens, setCitizens] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();

  const handleSearch = (e) => {
    setSearched(e.target.value);
    if (e.target.value) {
      Request("dynasty/search", HTTP_METHOD.POST, {
        searchTerm: e.target.value,
      })
        .then((response) => {
          if (response.data) {
            setCitizens([response.data]);
          }
        })
        .catch((error) => {
          ToastError("خطا در جستجوی کاربر");
          setCitizens([]);
        });
    } else {
      setCitizens([]);
    }
  };

  const handleCitizenClick = (citizen) => {
    if (!citizen.verified) {
      ToastError(
        "شهروند مورد نظر احراز مرحله دو را انجام نداده است و در نتیجه شما قادر به ارسال درخواست برای این شهروند نمی باشد .شهروند دیگری را جستجو کنید"
      );
      return;
    }
    setSelectedCitizen(citizen);
  };

  const handleSelectClick = () => {
    if (selectedCitizen) {
      setOpenDetails(true);
    }
  };

  const closeModal = () => {
    setOpenDetails(false);
    setSelectedCitizen(null);
  };

  return (
    <>
      <Container>
        <Header>
          <Title title="دعوت شهروند" />
          <SearchInput
            value={searched}
            placeholder="نام یا شناسه کاربری شهروند مورد نظر خود را جستجو کنید"
            onchange={handleSearch}
          />
        </Header>
        <Citizens>
          {searched !== "" &&
            citizens.map((citizen) => (
              <CitizenCard
                key={citizen.id}
                mode={mode}
                members={members}
                citizens={citizens}
                setMode={setMode}
                onClick={() => handleCitizenClick(citizen)}
                isSelected={selectedCitizen?.id === citizen.id}
                {...citizen}
              />
            ))}
        </Citizens>
        <Buttons>
          <SelectButton
            disabled={selectedCitizen === null}
            onClick={handleSelectClick}
          >
            انتخاب
          </SelectButton>
          <Button
            fit
            color="#C30000"
            textColor="#FFFFFF"
            label="لغو"
            onclick={() => setMode(1)}
          />
        </Buttons>
      </Container>

      {openDetails &&
        selectedCitizen &&
        (selectedCitizen.age < 18 ? (
          <UnderEighteenMember
            setOpenDetails={closeModal}
            selectedCitizen={selectedCitizen}
            members={members}
            setMembers={setMembers}
            setMode={setMode}
          />
        ) : (
          <SpouseSubmit
            setOpenDetails={closeModal}
            selectedCitizen={selectedCitizen}
            members={members}
            setMembers={setMembers}
            setMode={setMode}
          />
        ))}
    </>
  );
};

export default CitizenInvite;
