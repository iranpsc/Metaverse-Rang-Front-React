import NotesList from "./NotesList";

import styled from "styled-components";
import { useState } from "react";
import SearchInput from "../../../../components/SearchInput";
import Title from "../../../../components/Title";
import { getFieldTranslationByNames } from "../../../../services/Utility";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 20px;
  padding-right: 15px;
  border-radius: 10px;

  @media (min-width: 1366px) {
    overflow-y: auto;
    width: 75%;
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
        <Title title={getFieldTranslationByNames("1355")} />
      </div>
      <SearchInput
        placeholder={getFieldTranslationByNames("1356")}
        onchange={(e) => setSearchTerm(e.target.value)}
      />
      <NotesList notes={filteredNotes} />
    </Container>
  );
};

export default Notes;
