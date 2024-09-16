import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import Alert from "../../../../Components/Alert/Alert";
import Title from "../../../../Components/Title";
import InfoRow from "../InfoRow";
import useRequest from "../../../../Services/Hooks/useRequest";
import { ScaleLoader } from "react-spinners";

const Container = styled.div`
  text-align: right;
  padding: 20px 15px 0 0;
  height: 70% !important;
  overflow-y: auto;
  @media (min-width: 840px) {
    height: 76% !important;
  }
  @media (min-width: 914px) {
    height: 78% !important;
  }
  @media (min-width: 930px) {
    height: 78% !important;
  }
  @media (min-width: 1023px) {
    height: 65%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  gap: 20px;
  margin-top: 20px;
  justify-content: ${({ loading }) => (loading ? "center" : "flex-start")};
  align-items: ${({ loading }) => (loading ? "center" : "stretch")};
`;

const ToolsContent = ({ option }) => {
  const { alert } = useContext(AlertContext);
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    setLoading(true);
    Request("store", HTTP_METHOD.POST, {
      codes: [`tools-b-${option}`, `tools-r-${option}`, `tools-y-${option}`],
    })
      .then((response) => {
        setAssets(response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [option]);

  return (
    <Container>
      {alert && <Alert type="success" text="خرید شما با موفقیت انجام شد" />}
      <Title title="ابزارها" />
      <Wrapper loading={loading}>
        {loading ? (
          <ScaleLoader
            color="orange"
            loading={true}
            height="100"
            width="10"
            margin="5"
          />
        ) : (
          assets.map((item) => (
            <InfoRow shop type="ابزار" key={item.id} data={item} />
          ))
        )}
      </Wrapper>
    </Container>
  );
};

export default ToolsContent;
