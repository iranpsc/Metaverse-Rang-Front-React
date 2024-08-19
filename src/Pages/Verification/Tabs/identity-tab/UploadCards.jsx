import { HiOutlineTrash } from "react-icons/hi";
import styled from "styled-components";
import { useState } from "react";

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

const UploadWrapper = styled.div`
  margin-top: 20px;
  width: 80% !important;
  height: 150px;
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
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
const UploadCards = () => {
  const [nationImage, setNationImage] = useState();
  const [bankImage, setBankImage] = useState();

  const handleNationImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setNationImage(URL.createObjectURL(file));
  };

  const handleBankImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setBankImage(URL.createObjectURL(file));
  };

  return (
    <Container>
      <NationCard>
        <Title>تصویر کارت ملی</Title>
        <UploadWrapper>
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
              <IconWrapper onClick={() => setNationImage("")}>
                <HiOutlineTrash />
              </IconWrapper>
              <img src={nationImage} alt="nation card" />
            </Image>
          )}
        </UploadWrapper>
      </NationCard>

      <BankCard>
        <Title>تصویر کارت بانکی</Title>
        <UploadWrapper>
          {!bankImage && (
            <Upload>
              +
              <input
                type="file"
                accept="image/*"
                onChange={handleBankImageChange}
              />
            </Upload>
          )}
          {bankImage && (
            <Image>
              <IconWrapper onClick={() => setBankImage("")}>
                <HiOutlineTrash />
              </IconWrapper>
              <img src={bankImage} alt="bank card" />
            </Image>
          )}
        </UploadWrapper>
      </BankCard>
    </Container>
  );
};

export default UploadCards;
