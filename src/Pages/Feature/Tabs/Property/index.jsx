import Compressor from "compressorjs";
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
import styled from "styled-components";
import { COMBINE_FEATURE } from "../../../../Services/Constants/FeatureType";
import useRequest from "../../../../Services/Hooks/useRequest";
import { UserContext } from "../../../../Services/Reducers/UserContext";
import { ToastError, ToastSuccess } from "../../../../Services/Utility";
import Specification from "../../Components/Specification";
import { FeatureContext } from "../../Context/FeatureProvider";

const Container = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
`;

const PropertyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  gap: 15px;
  padding: 0 20px;
  height: 100%;
  overflow-y: scroll;
`;

const ContainerGallery = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  height: 100%;
  padding: 10px;
  overflow-y: auto;
`;

const ImgProperty = styled.img`
  width: 140px;
  aspect-ratio: 1/1;
`;

const UploadContainer = styled.div`
  cursor: pointer;
  width: 140px;
  height: 140px;
  border: 3px dashed #666;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 56px;
  }
`;

const Input = styled.input`
  display: none;
`;

export default function Property() {
  const [user, ] = useContext(UserContext);
  const [feature, setFeature] = useContext(FeatureContext);
  // (feature);
  const Navigate = useNavigate();

  const inputRef = useRef();

  const { Request, HTTP_METHOD } = useRequest();

  const uploadHandler = (e) => {
    const file = e.target.files[0];

    if (file.size < 1000000) {
      new Compressor(file, {
        quality: 0.6,
        width: 512,
        height: 512,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          const formData = new FormData();
          formData.append("file", result, result.name);

          Request(`my-features/${user?.id}/add-image/${feature?.id}`, HTTP_METHOD.POST, {"images[]": [formData.get("file")]}, {"Content-Type": "multipart/form-data"}).then(response => {
            setFeature({...feature, images: [...response.data.data]}); 
            ToastSuccess("آپلود عکس با موفقیت انجام شد.")
          }).catch(error => {
            if (error.response.status === 410) {
              ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!")
              return Navigate("/metaverse/confirmation");
            } else {
              ToastError(error.response.data.message)
            }
          })
        }
      });
    } else {
      ToastError("باید حجم فایل انتخابی کمتر از 1024 کیلوبایت باشد.");
    }
  };

  return (
    <Container>
      <ContainerGallery>
        {feature?.images?.map(image => (
          <ImgProperty key={shortid.generate()} src={image.url} />
        ))}
        {parseInt(feature.owner_id) === parseInt(user.id) &&
          <UploadContainer onClick={() => inputRef.current.click()}>
            <p>+</p>

            <Input
              type="file"
              ref={inputRef}
              onChange={uploadHandler}
              accept="image/jpeg"
              multiple={false}
            />
          </UploadContainer>
        }

      </ContainerGallery>

      <PropertyContainer>
        <Specification title="صاحب ملک " value={feature?.properties?.owner === "rgb" ? "سیستم" : feature?.properties?.owner} />
        <Specification title="آدرس" value={feature?.properties?.address} />
        <Specification title="وضعیت" value={COMBINE_FEATURE[feature?.properties?.karbari]} />
        <Specification
          title="متراژ | مترمربع"
          value={feature?.properties?.area}
        />
        <Specification
          title="تراکم | طبقه"
          value={feature?.properties?.density}
        />
        <Specification
          title="سود ساعت شمار"
          value={String(
            (feature?.properties?.area * feature?.properties?.density) / 100
          )}
        />
        <Specification title="پکیج ساخت" value={10} />
        <Specification title="مجوز ساخت" value="آزاد" />
      </PropertyContainer>
    </Container>
  );
}
