import { useEffect, useState } from "react";
import styled from "styled-components";
import useRequest from "../../../../services/Hooks/useRequest";
import TableDynasty from "./components/TableDynasty";
import TableFeature from "./components/TableFeature";
import TableFeatureDynasty from "./components/TableFeatureDynasty";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px;
`;
const ContainerTableFeature = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerTableDetail = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function PropertyEstablishment() {
  const [dynasty, setDynasty] = useState({});
  const { Request } = useRequest();

  useEffect(() => {
    Request('dynasty').then(response => {
      setDynasty(response.data.data);
    })
 
  }, [])

  return (
    <Container>
      <ContainerTableFeature>
        <TableFeature dynasty={dynasty} setDynasty={setDynasty}/>
      </ContainerTableFeature>
      
      <ContainerTableDetail>
        {dynasty["user-has-dynasty"] ? 
          <TableDynasty dynasty={dynasty}/> : 
          <TableFeatureDynasty dynasty={dynasty}/>
        }
      </ContainerTableDetail>
    </Container>
  );
}
