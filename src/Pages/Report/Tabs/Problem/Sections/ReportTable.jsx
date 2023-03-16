import React, { memo, useState } from "react";
import shortid from "shortid";
import { Cell, Row, Table, Thead } from "../../../../../Components/Table";
import { SanitizeHTML, TextShorter } from "../../../../../Services/Utility";
import SeenIcon from "../../../../../Assets/images/seen.png";
import useRequest from "../../../../../Services/Hooks/useRequest";
import styled from "styled-components";
import BackArrowImage from "../../../../../Assets/images/back-arow.png";

const Description = styled.div`
  text-align: right;
  direction: rtl;
  background: #ECF2FF;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 16px;
`;

const SUBJECT = {
  displayError: "خطا در نمایش",
  spellingError: "خطا در املا",
  codingError: "خطا در کد نویسی",
  FPSError: "کندی سامانه FPS",
  disrespect: "بی احترامی",
};

function ReportTable({ reports }) {
  const [report, setReport] = useState(null);
  const { Request } = useRequest();

  const onClickHandler = (id) => {
    Request(`reports/${id}`).then((response) => {
      setReport(response.data.data);
    });
  }

  return (
    report ? <>
      <img className='cursor-pointer' src={BackArrowImage} alt='' width={32} onClick={() => setReport(null)}/>

      <Description>
        <h3>{SanitizeHTML(report.title)}</h3>
        <p className='mb-3'>{SanitizeHTML(report.content)}</p>
        {report.attachment && <a href={report.attachment} className='link'>فایل ضمیمه</a>}
      </Description>
    </> : (
    <>
      <h4 className="text-right rtl mb-3">لیست گذارشات : </h4>

      <Table>
        <Thead>
          <Cell>عنوان</Cell>
          <Cell>موضوع</Cell>
          <Cell>تاریخ انتشار</Cell>
          <Cell>عملیات</Cell>
        </Thead>

        {reports.reverse().map((report) => (
          <Row key={shortid.generate()}>
            <Cell>{TextShorter(report?.title, 18)}</Cell>

            <Cell>{SUBJECT[report?.subject]}</Cell>

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
    )
  );
}

export default memo(ReportTable);
