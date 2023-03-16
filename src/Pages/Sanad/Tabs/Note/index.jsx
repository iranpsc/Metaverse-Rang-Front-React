import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useRequest from '../../../../Services/Hooks/useRequest';

import NoteForm from './Sections/NoteForm';
import NoteTable from './Sections/NoteTable';


const Section = styled.div`
  width: 100%;
  padding: 16px;
  margin-top: 32px;
  height: 400px;
  overflow-y: scroll;
`

const Container = styled.section`
  display: flex;
  height: 100%;
  overflow-y: scroll;

  @media screen and (max-width: 1200px){
    flex-direction: column-reverse;

    & > ${Section} {
      padding: 0px 32px 0px 32px;
      margin-top: 32px;

    }
  }
`

export default function Note() {
  const { Request } = useRequest();

  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    Request('notes').then((response) => {
      setNotes(response.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Container>
      <Section>
        <NoteTable Notes={Notes} setNotes={setNotes}/>
      </Section>

      <Section>
        <NoteForm setNotes={setNotes}/>
      </Section>
    </Container>
  );
}
