import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Alert from "../../../../components/Alert/Alert";
import { AlertContext } from "../../../../services/reducers/AlertContext";
import InfoRow from "../InfoRow";
import Title from "../../../../components/Title";
import useRequest from "../../../../services/Hooks/useRequest";
import { ScaleLoader } from "react-spinners";
import Container from "../../../../components/Common/Container";
import { useLocation } from "react-router-dom";
import { currencies } from "../data";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ loading }) => (loading ? "center" : "flex-start")};
  align-items: ${({ loading }) => (loading ? "center" : "stretch")};
  gap: 20px;
  margin-top: 20px;
  overflow-y: auto;
`;

const CurrenciesContent = () => {
  const { alert } = useContext(AlertContext);
  const [assets, setassets] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const parts = location.pathname.split("/");
  const pathFromUrl = parts[parts.length - 1];
  const selectedCurrency =
    currencies.find((c) => c.path === pathFromUrl) || currencies[0];

  const selectedCurrencyId = selectedCurrency?.id;
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    if (!selectedCurrencyId) return;

    setLoading(true);
    Request("store", HTTP_METHOD.POST, {
      codes: [
        `currency-psc-${selectedCurrencyId}`,
        `currency-irr-${selectedCurrencyId}`,
        `currency-irr-${selectedCurrencyId}`,
      ],
    })
      .then((response) => {
        setassets(response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pathFromUrl]);

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
