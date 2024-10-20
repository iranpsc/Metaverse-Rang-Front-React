import { useContext, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { GlobalNoteStateContext } from "../GlobalNoteStateProvider";
import NoteDetails from "./NoteDetails";
import styled from "styled-components";
import Button from "../../../../Components/Button";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 15px 7px;
  border-bottom: 1px solid #454545;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  padding-right: 30px;
  div {
    width: fit-content;
  }
  @media (min-width: 845px) {
    padding: 15px 20px;
  }
`;

const Code = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    padding: 13px 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.garyBtn};
    color: ${(props) => props.theme.colors.newColors.otherColors.grayBtnText};
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      background-color: #c30000;
    }
  }
  @media (min-width: 1366px) {
    div {
      padding: 15px 22px;
    }
  }
`;

const Row = ({ id, code, title, publish_date, name, description, files }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [note, setNote] = useState(null); // State to hold the fetched note details
  const { state, dispatch } = useContext(GlobalNoteStateContext); // Access both state and dispatch
  const { Request } = useRequest();

  const onClickHandler = async () => {
    try {
      const response = await Request(`notes/${id}`);
      setNote(response.data.data); // Set the fetched note data to state
      setShowDetails(true); // Show the details modal
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  const removeNoteHandler = async () => {
    try {
      await Request(`notes/${id}`, "DELETE"); // Use the request hook to delete the note
      dispatch({ type: "REMOVE_NOTE", payload: id }); // Dispatch action after successful deletion
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <div>
            <Code>{id}#</Code>
          </div>
        </TableCell>
        <TableCell>
          <div style={{ paddingRight: "25px" }}>
            <Code>{title}</Code>
          </div>
        </TableCell>
        <TableCell>
          <Buttons>
            <div onClick={removeNoteHandler}>
              <FiTrash2 size={20} />
            </div>
            <Button
              label={getFieldTranslationByNames("send-vod", "view")}
              grayTheme
              onclick={onClickHandler}
            />
          </Buttons>
        </TableCell>
      </TableRow>

      {showDetails && note && (
        <NoteDetails data={note} setShowDetails={setShowDetails} />
      )}
    </>
  );
};

export default Row;
