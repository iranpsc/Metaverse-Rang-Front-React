import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AlertContext } from "../../../../services/reducers/AlertContext";
import Alert from "../../../../components/Alert/Alert";
import Title from "../../../../components/Title";
import InfoRow from "../InfoRow";
import useRequest from "../../../../services/Hooks/useRequest";
import { ScaleLoader } from "react-spinners";

const Container = styled.div`
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
  gap: 20px;
  margin-top: 20px;
  justify-content: ${({ loading }) => (loading ? "center" : "flex-start")};
  align-items: ${({ loading }) => (loading ? "center" : "stretch")};
`;

const ToolsContent = ({ option }) => {
  const { alert } = useContext(AlertContext);
  const [assets, setassets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    setLoading(true);
    Request("store", HTTP_METHOD.POST, {
      codes: [`tools-b-${option}`, `tools-r-${option}`, `tools-y-${option}`],
    })
      .then((response) => {
        setassets(response.data.data);
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
