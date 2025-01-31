import useRequest from "../../../../Services/Hooks/useRequest";
import IdentityInfo from "./IdentityInfo";
import IdentityInputs from "./IdentityInputs";
import { useState, useEffect } from "react";

const initialDetails = [
  { id: 1, slug: "fname", label: "647" },
  { id: 2, slug: "lname", label: "646" },
  { id: 3, slug: "melli_code", label: "870" },
  {
    id: 4,
    slug: "province",
    label: 10512,
    options: [
      { id: 0, city: "1000" },
      { id: 1, city: "907" },
      { id: 2, city: "908" },
      { id: 3, city: "909" },
      { id: 4, city: "910" },
      { id: 5, city: "911" },
      { id: 6, city: "912" },
      { id: 7, city: "913" },
      { id: 8, city: "914" },
      { id: 9, city: "915" },
      { id: 10, city: "916" },
      { id: 11, city: "917" },
      { id: 12, city: "918" },
      { id: 13, city: "919" },
      { id: 14, city: "920" },
      { id: 15, city: "921" },
      { id: 16, city: "922" },
      { id: 17, city: "923" },
      { id: 18, city: "924" },
      { id: 19, city: "925" },
      { id: 20, city: "926" },
      { id: 21, city: "927" },
      { id: 22, city: "928" },
      { id: 23, city: "929" },
      { id: 24, city: "930" },
      { id: 25, city: "931" },
      { id: 26, city: "932" },
      { id: 27, city: "933" },
      { id: 28, city: "934" },
      { id: 29, city: "935" },
      { id: 30, city: "936" },
      { id: 31, city: "937" },
      { id: 32, city: "938" },
      { id: 33, city: "939" },
      { id: 34, city: "940" },
      { id: 35, city: "941" },
      { id: 36, city: "942" },
      { id: 37, city: "943" },
      { id: 38, city: "944" },
      { id: 39, city: "945" },
      { id: 40, city: "946" },
      { id: 41, city: "947" },
      { id: 42, city: "948" },
      { id: 43, city: "949" },
      { id: 44, city: "950" },
      { id: 45, city: "951" },
      { id: 46, city: "952" },
      { id: 47, city: "953" },
      { id: 48, city: "954" },
      { id: 49, city: "955" },
      { id: 50, city: "956" },
      { id: 51, city: "957" },
      { id: 52, city: "958" },
      { id: 53, city: "959" },
      { id: 54, city: "960" },
      { id: 55, city: "961" },
      { id: 56, city: "962" },
      { id: 57, city: "963" },
      { id: 58, city: "964" },
      { id: 59, city: "965" },
      { id: 60, city: "966" },
      { id: 61, city: "967" },
      { id: 62, city: "968" },
      { id: 63, city: "969" },
      { id: 64, city: "970" },
      { id: 65, city: "971" },
      { id: 66, city: "972" },
      { id: 67, city: "973" },
      { id: 68, city: "974" },
      { id: 69, city: "975" },
      { id: 70, city: "976" },
      { id: 71, city: "977" },
      { id: 72, city: "978" },
      { id: 73, city: "979" },
      { id: 74, city: "980" },
      { id: 75, city: "981" },
      { id: 76, city: "982" },
      { id: 77, city: "983" },
      { id: 78, city: "984" },
      { id: 79, city: "985" },
      { id: 80, city: "986" },
      { id: 81, city: "987" },
      { id: 82, city: "988" },
      { id: 83, city: "989" },
      { id: 84, city: "990" },
    ],
  },
  { id: 5, slug: "birthdate", label: "83" },
  {
    id: 6,
    slug: "gender",
    label: 10526,
    options: [
      { id: 0, gender: "872" },
      { id: 1, gender: "887" },
      { id: 2, gender: "886" },
    ],
  },
];

const IdentityTab = ({ setOpenErrorModal, openErrorModal }) => {
  const [kyc, setKyc] = useState({});
  const [nationalCardImg, SetNationalCardImg] = useState("");
  const { Request } = useRequest();
  const [errors, setErrors] = useState([]);
  const [details, setDetails] = useState(initialDetails);

  useEffect(() => {
    Request(`kyc`).then((response) => {
      setKyc(response.data.data);

      if (response.data.data.errors) {
        const errorNames = response.data.data.errors.map(
          (error) => error.message
        );
        setErrors(errorNames);
        setOpenErrorModal(true);

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

    if (kyc?.status === 1) {
      setSubmitted(true);
    } else if (kyc?.status === 0) {
      setSubmitted("pending");
    }
  }, [kyc]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));

    setErrors((prevErrors) =>
      prevErrors.filter((error) => error !== `${name}_err`)
    );

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
  if (submitted === "pending")
    return (
      <IdentityInfo
        data={details}
        inputValues={inputValues}
        nationalCardImg={nationalCardImg}
        showPending={true} // برای نمایش حالت "در دست بررسی"
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
