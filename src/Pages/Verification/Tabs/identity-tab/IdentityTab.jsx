import useRequest from "../../../../Services/Hooks/useRequest";
import IdentityInfo from "./IdentityInfo";
import IdentityInputs from "./IdentityInputs";
import { useState, useEffect } from "react";

const details = [
  { id: 1, slug: "name", label: "نام" },
  { id: 2, slug: "lastName", label: "نام خانوادگی" },
  { id: 3, slug: "nationalCode", label: "کد ملی" },
  {
    id: 4,
    slug: "province",
    label: "استان",
    options: [
      { id: 1, city: "آذربایجان شرقی" },
      { id: 2, city: "آذربایجان غربی" },
      { id: 3, city: "اردبیل" },
      { id: 4, city: "اصفهان" },
      { id: 5, city: "البرز" },
      { id: 6, city: "ایلام" },
      { id: 7, city: "بوشهر" },
      { id: 8, city: "تهران" },
      { id: 9, city: "چهارمحال و بختیاری" },
      { id: 10, city: "خراسان جنوبی" },
      { id: 11, city: "خراسان رضوی" },
      { id: 12, city: "خراسان شمالی" },
      { id: 13, city: "خوزستان" },
      { id: 14, city: "زنجان" },
      { id: 15, city: "سمنان" },
      { id: 16, city: "سیستان و بلوچستان" },
      { id: 17, city: "فارس" },
      { id: 18, city: "قزوین" },
      { id: 19, city: "قم" },
      { id: 20, city: "کردستان" },
      { id: 21, city: "کرمان" },
      { id: 22, city: "کرمانشاه" },
      { id: 23, city: "کهگیلویه و بویراحمد" },
      { id: 24, city: "گلستان" },
      { id: 25, city: "گیلان" },
      { id: 26, city: "لرستان" },
      { id: 27, city: "مازندران" },
      { id: 28, city: "مرکزی" },
      { id: 29, city: "هرمزگان" },
      { id: 30, city: "همدان" },
      { id: 31, city: "یزد" },
    ],
  },
  { id: 5, slug: "birthDate", label: "تاریخ تولد" },
  {
    id: 6,
    slug: "gender",
    label: "جنسیت",
    options: [
      { id: 1, gender: "مرد" },
      { id: 2, gender: "زن" },
    ],
  },
];

const IdentityTab = ({ setOpenErrorModal, openErrorModal }) => {
  const [kyc, setKyc] = useState({});
  const [nationalCardImg, SetNationalCardImg] = useState("");
  const { Request } = useRequest();

  useEffect(() => {
    Request(`kyc`).then((response) => {
      setKyc(response.data.data);
    });
  }, []);

  const [inputValues, setInputValues] = useState({
    name: "",
    lastName: "",
    nationalCode: "",
    province: "",
    birthDate: "1300/01/01",
    gender: "",
  });

  useEffect(() => {
    setInputValues({
      name: kyc?.fname || "",
      lastName: kyc?.lname || "",
      nationalCode: kyc?.melli_code || "",
      province: kyc?.province || "",
      birthDate: kyc?.birthdate || "1300/01/01",
      gender: kyc?.gender || "",
    });
    SetNationalCardImg(kyc?.melli_card);
    if (kyc?.status == 1) {
      setSubmitted(true);
    }
  }, [kyc]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  console.log(inputValues);
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
    return (
      <IdentityInfo
        data={details}
        inputValues={inputValues}
        nationalCardImg={nationalCardImg}
      />
    );
};

export default IdentityTab;
