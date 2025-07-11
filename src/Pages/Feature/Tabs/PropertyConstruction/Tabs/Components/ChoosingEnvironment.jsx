import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FeatureContext } from "../../../../Context/FeatureProvider";

import useRequest from "../../../../../../Services/Hooks/useRequest";
import { ReactComponent as Eye } from "../../../../../../assets/svg/eye.svg";

import PreviewModel from "./PreviewModel";
import { useSelectedEnvironment } from "../../../../../../Services/Reducers/SelectedEnvironmentContext";

const Container = styled.div`
  gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;

  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    overflow-y: visible;
  }
`;

const ImgHolder = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  position: relative;

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 120px;
    object-fit: cover;
  }
`;

const ViewIcon = styled(Eye)`
  stroke: ${(props) => props.theme.colors.primary};
`;

const ViewHolder = styled.button`
  background-color: ${(props) => props.theme.colors.newColors.shades.bgOne};
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

const SelectorEnvironment = styled.button`
  background-color: ${(props) => props.theme.colors.newColors.shades.bgOne};
  width: 25px;
  height: 25px;
  border-radius: 60px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  padding: 4px;
  &.active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const ChoosingEnvironment = () => {
  const [feature] = useContext(FeatureContext);
  const { Request, HTTP_METHOD } = useRequest();
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const { addSelectedEnvironment, hiddenModel, setHiddenModel, isSelectable } =
    useSelectedEnvironment() || {};
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await Request(
          `features/${feature.id}/build/package?page=${page}`,
          HTTP_METHOD.GET
        );
        setData((prevData) => [...prevData, ...res.data.data]);
        setCoordinates([res.data.feature.coordinates]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    const container = document.querySelector("#scrollable-container");
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const handleSelectorClick = (index) => {
    setActiveIndex(index);
    addSelectedEnvironment({
      ...data[index],
      coordinates: coordinates[0],
    });

    if (!isSelectable) return;
    if (hiddenModel) {
      setHiddenModel(false);
    }
  };

  return (
    <>
      <Container id="scrollable-container">
        {data &&
          data.map((data, index) => (
            <ImgHolder key={index}>
              <Img src={data.images[0].url} alt="" />
              <ViewHolder
                onClick={() => {
                  setPreview([data]);
                }}
              >
                <ViewIcon />
              </ViewHolder>
              <SelectorEnvironment
                onClick={() => handleSelectorClick(index)}
                className={activeIndex === index ? "active" : ""}
              />
            </ImgHolder>
          ))}
      </Container>
      {preview.length === 1 && <PreviewModel data={preview} />}
    </>
  );
};

export default ChoosingEnvironment;
