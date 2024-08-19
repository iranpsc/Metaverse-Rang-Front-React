import IdentityInfo from "./IdentityInfo";
import IdentityInputs from "./IdentityInputs";
import { useState } from "react";

const details = [
  { id: 1, slug: "name", label: "نام" },
  { id: 2, slug: "lastName", label: "نام خانوادگی" },
  { id: 3, slug: "nationalCode", label: "کد ملی" },
  {
    id: 4,
    slug: "province",
    label: "استان",
    options: [
      { id: 1, city: "استان" },
      { id: 2, city: "تهران" },
      { id: 3, city: "شیراز" },
      { id: 4, city: "اصفهان" },
      { id: 5, city: "یزد" },
      { id: 6, city: "ارومیه" },
      { id: 7, city: "سنندج" },
    ],
  },
  { id: 5, slug: "birthDate", label: "تاریخ تولد" },
  {
    id: 6,
    slug: "gender",
    label: "جنسیت",
    options: [
      { id: 1, gender: "جنسیت" },
      { id: 2, gender: "مرد" },
      { id: 3, gender: "زن" },
    ],
  },
];
const IdentityTab = ({ setOpenErrorModal, openErrorModal }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    lastName: "",
    nationalCode: "",
    province: "",
    birthDate: "1300/01/01",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  const [submitted, setSubmitted] = useState(false);
  if (!submitted)
    return (
      <IdentityInputs
        setOpenErrorModal={setOpenErrorModal}
        openErrorModal={openErrorModal}
        data={details}
        inputValues={inputValues}
        handleInputChange={handleInputChange}
        setSubmitted={setSubmitted}
      />
    );
  if (submitted)
    return <IdentityInfo data={details} inputValues={inputValues} />;
};

export default IdentityTab;
