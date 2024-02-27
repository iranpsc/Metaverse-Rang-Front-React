import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FeatureContext } from "../../../../Context/FeatureProvider";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../../../Services/Hooks/useRequest";
import { ReactComponent as Eye } from "../../../../../../Assets/svg/eye.svg";
import Modal from "../../../../../../Components/Modal";
import PreviewModel from "./PreviewModel";
import { useSelectedEnvironment } from "../../../../../../Services/Reducers/SelectedEnvironmentContext";

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

const SelectorEnvironment = styled.button`
  background-color: ${(props) => props.theme.bgSection};
  width: 25px;
  height: 25px;
  border-radius: 60px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.inputBorder};
  padding: 4px;
  &.active {
    background-color: ${(props) => props.theme.activeButton};
  }
`;

const ChoosingEnvironment = () => {
  const [feature] = useContext(FeatureContext);
  const { Request, HTTP_METHOD } = useRequest();
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const { addSelectedEnvironment } = useSelectedEnvironment();

  useEffect(() => {
    Request(`features/${feature.id}/build/package`, HTTP_METHOD.GET)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectorClick = (index) => {
    setActiveIndex(index);
    // Add the selected environment data to selectedEnvironment array
    addSelectedEnvironment(data[index]);
  };
  return (
    <>
      <Container>
        {data.map((data, index) => {
          return (
            <ImgHolder key={index}>
              <Img src={data.images[0].url} alt="" />
              <ViweHolder
                onClick={() => {
                  setPreview([data]);
                }}
              >
                <ViweIcon />
              </ViweHolder>
              <SelectorEnvironment
                onClick={() => handleSelectorClick(index)}
                className={activeIndex === index ? "active" : ""}
              />
            </ImgHolder>
          );
        })}
      </Container>
      {preview.length > 0 && <PreviewModel data={preview} />}
    </>
  );
};

export default ChoosingEnvironment;