import { HiOutlineTrash } from "react-icons/hi";
import { IoWarningOutline } from "react-icons/io5";
import Slider from "./Slider";
import styled from "styled-components";
import { useState, useRef, useContext } from "react";
import Compressor from "compressorjs";
import { UserContext } from "../../../../services/reducers/UserContext";
import useRequest from "../../../../services/Hooks/useRequest";
import {
  ToastError,
  ToastSuccess,
  getFieldTranslationByNames,
} from "../../../../services/Utility";
const AlbumWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 0 0 0 20px;
  overflow-y: auto;
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const UploadMore = styled.div`
  width: 100%;
  height: 150px;
  border: 2px dashed #454545;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  border-radius: 10px;
  color: #dedee9;
  position: relative;
  flex-grow: 1;
  span {
    font-size: 60px;
  }
  input {
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.newColors.otherColors.gray};
  width: 100%;
  height: 150px;
  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    transition: transform 0.3s ease-in-out;
  }
`;

const Actions = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  &:nth-of-type(2) {
    margin-top: 3px;
  }
  svg {
    font-size: 17px;
    cursor: pointer;
  }
`;

const Album = ({ feature, setFeature }) => {
  const [user] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(feature?.images?.[0] || null);
  const { Request, HTTP_METHOD, checkSecurity } = useRequest();
  const inputRef = useRef();
  // if (feature?.owner_id === userId) return SellTabPanel;

  const handleImageUpload = (event) => {
    if (!checkSecurity()) return;

    const file = event.target.files[0];
    if (file.size < 1000000) {
      new Compressor(file, {
        quality: 0.6,
        width: 512,
        height: 512,
        success(result) {
          const formData = new FormData();
          formData.append("file", result, result.name);
          Request(
            `my-features/${user?.id}/add-image/${feature?.id}`,
            HTTP_METHOD.POST,
            { "images[]": [formData.get("file")] },
            { "Content-Type": "multipart/form-data" },
          )
            .then((response) => {
              setFeature({ ...feature, images: [...response.data.data] });
              ToastSuccess(getFieldTranslationByNames(1628));
            })
            .catch((error) => {
              ToastError(error.response.data.message);
            });
        },
      });
    } else {
      ToastError(getFieldTranslationByNames(1482));
    }
  };

  const deleteHandler = (imageId) => {
    if (!checkSecurity()) return;
    const url = `my-features/${user.id}/remove-image/${feature.id}/image/${imageId}`;

    Request(url, HTTP_METHOD.POST)
      .then(() => {
        const filteredImages = feature?.images?.filter(
          (item) => item.id !== imageId,
        );
        setFeature({ ...feature, images: filteredImages });
        setActiveImage(filteredImages.length > 0 ? filteredImages[0] : null);
        ToastSuccess(getFieldTranslationByNames(1631));
      })
      .catch((error) => {
        ToastError(error.response.data.message);
      });
  };

  return (
    <div>
      <AlbumWrapper>
        {feature?.images?.map((item) => (
          <ImageWrapper key={item.id}>
            <img
              onClick={() => setOpen(true)}
              src={item.url}
              alt={item.url}
              loading="lazy"
            />
            <Actions>
              {user.id == feature?.owner_id && (
                <IconWrapper onClick={() => deleteHandler(item.id)}>
                  <HiOutlineTrash />
                </IconWrapper>
              )}

              <IconWrapper
                onClick={() => {
                  console.log("pending");
                }}
              >
                <IoWarningOutline />
              </IconWrapper>
            </Actions>
          </ImageWrapper>
        ))}
        {parseInt(feature?.owner_id) === parseInt(user.id) && (
          <UploadMore>
            <span>+</span>
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageUpload}
              accept="image/jpeg"
              multiple={false}
            />
          </UploadMore>
        )}
      </AlbumWrapper>
      {open && (
        <Slider
          deleteHandler={deleteHandler}
          images={feature?.images}
          setOpen={setOpen}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
      )}
    </div>
  );
};

export default Album;
