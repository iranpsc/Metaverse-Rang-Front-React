import React, { useCallback, useRef, useState } from 'react'
import Cropper from 'react-easy-crop';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import Modal from '../../Components/Modal'
import Submit from '../../Components/Buttons/Submit';
import getCroppedImg from '../../Services/Utility/CropImage';
import AnonymousImage from '../../Assets/images/anonymous.png'
import shortid from 'shortid';
import ErrorMessage from '../../Components/ErrorMessage';
import useRequest from '../../Services/Hooks/useRequest';
import { ToastError, ToastSuccess } from '../../Services/Utility';
import Form from '../../Components/Form';

const Container = styled.div`
  width: 100% !important;
  height: 600px !important;
`;

const CropperContainer = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
`;


const AvatarPreview = styled.img`
  position: relative;
  border-radius: 100px;
  margin-right: 16px;
`;

const PreviewContainer = styled.div`
  margin-bottom: 24px;
  margin-top: 16px;

  & h3 {
    margin-bottom: 16px;
    text-align: right;
    direction: rtl;
  }
`;

const Input = styled.input`
  display: none;
`;

const UploadContainer = styled.div`
  cursor: pointer;
  width: 99%;
  height: 90%;
  border: 4px dashed #666;
  margin: auto;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & p {
    font-size: 80px;
    display: flex;
  }
`;



export default function UploadAvatar() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const inputRef = useRef();
  const [pureImage, setPureImage] = useState(null);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [errors, setErrors] = useState([]);

  const { Request, HTTP_METHOD } = useRequest();

  const onCropComplete = useCallback(async (croppedArea, croppedAreaPixels) => {
    try {
      const croppedImage = await getCroppedImg(
          pureImage,
          croppedAreaPixels
      )
      setPreviewImage(croppedImage);

      fetch(croppedImage).then(res => res.blob()).then(blob => {
          const formData = new FormData();
          const file = new File([blob], `${shortid.generate()}.jpeg`);
          formData.append('avatar', file);
          setImage(formData.get('avatar'));
      })
  } catch {}
  }, [pureImage])


  const Navigate = useNavigate();

  const onImageChange = (e) => {
    if(e.target.files[0].size <= 1000000) {
      const image = URL.createObjectURL(e.target.files[0]);
      setPureImage(image);
      setErrors([]);
    } else {
      setErrors(["باید حجم فایل انتخابی کمتر از 1024 کیلوبایت باشد."]);
    }
    Navigate('/metaverse/profile');
  }

  const onSubmitHandler = () => {
    if(image) {
      Request('profilePhotos', HTTP_METHOD.POST, { image }, {"Content-Type": "multipart/form-data"}).then(response => {
        ToastSuccess("آواتار با موفقیت آپلود شد.");
      })
    } else {
      ToastError("برای آپلود آواتار ابتدا باید عکس خود را انتخاب کنید.");
    }
  }

  return (
    <Modal title="بارگذاری اواتار" disabled={true}>
      <Container>
        <CropperContainer>
          {!pureImage ?
            <UploadContainer onClick={() => inputRef.current.click()}>
              <p>+</p>
            </UploadContainer> : 
            <Cropper
              image={pureImage}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          }
        </CropperContainer>

        <PreviewContainer>
          <h3>شما می توانید در پایین پیش نمایش عکس خود را مشاهده کنید.</h3>

          <AvatarPreview src={previewImage ? previewImage : AnonymousImage} height={100} width={100}/>
          <AvatarPreview src={previewImage ? previewImage : AnonymousImage} height={80} width={80}/>
          <AvatarPreview src={previewImage ? previewImage : AnonymousImage} height={50} width={50}/>

        </PreviewContainer>
        <Input
            type="file"
            accept="image/*"
            multiple={false}
            ref={inputRef}
            onChange={onImageChange}
          />
        {pureImage && 
          <Submit
            text="حدف تصویر انتخاب شده"
            type="primary"
            options={{ style: {
              width: '100%',
              marginBottom: '16px'
            }, onClick: () => {setPureImage(null); setPreviewImage(null)} }}
          />
        }

        <ErrorMessage errors={errors} maxList={1} style={{ marginBottom: '24px' }}/>

        <Form onSubmit={onSubmitHandler}>
          <Submit
            text="آپلود تصویر"
            type="primary"
            options={{ style: {
              width: '100%'
            }}}
          />
        </Form>
      </Container>
    </Modal>
  )
}
