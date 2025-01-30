import NotesList from "./NotesList";

import styled from "styled-components";
import { useState } from "react";
import SearchInput from "../../../../Components/SearchInput";
import Title from "../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  padding-right: 15px;

  @media (min-width: 1366px) {
    height: 650px;
    overflow-y: auto;
  }
`;

const Notes = ({ notes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div style={{ marginBottom: "20px" }}>
        <Title title={getFieldTranslationByNames(14957)} />
      </div>
      <SearchInput
        placeholder={getFieldTranslationByNames(14964)}
        onchange={(e) => setSearchTerm(e.target.value)}
      />
      <NotesList notes={filteredNotes} />
    </Container>
  );
};

export default Notes;
