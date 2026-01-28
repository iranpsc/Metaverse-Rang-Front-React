import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AlertContext } from "../../../../services/reducers/AlertContext";
import Alert from "../../../../components/Alert/Alert";
import Title from "../../../../components/Title";
import InfoRow from "../InfoRow";
import useRequest from "../../../../services/Hooks/useRequest";
import { ScaleLoader } from "react-spinners";
import Container from "../../../../components/Common/Container";
import { useParams } from "react-router-dom"; 
import { useLocation } from "react-router-dom";
import { tools } from "../data";

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  justify-content: ${({ loading }) => (loading ? "center" : "flex-start")};
  align-items: ${({ loading }) => (loading ? "center" : "stretch")};
`;

const ToolsContent = () => {
  const location = useLocation();
  const parts = location.pathname.split("/");
  const pathFromUrl = parts[parts.length - 1];

  const { alert } = useContext(AlertContext);
  const [assets, setassets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    const selectedTool = tools.find((tool) => tool.path === pathFromUrl);
    const selectedToolId = selectedTool ? selectedTool.id : tools[0]?.id;

    setLoading(true);
    Request("store", HTTP_METHOD.POST, {
      codes: [
        `tools-b-${selectedToolId}`,
        `tools-r-${selectedToolId}`,
        `tools-y-${selectedToolId}`,
      ],
    })
      .then((response) => {
        setassets(response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tools, pathFromUrl]);

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
