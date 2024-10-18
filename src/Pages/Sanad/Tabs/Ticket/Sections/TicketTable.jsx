import React, { memo, useEffect, useRef, useState } from "react";
import shortid from "shortid";
import { Cell, Row, Table, Thead } from "../../../../../Components/Table";
import {
  SanitizeHTML,
  TextShorter,
  ToastError,
} from "../../../../../Services/Utility";
import SeenIcon from "../../../../../Assets/images/seen.png";
import useRequest from "../../../../../Services/Hooks/useRequest";
import BackArrowImage from "../../../../../Assets/images/back-arow.png";
import styled from "styled-components";
import Form from "../../../../../Components/Form";
import ReactQuill from "react-quill";
import Submit from "../../../../../Components/Buttons/Submit";

const Description = styled.div`
  background: #ecf2ff;
  padding: 8px;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 16px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Editor = styled.div`
  width: 100%;
  height: 48%;
  position: absolute;
  bottom: -16px;
`;

const Chat = styled.div`
  height: 46%;
  overflow-y: scroll;
`;

const CloseTicket = styled.button`
  --bs-bg-opacity: 1;
  background-color: var(--bs-orange) !important;
  border: none;
  border-radius: 8px;
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  padding: 8px 24px 8px 24px;
  margin-left: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

function ChatSection({ ticket, setTicket }) {
  const { Request, HTTP_METHOD } = useRequest();

  const [formData, setFormData] = useState({
    response: "",
  });

  const ScrollRef = useRef(null);

  useEffect(() => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollTop = ScrollRef.current.scrollHeight;
    }
  }, []);

  const onSubmit = () => {
    Request(`tickets/response/${ticket.id}`, HTTP_METHOD.POST, formData)
      .then((response) => {
        setTicket(response.data.data);
        setFormData({
          response: "",
        });
      })
      .catch((error) => {
        ToastError(error.response.data.message);
      });
  };

  const onCloseTicket = () => {
    Request(`tickets/close/${ticket.id}`)
      .then(() => {
        setTicket({ ...ticket, status: 5 });
      })
      .catch((error) => {
        ToastError(error.response.data.message);
      });
  };

  return (
    <Container>
      <ButtonsContainer>
        <img
          className="cursor-pointer"
          src={BackArrowImage}
          alt=""
          width={32}
          onClick={() => {
            setTicket(null);
            setFormData({
              response: "",
            });
          }}
        />
        {!(parseInt(ticket.status) === 5) && (
          <CloseTicket type="button" onClick={() => onCloseTicket()}>
            بستن تیکت
          </CloseTicket>
        )}
      </ButtonsContainer>

      <Chat
        ref={ScrollRef}
        style={{ height: `${parseInt(ticket.status) === 5 && "100%"}` }}
      >
        <Description>
          <h3>{ticket.sender}</h3>
          <p className="mb-3">
            <span>{SanitizeHTML(ticket.title)}</span>,
            <p> {SanitizeHTML(ticket.content)}</p>
          </p>
          {ticket.attachment ? (
            <a
              href={ticket.attachment}
              className="link"
              target={"_blank"}
              rel="noreferrer"
            >
              فایل ضمیمه
            </a>
          ) : (
            ""
          )}
        </Description>

        {ticket.responses.map((res) => (
          <Description>
            <h3>{res.responser_name}</h3>
            <p className="mb-3">{SanitizeHTML(res.response)}</p>
          </Description>
        ))}
      </Chat>

      {!(parseInt(ticket.status) === 5) && (
        <Editor>
          <Form onSubmit={onSubmit}>
            <ReactQuill
              style={{ width: "100%" }}
              theme="snow"
              value={formData.response}
              onChange={(e) =>
                setFormData((prevState) => ({ ...prevState, response: e }))
              }
              placeholder="متن پیام ..."
            />

            <Submit
              type="primary"
              text="ارسال"
              options={{ style: { marginTop: 16, width: "100%" } }}
            />
          </Form>
        </Editor>
      )}
    </Container>
  );
}

function TicketTable({ tickets }) {
  const { Request } = useRequest();
  const [ticket, setTicket] = useState(null);

  const onClickHandler = (id) => {
    Request(`tickets/${id}`).then((response) => {
      setTicket(response.data.data);
    });
  };

  return ticket ? (
    <ChatSection setTicket={setTicket} ticket={ticket} />
  ) : (
    <>
      <h4 className="text-right rtl mb-3">لیست تیکت ها : </h4>

      <Table>
        <Thead>
          <Cell>عنوان</Cell>
          <Cell>ارسال کننده</Cell>
          <Cell>دریافت کننده</Cell>
          <Cell>تاریخ انتشار</Cell>
          <Cell>عملیات</Cell>
        </Thead>

        {tickets.map((report) => (
          <Row key={shortid.generate()}>
            <Cell>{TextShorter(report?.title, 18)}</Cell>

            <Cell>{report.sender}</Cell>

            <Cell>{report.reciever}</Cell>

            <Cell style={{ direction: "ltr" }}>
              {report?.date} {report?.time}
            </Cell>

            <Cell>
              <img
                className="cursor-pointer"
                src={SeenIcon}
                alt=""
                width={32}
                onClick={() => onClickHandler(report.id)}
              />
            </Cell>
          </Row>
        ))}
      </Table>
    </>
  );
}

export default memo(TicketTable);
