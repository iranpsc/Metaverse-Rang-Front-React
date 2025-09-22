import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Alert from "../../../../Components/Alert/Alert";
import { AlertContext } from "../../../../services/reducers/AlertContext";
import InfoRow from "../InfoRow";
import Title from "../../../../Components/Title";
import useRequest from "../../../../services/Hooks/useRequest";
import { ScaleLoader } from "react-spinners";

const Container = styled.div`
  padding-top: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ loading }) => (loading ? "center" : "flex-start")};
  align-items: ${({ loading }) => (loading ? "center" : "stretch")};
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 850px) {
    height: 75% !important;
  }
  @media (max-width: 1023px) {
    max-height: 14.5rem;
    overflow-y: auto;
  }
`;

const CurrenciesContent = ({ option, currencies }) => {
  const { alert } = useContext(AlertContext);
  const [assets, setassets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    setLoading(true);
    Request("store", HTTP_METHOD.POST, {
      codes: [
        `currency-psc-${option}`,
        `currency-irr-${option}`,
        `currency-irr-${option}`,
      ],
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
      {alert && <Alert type="success" text="خرید شما با موفقیت انجام شد!" />}
      <Title title="ارزها" />
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
            <InfoRow shop type="ارز" key={item.id} data={item} />
          ))
        )}
      </Wrapper>
    </Container>
  );
};

export default CurrenciesContent;
