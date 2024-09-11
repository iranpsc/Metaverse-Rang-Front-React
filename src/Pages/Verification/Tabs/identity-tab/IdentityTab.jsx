import useRequest from "../../../../Services/Hooks/useRequest";
import IdentityInfo from "./IdentityInfo";
import IdentityInputs from "./IdentityInputs";
import { useState, useEffect } from "react";

const initialDetails = [
  { id: 1, slug: "fname", label: "نام" },
  { id: 2, slug: "lname", label: "نام خانوادگی" },
  { id: 3, slug: "melli_code", label: "کد ملی" },
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
  { id: 5, slug: "birthdate", label: "تاریخ تولد" },
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
  const [errors, setErrors] = useState([]);
  const [details, setDetails] = useState(initialDetails); // Initialize state for details

  useEffect(() => {
    Request(`kyc`).then((response) => {
      setKyc(response.data.data);

      if (response.data.data.errors) {
        const errorNames = response.data.data.errors.map(
          (error) => error.message
        );
        setErrors(errorNames);
        setOpenErrorModal(true); // Open the error modal when there are errors

        // Update details with error flags
        const updatedDetails = initialDetails.map((detail) => {
          if (
            response.data.data.errors
              .map((error) => error.name)
              .includes(`${detail.slug}_err`)
          ) {
            return { ...detail, error: true };
          }
          return detail;
        });

        setDetails(updatedDetails);
      }
    });
  }, []);

  const [inputValues, setInputValues] = useState({
    fname: "",
    lname: "",
    melli_code: "",
    province: "",
    birthdate: "1300/01/01",
    gender: "",
  });

  useEffect(() => {
    setInputValues({
      fname: kyc?.fname || "",
      lname: kyc?.lname || "",
      melli_code: kyc?.melli_code || "",
      province: kyc?.province || "",
      birthdate: kyc?.birthdate || "1300/01/01",
      gender: kyc?.gender || "",
    });
    SetNationalCardImg(kyc?.melli_card);
    if (kyc?.status == 1) {
      setSubmitted(true);
    }
  }, [kyc]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the input values
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));

    // Remove the error for the field that is being changed
    setErrors((prevErrors) =>
      prevErrors.filter((error) => error !== `${name}_err`)
    );

    // Optionally, update the details array to remove the error flag
    setDetails((prevDetails) =>
      prevDetails.map((detail) =>
        detail.slug === name ? { ...detail, error: false } : detail
      )
    );
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
        errors={errors}
        setErrors={setErrors}
        setDetails={setDetails}
        kyc={kyc}
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