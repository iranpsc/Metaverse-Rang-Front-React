import NotesList from "./NotesList";
import SearchInput from "../../../components/SearchInput";
import Title from "../../../components/Title";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding-right: 15px;
  direction: ltr;
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
        <Title title="یادداشت ها" right />
      </div>
      <SearchInput
        placeholder="جستجو عنوان یادداشت"
        onchange={(e) => setSearchTerm(e.target.value)}
      />
      <NotesList notes={filteredNotes} />
    </Container>
  );
};

export default Notes;
