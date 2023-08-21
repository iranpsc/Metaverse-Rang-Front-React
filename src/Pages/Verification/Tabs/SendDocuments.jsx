/* eslint-disable no-mixed-operators */
import Compressor from "compressorjs";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Submit from "../../../Components/Buttons/Submit";
import ErrorMessage from "../../../Components/ErrorMessage";
import Form from "../../../Components/Form";
import useRequest from "../../../Services/Hooks/useRequest";
import { ToastError, ToastSuccess } from "../../../Services/Utility";
import { KycContext } from "../Context/KycProvider";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const ParentUploadImg = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  padding: 16px;
  width: 30%;
  border-radius: 0.5rem;
  border: 1px solid rgb(156, 163, 175);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelBorder = styled.label`
  padding: 0.2em;
  color: gray;
  position: absolute;
  right: 5px;
  font-size: 16px;
  background: #f6f6f6;
  top: -5%;
`;

const ContainerUploader = styled.div`
  width: 280px;
  height: 180px;
  border: 3px dashed #666;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  & p {
    font-size: 48px;
  }

  & input {
    display: none;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

const RemoveImage = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 16px;
  background: #f4f4f4;
  border-radius: 100px;
  padding: 0px 6px;
  color: red;
`;

const ErrorContainer = styled.div`
  width: 95%;
  background-color: #df2e38;
  border-radius: 32px;
  margin-top: 16px;
`;

const errorHandler = (errors, fieldName) => {
  try {
    return errors?.filter((error) => error?.name === fieldName)[0]?.message;
  } catch {}
};

export default function SendDocuments({ setDefaultTab }) {
  const [kyc, setKyc] = useContext(KycContext);

  const [formData, setFormData] = useState({
    melli_card: null,
    prove_picture: null,
    resume: null,
  });

  const [preview, setPreview] = useState({
    melli_card: null,
    prove_picture: null,
    resume: null,
  });

  const [errors, setErrors] = useState([]);

  const { Request, HTTP_METHOD } = useRequest();

  const provePicRef = useRef();
  const meliCardRef = useRef();
  const bankCardRef = useRef();

  useEffect(() => {
    setDefaultTab(null);
  }, []);

  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file.size < 1000000) {
      new Compressor(file, {
        quality: 0.6,
        width: 512,
        height: 512,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          setPreview({
            ...preview,
            [e.target.name]: URL.createObjectURL(result),
          });

          const doc = new FormData();
          doc.append(e.target.name, result, result.name);
          setFormData({ ...formData, [e.target.name]: doc.get(e.target.name) });
        },
      });
    } else {
      ToastError("باید حجم فایل انتخابی کمتر از 1024 کیلوبایت باشد.");
    }
  };

  const onDeleteHandler = (e, name) => {
    e.preventDefault();
    e.stopPropagation();

    setPreview({ ...preview, [name]: null });
    setFormData({ ...formData, [name]: null });
  };

  const onSubmit = () => {
    if (!formData?.melli_card) {
      return setErrors(["کارت ملی وجود ندارد."]);
    }

    if (!formData?.prove_picture) {
      return setErrors(["عکس صورت همراه با کارت ملی وجود ندارد."]);
    }

    if (!formData?.resume) {
      return setErrors(["عکس کارت بانکی موجود ندارد."]);
    }
    const requestData = {
      fname: kyc?.fname,
      lname: kyc?.lname,
      father_name: kyc?.father_name,
      melli_code: kyc?.melli_code,
      province: kyc?.province,
      city: kyc?.city,
      postal_code: kyc?.postal_code,
      number: kyc?.number,
      address: kyc?.address,
      birthdate: kyc?.birthdate,
      site: kyc?.site,
      ...formData,
    };
    if (kyc?.status === -1) {
      Request(
        `kyc/${kyc?.id}`,
        HTTP_METHOD.POST,
        { ...requestData, _method: "PUT" },
        { "Content-Type": "multipart/form-data" }
      )
        .then((response) => {
          ToastSuccess(
            "مشخصات با موفقیت بروزرسانی شد ، کارشناسان ما در کمترین زمان آنها را برسی میکنند و به شما اطلاع میدهند."
          );
        })
        .catch((error) => {
          setKyc({
            ...kyc,
            errors: [
              ...Object.keys(errors).map((key) => ({
                name: key,
                message: errors?.[key][0],
              })),
            ],
          });
          ToastError(error.response.data.message);
        });
    } else {
      Request("kyc", HTTP_METHOD.POST, requestData, {
        "Content-Type": "multipart/form-data",
      })
        .then((response) => {
          ToastSuccess(
            "مشخصات با موفقیت ارسال شد ، کارشناسان ما در کمترین زمان آنها را برسی میکنند و به شما اطلاع میدهند."
          );
        })
        .catch((error) => {
          setKyc({
            ...kyc,
            errors: [
              ...Object.keys(errors).map((key) => ({
                name: key,
                message: errors?.[key][0],
              })),
            ],
          });
          ToastError(error.response.data.message);
        });
    }
  };

  return (
    <Form onSubmit={onSubmit} options={{ style: { height: "95%" } }}>
      <ErrorContainer>
        <ErrorMessage
          maxList={1}
          errors={errors}
          style={{ padding: 8, color: "white", margin: 0 }}
        />
      </ErrorContainer>
      <Container>
        <ParentUploadImg
          className={`${
            errorHandler(kyc?.errors, "resume") && "invalid-input"
          }`}
        >
          <LabelBorder>تصویر کارت بانکی</LabelBorder>

          <ContainerUploader
            onClick={() =>
              kyc?.status === 1 ? null : bankCardRef.current.click()
            }
          >
            {!preview?.resume && kyc?.status !== 1 && <p>+</p>}

            {preview?.resume && (
              <>
                <RemoveImage onClick={(e) => onDeleteHandler(e, "resume")}>
                  X
                </RemoveImage>
                <PreviewImage src={preview?.resume} />
              </>
            )}

            {kyc?.status === 1 && <PreviewImage src={kyc?.resume} />}

            <input
              ref={bankCardRef}
              name="resume"
              accept="image/jpeg"
              type="file"
              onChange={onChangeHandler}
            />
          </ContainerUploader>
        </ParentUploadImg>

        <ParentUploadImg
          className={`${
            errorHandler(kyc?.errors, "melli_card") && "invalid-input"
          }`}
        >
          <LabelBorder> تصویر کارت ملی</LabelBorder>

          <ContainerUploader
            onClick={() =>
              kyc?.status === 1 ? null : meliCardRef.current.click()
            }
          >
            {!preview?.melli_card && kyc?.status !== 1 && <p>+</p>}

            {preview?.melli_card && (
              <>
                <RemoveImage onClick={(e) => onDeleteHandler(e, "melli_card")}>
                  X
                </RemoveImage>
                <PreviewImage src={preview?.melli_card} />
              </>
            )}

            {kyc?.status === 1 && <PreviewImage src={kyc?.melli_card} />}

            <input
              ref={meliCardRef}
              name="melli_card"
              accept="image/jpeg"
              type="file"
              onChange={onChangeHandler}
            />
          </ContainerUploader>
        </ParentUploadImg>

        <ParentUploadImg
          className={`${
            errorHandler(kyc?.errors, "prove_picture") && "invalid-input"
          }`}
        >
          <LabelBorder>تصویر چهره به همراه فرم قوانین و مدارک </LabelBorder>

          <ContainerUploader
            onClick={() =>
              kyc?.status === 1 ? null : provePicRef.current.click()
            }
          >
            {!preview?.prove_picture && kyc?.status !== 1 && <p>+</p>}

            {preview?.prove_picture && (
              <>
                <RemoveImage
                  onClick={(e) => onDeleteHandler(e, "prove_picture")}
                >
                  X
                </RemoveImage>
                <PreviewImage src={preview?.prove_picture} />
              </>
            )}

            {kyc?.status === 1 && <PreviewImage src={kyc?.prove_picture} />}

            <input
              ref={provePicRef}
              name="prove_picture"
              accept="image/jpeg"
              type="file"
              onChange={onChangeHandler}
            />
          </ContainerUploader>
        </ParentUploadImg>
      </Container>

      {!(kyc?.status === 1) && (
        <Submit
          type="primary"
          text="ثبت"
          options={{ style: { width: "95%" } }}
        />
      )}
      <a
        href="https://rgb.irpsc.com/assets/kyc/unnamed.jpg"
        target="_blank"
        rel="noopener noreferrer"
        style={{ alignSelf: "end" }}
      >
        مشاهده نمونه فرم
      </a>
      <a
        href="https://rgb.irpsc.com/assets/kyc/kyc.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ alignSelf: "end" }}
      >
        دریافت فرم قوانین و مدارک
      </a>
    </Form>
  );
}
