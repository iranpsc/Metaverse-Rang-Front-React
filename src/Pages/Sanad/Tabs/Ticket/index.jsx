import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRequest from '../../../../Services/Hooks/useRequest';
import TicketForm from './Sections/TicketForm';
import TicketTable from './Sections/TicketTable';


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

export default function Ticket() {
  const { Request } = useRequest();

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    Request('tickets').then((response) => {
      setTickets(tickets => [...tickets, ...response.data.data])
    });

    Request('tickets/recieved').then(response => {
      setTickets(tickets => [...tickets, ...response.data.data])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Container>
      <Section>
        <TicketTable tickets={tickets}/>
      </Section>

      <Section>
        <TicketForm setTickets={setTickets}/>
      </Section>
    </Container>
  );
}
