import React, { memo, useState } from "react";
import { Cell, Row, Table, Thead } from "../../../../../Components/Table";
import useRequest from "../../../../../Services/Hooks/useRequest";
import deleteImage from "../../../../../Assets/images/cross.png";
import shortid from "shortid";
import { SanitizeHTML, TextShorter } from "../../../../../Services/Utility";
import SeenIcon from "../../../../../Assets/images/seen.png";
import BackArrowImage from "../../../../../Assets/images/back-arow.png";
import styled from "styled-components";

const Description = styled.div`
  text-align: right;

  background: #ecf2ff;
  padding: 8px;
  border-radius: 8px;
  width: 40%;
  margin-bottom: 16px;
`;

const Container = styled.div``;

function NoteTable({ Notes, setNotes }) {
  const { Request } = useRequest();
  const [note, setNote] = useState(null);

  const deleteHandler = (id) => {
    Request(`notes/${id}`, "DELETE").then(() => {
      setNotes((prevState) => prevState.filter((notes) => notes.id !== id));
    }, []);
  };

  const onClickHandler = (id) => {
    Request(`notes/${id}`).then((response) => {
      setNote(response.data.data);
    }, []);
  };

  return note ? (
    <>
      <img
        className="cursor-pointer"
        src={BackArrowImage}
        alt=""
        width={32}
        onClick={() => setNote(null)}
      />

      <Container>
        <Description>
          <h3>{note.title}</h3>
          <p className="mb-3">{SanitizeHTML(note.content)}</p>
          {note.attachment !== "https://dl.qzparadise.ir/" && (
            <a href={note.attachment} className="link">
              فایل ضمیمه
            </a>
          )}
        </Description>
      </Container>
    </>
  ) : (
    <>
      <h4 className="text-right rtl mb-3">لیست یادداشت ها : </h4>

      <Table>
        <Thead>
          <Cell>عنوان</Cell>
          <Cell>عملیات</Cell>
        </Thead>

        {Notes.reverse().map((notes) => (
          <Row key={shortid.generate()}>
            <Cell>{TextShorter(notes?.title, 18)}</Cell>

            <Cell
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className="cursor-pointer"
                src={deleteImage}
                alt="delete"
                width={24}
                onClick={() => deleteHandler(notes.id)}
              />

              <img
                className="cursor-pointer"
                src={SeenIcon}
                alt=""
                width={32}
                onClick={() => onClickHandler(notes.id)}
              />
            </Cell>
          </Row>
        ))}
      </Table>
    </>
  );
}

export default memo(NoteTable);
