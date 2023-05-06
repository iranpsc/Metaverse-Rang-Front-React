import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRequest from '../../../../Services/Hooks/useRequest';

import ReportForm from './Sections/ReportForm';
import ReportTable from './Sections/ReportTable';


const Section = styled.div`
  width: 100%;
  padding: 16px;
  margin-top: 32px;
  overflow-y: scroll;
  height: 400px;
`

const Container = styled.section`
  display: flex;
  height: 100%;

  @media screen and (max-width: 1200px){
    flex-direction: column-reverse;

    & > ${Section} {
      padding: 0px 32px 0px 32px;
      margin-top: 32px;

    }
  }
`

export default function Problem() {
  const { Request } = useRequest();

  const [reports, setReports] = useState([]);

  useEffect(() => {
    Request('reports').then((response) => {
      setReports(response.data.data);
    });

  }, []);


  return (
    <Container>
      <Section>
        <ReportTable reports={reports}/>
      </Section>

      <Section>
        <ReportForm setReports={setReports}/>
      </Section>
    </Container>
  );
}
