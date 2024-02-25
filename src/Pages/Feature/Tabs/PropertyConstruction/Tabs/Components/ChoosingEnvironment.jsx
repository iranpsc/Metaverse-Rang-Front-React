import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FeatureContext } from "../../../../Context/FeatureProvider";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../../../Services/Hooks/useRequest";
import { ReactComponent as Eye } from "../../../../../../Assets/svg/eye.svg";
import Modal from "../../../../../../Components/Modal";
import PreviewModel from "./PreviewModel";
const Container = styled.div`
  gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
  overflow-y: scroll;
  width: 40%;
  height: 60%;
`;
const Img = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
`;
const ViweIcon = styled(Eye)`
  stroke: ${(props) => props.theme.textButtonPrimary};
`;
const ViweHolder = styled.button`
  background-color: ${(props) => props.theme.activeButton};
  width: 30px;
  height: 30px;
  border-radius: 60px;
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
const ImgHolder = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  position: relative;
`;

const ChoosingEnvironment = () => {
  const [feature] = useContext(FeatureContext);
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState([]);
  useEffect(() => {
    Request(`features/${feature.id}/build/package`, HTTP_METHOD.GET)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container>
        {data.map((data, index) => {
          return (
            <ImgHolder>
              <Img src={data.image[0].url} alt="" key={index} />
              <ViweHolder
                onClick={() => {
                  setPreview(data);
                }}
              >
                <ViweIcon />
              </ViweHolder>
            </ImgHolder>
          );
        })}
      </Container>
      {preview && <PreviewModel />}
    </>
  );
};

export default ChoosingEnvironment;
