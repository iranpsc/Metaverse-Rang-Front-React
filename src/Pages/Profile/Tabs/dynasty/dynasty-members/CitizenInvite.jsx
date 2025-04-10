import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import CitizenCard from "./CitizenCard";

import Button from "../../../../../Components/Button";
import Title from "../../../../../Components/Title";
import SearchInput from "../../../../../Components/SearchInput";
import useRequest from "../../../../../Services/Hooks/useRequest";
import {
  getFieldTranslationByNames,
  ToastError,
} from "../../../../../Services/Utility";
import {
  Container,
  Header,
  Citizens,
  Buttons,
  SelectButton,
} from "./styles/CitizenInvite.styles";
import SubmitDynastyModal from "./SubmitDynastyModal";

const CitizenInvite = ({ setMode, mode, memberType, members, setMembers }) => {
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

        setCitizens(response.data ? Object.values(response.data) : []);
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
      setSelectedCitizen(null);
      return;
    }
    setSelectedCitizen((prevSelected) =>
      prevSelected?.id === citizen.id ? null : citizen
    );
  }, []);

  const closeModal = useCallback(() => {
    setOpenDetails(false);
    setSelectedCitizen(null);
  }, []);

  const renderDetailsModal = () => {
    if (!openDetails || !selectedCitizen) return null;

    return (
      <SubmitDynastyModal
        setOpenDetails={closeModal}
        selectedCitizen={selectedCitizen}
        members={members}
        setMembers={setMembers}
        setMode={setMode}
        memberType={memberType}
      />
    );
  };
  return (
    <>
      <Container>
        <Header>
          <Title title={getFieldTranslationByNames(832)} />
          <SearchInput
            value={searched}
            placeholder={getFieldTranslationByNames(831)}
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
            disabled={!selectedCitizen || !selectedCitizen.verified}
            onClick={() => selectedCitizen && setOpenDetails(true)}
          >
            {getFieldTranslationByNames(132)}
          </SelectButton>
          <Button
            fit
            color="#C30000"
            textColor="#FFFFFF"
            label={getFieldTranslationByNames(833)}
            onclick={() => setMode({ mode: 1, type: null })} // Modified to pass correct object structure
          />
        </Buttons>
      </Container>
      {renderDetailsModal()}
    </>
  );
};

CitizenInvite.propTypes = {
  setMode: PropTypes.func.isRequired,
  mode: PropTypes.object.isRequired, // Changed to object since mode now has type
  memberType: PropTypes.string.isRequired,
  members: PropTypes.object.isRequired, // Changed to object to match the actual shape
  setMembers: PropTypes.func.isRequired,
};

export default CitizenInvite;
