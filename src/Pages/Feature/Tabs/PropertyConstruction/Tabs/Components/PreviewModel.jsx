import React, { useEffect, useState } from "react";
import "../../../../../../Components/Modal/Modal.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAdviserData from "../../../../../../Services/Hooks/useAdviserData";
import styled, { useTheme } from "styled-components";

import { ReactComponent as Help } from "../../../../../../Assets/svg/exclamation.svg";
import { ReactComponent as Exit } from "../../../../../../Assets/svg/close.svg";
import { ReactComponent as Report } from "../../../../../../Assets/svg/question.svg";
import CanvasPreview from "./CanvasPreview";

const ContainerDetail = styled.div`
  width: 40%;
  height: 480px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgSection};
  gap: 20px;
  padding: 25px 20px;
  overflow-y: auto;
`;
const CanvasContainer = styled.div`
  width: 71.3%;
  height: 480px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;
const TextTitle = styled.p`
  color: ${(props) => props.theme.TextTitle};
  font-size: 18px;
  font-weight: 600;
`;
const TextDetail = styled.p`
  color: ${(props) => props.theme.detailText};
  font-size: 16px;
  font-weight: 600;
`;
const PHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const PreviewModel = ({ data }) => {
  const navigation = useNavigate();
  const Location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [hidden, setHidden] = useState(false);
  const newStr = Location.pathname.replace(/\/metaverse\//g, "") + "-";
  const adviserData = useAdviserData(newStr, Location?.state?.locationPage);
  const theme = useTheme();

  const Icon = styled(Help)`
    width: 40px;
    height: 40px;
    & > :first-child {
      fill: ${() => theme.headerIconFill};
    }

    & > :nth-child(2) {
      fill: ${() => theme.headerIconStroke};
    }
  `;
  const Icon2 = styled(Report)`
    width: 40px;
    height: 40px;
    & > :first-child {
      fill: ${() => theme.headerIconFill};
    }

    & > :nth-child(2) {
      fill: ${() => theme.headerIconStroke};
    }
  `;

  const Icon3 = styled(Exit)`
    width: 40px;
    height: 40px;
  `;
  const Header = styled.p`
    color: ${(props) => props.theme.headerModals};
    text-align: right;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    font-style: normal;
    font-weight: 600;
    line-height: 180%;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  useEffect(() => {
    setHidden(false);
  }, [data]);
  return (
    <div
      className="modal-preview-base"
      style={{
        display: `${hidden ? "none" : ""}`,
      }}
    >
      <div
        className={`modal-section modal-border modal-section-md modal-preview`}
        style={{
          background: `${theme.bgModal}`,
        }}
      >
        <div className="modal-header modal-border">
          <div className="container-icon">
            <Icon
              className=" cursor-pointer"
              alt="help"
              onClick={() => setShowModal((showModal) => !showModal)}
            />
            <Icon2
              className="cursor-pointer"
              alt="report"
              onClick={() =>
                navigation("/metaverse/report", {
                  state: {
                    href: window.location.href.split("/").slice(3).join("/"),
                  },
                })
              }
            />
            <Icon3
              className=" cursor-pointer"
              alt="exit"
              onClick={() => setHidden(true)}
            />
          </div>
          <Header>نمایشگر مدل ۳ بعدی</Header>
        </div>
        <div className="modal-body ">
          <Container>
            <ContainerDetail>
              <TextTitle>جزییات بنا</TextTitle>
              {data[0].attributes.map((attribute, index) => (
                <PHolder key={index}>
                  <TextTitle>{attribute.name}</TextTitle>
                  <TextDetail>{attribute.value}</TextDetail>
                </PHolder>
              ))}
            </ContainerDetail>
            <CanvasContainer>
              <CanvasPreview link={data[0].file.url} />
            </CanvasContainer>
          </Container>
          {showModal && (
            <Amozesh
              creator={adviserData?.creator_code}
              title={adviserData?.title}
              video={adviserData?.video}
              description={adviserData?.description}
              setShowModal={setShowModal}
              dislikes={adviserData?.dislikes}
              likes={adviserData?.likes}
              views={adviserData?.views}
              id={adviserData?.id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModel;
