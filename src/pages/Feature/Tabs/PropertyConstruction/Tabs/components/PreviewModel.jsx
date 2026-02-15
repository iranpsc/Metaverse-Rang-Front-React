import styled from "styled-components";

import CanvasPreview from "./CanvasPreview";
import { getFieldTranslationByNames } from "../../../../../../services/Utility";
import ModalLg from "../../../../../../components/Modal/ModalLg";

const ContainerDetail = styled.div`
  width: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  gap: 20px;
  padding: 15px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  div{
display: flex;
justify-content: space-between;

  }
`;

const CanvasContainer = styled.div`
  width: 50%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  height: 100%;
`;

const TextTitle = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 18px;
  font-weight: 600;
`;

const TextDetail = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 600;
`;

const PHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const PreviewModel = ({ data, setShowModal }) => {
  console.log(data);
  return (
    <ModalLg setShowModal={setShowModal} titleId="371" help report>
      <Container>
        <ContainerDetail>
          <div>   <TextTitle>{getFieldTranslationByNames("372")}</TextTitle>
          <TextTitle>{data[0].name}</TextTitle></div>
       

          {data[0]?.attributes?.map((attribute, index) => (
            <PHolder key={index}>
              <TextTitle>{attribute.name}</TextTitle>
              <TextDetail>{attribute.value}</TextDetail>
            </PHolder>
          ))}
        </ContainerDetail>

        <CanvasContainer>
          <CanvasPreview
            link={`https://middle.irpsc.com/app/?url=${data[0]?.file?.url}`}
          />
        </CanvasContainer>
      </Container>
    </ModalLg>
  );
};

export default PreviewModel;
