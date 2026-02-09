import { HiOutlineTrash } from "react-icons/hi";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import DOMPurify from "dompurify";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const NationCard = styled.div`
  width: 240px;
  @media (min-width: 1500px) {
    width: 185px;
  }
  @media (min-width: 1920px) {
    width: 240px;
  }
  input {
    opacity: 0;
  }
`;

const BankCard = styled.div`
  width: 240px;
  @media (min-width: 1500px) {
    width: 185px;
  }
  @media (min-width: 1920px) {
    width: 240px;
  }
  input {
    opacity: 0;
  }
`;

const Image = styled.div`
  position: relative;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;

const Upload = styled.div`
  height: 147px;
  border: 2px dashed #454545;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  position: relative;
  flex-grow: 1;
  input {
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
  }
`;

const IconWrapper = styled.div`
  width: 24px !important;
  height: 24px !important;
  border-radius: 100%;
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  svg {
    font-size: 17px;
    cursor: pointer;
  }
`;
const UploadWrapper = styled.div`
  margin-top: 20px;
  width: 80% !important;
  height: 150px;
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    border: 2px dashed ${(props) => (props.hasError ? "red" : "#454545")}; /* Conditionally set border color */
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 1500px) {
    width: 187px;
    height: 150px;
  }
`;

const UploadCards = ({ setImageError, setNationImageURL }) => {
  const [nationImage, setNationImage] = useState(null);
  const [imageError, setImageErrorState] = useState(false); // State for image upload error
  const [previewUrl, setPreviewUrl] = useState(null);
 useEffect(() => {
    if (!nationImage) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(nationImage);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [nationImage]);

  const handleNationImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    
    if (file && file.type.startsWith("image/")) {
      setNationImage(file);
      setNationImageURL(file);
      setImageErrorState(false);
    } else {
      setImageErrorState(true);
      if (file) alert("Please upload a valid image file.");
    }
  };
  const handleDeleteClick = () => {
    setNationImage(null);
    setNationImageURL(null);
    setImageErrorState(true); 
  };

  return (
    <Container>
      <NationCard>
        <Title>{getFieldTranslationByNames("878")}</Title>
        <UploadWrapper hasError={imageError}>
          {!nationImage && (
            <Upload>
              +
              <input
                type="file"
                accept="image/*"
                onChange={handleNationImageChange}
              />
            </Upload>
          )}
          {nationImage && (
            <Image>
              <IconWrapper onClick={handleDeleteClick}>
                <HiOutlineTrash />
              </IconWrapper>
              {
                // codeql[js/xss-through-dom]: previewUrl is safe (from File API / trusted source)
              }

              <img src={previewUrl || ""} alt="nation card" />
            </Image>
          )}
        </UploadWrapper>
      </NationCard>
    </Container>
  );
};

export default UploadCards;
