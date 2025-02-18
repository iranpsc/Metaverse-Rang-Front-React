import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import CitizenCard from "./CitizenCard";
import UnderEighteenMember from "./UnderEighteenMember";
import SpouseSubmit from "./SpouseSubmit";
import Button from "../../../../../Components/Button";
import Title from "../../../../../Components/Title";
import SearchInput from "../../../../../Components/SearchInput";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { ToastError } from "../../../../../Services/Utility";
import {
  Container,
  Header,
  Citizens,
  Buttons,
  SelectButton,
} from "./styles/CitizenInvite.styles";

const CitizenInvite = ({ setMode, mode, members, setMembers }) => {
  const [searched, setSearched] = useState("");
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedCitizen, setSelectedCitizen] = useState(null);
  const [citizens, setCitizens] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();

  const handleSearch = useCallback(
    async (e) => {
      const searchTerm = e.target.value;
      setSearched(searchTerm);

      if (!searchTerm) {
        setCitizens([]);
        return;
      }

      try {
        const response = await Request("dynasty/search", HTTP_METHOD.POST, {
          searchTerm,
        });
        setCitizens(response.data ? [response.data] : []);
      } catch (error) {
        ToastError("خطا در جستجوی کاربر");
        setCitizens([]);
      }
    },
    [Request]
  );

  const handleCitizenClick = useCallback((citizen) => {
    if (!citizen.verified) {
      ToastError(
        "شهروند مورد نظر احراز مرحله دو را انجام نداده است و در نتیجه شما قادر به ارسال درخواست برای این شهروند نمی باشد .شهروند دیگری را جستجو کنید"
      );
      return;
    }
    setSelectedCitizen(citizen);
  }, []);

  const closeModal = useCallback(() => {
    setOpenDetails(false);
    setSelectedCitizen(null);
  }, []);

  const renderDetailsModal = () => {
    if (!openDetails || !selectedCitizen) return null;

    const Component =
      selectedCitizen.age < 18 ? UnderEighteenMember : SpouseSubmit;
    return (
      <Component
        setOpenDetails={closeModal}
        selectedCitizen={selectedCitizen}
        members={members}
        setMembers={setMembers}
        setMode={setMode}
      />
    );
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
          {searched &&
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
            disabled={!selectedCitizen}
            onClick={() => selectedCitizen && setOpenDetails(true)}
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
      {renderDetailsModal()}
    </>
  );
};

CitizenInvite.propTypes = {
  setMode: PropTypes.func.isRequired,
  mode: PropTypes.number.isRequired,
  members: PropTypes.array.isRequired,
  setMembers: PropTypes.func.isRequired,
};

export default CitizenInvite;
