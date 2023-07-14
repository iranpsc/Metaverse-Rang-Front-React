import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import useRequest from "../../../../../Services/Hooks/useRequest";

import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import Input from "../../../../../Components/Inputs/Input";
import { Select } from "../../../../../Components/Inputs/Select";
import ErrorMessage from "../../../../../Components/ErrorMessage";
import Attachment from "../../../../../Components/Attachment";
import UserSearch from "../../../Components/UserSearch";
import { ToastError } from "../../../../../Services/Utility";
import { useLocation } from "react-router-dom";

const initialState = {
  title: "",
  content: "",
  department: "none",
};

const SelectOption = ({ value, dispatch }) => {
  const selectOptionHandler = (e) => {
    const { name, value } = e.target;

    dispatch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Select name="department" onChange={selectOptionHandler} value={value}>
      <option value="none">دسته بندی سند ارسال شده</option>
      <option value="technical_support">پشتیبانی فنی</option>
      <option value="citizens_safety">ایمنی شهروندان</option>
      <option value="investment">سرمایه گذاری</option>
      <option value="inspection">بازرسی</option>
      <option value="protection">حفاظت</option>
      <option value="ztb">مدیریت کل زنجیره تامین بهشت</option>
    </Select>
  );
};

export default function TicketForm({ setTickets }) {
  const { Request, HTTP_METHOD } = useRequest();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const [files, setFiles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state?.hasOwnProperty("code")) {
      setCurrentUser(state.code);
      setCurrentUserId(state.id);
    }
  }, [state]);

  const onSubmit = () => {
    const errors = [];

    if (formData.title.length <= 0) {
      errors.push("فیلد عنوان خالی است لطفا آنرا پر کنید.");
    }

    if (formData.department === "none") {
      if (!currentUser) {
        errors.push(
          "لطفا فردی را که میخواهید به آن پیامی ارسال کنید وارد کنید و یا موضوع پیام خود را وارد کنید."
        );
      }
    }

    if (!currentUser) {
      if (formData.department === "none") {
        errors.push(
          "لطفا فردی را که میخواهید به آن پیامی ارسال کنید وارد کنید و یا موضوع پیام خود را وارد کنید."
        );
      }
    }

    if (formData.content.replace(/<[^>]*>?/gm, "") <= 50) {
      errors.push("متن پیام شما باید بیش از 50 کارکتر داشته باشد.");
    }

    setErrors(errors);

    if (files.length > 0) {
      const filesData = new FormData();
      filesData.append(
        "file",
        new Blob([files[0]], { type: files[0].type }),
        files[0].name || "File"
      );
      const attachment = filesData.get("file");

      if (currentUser) {
        if (!errors[0]) {
          Request(
            "tickets",
            HTTP_METHOD.POST,
            {
              title: formData.title,
              content: formData.content,
              reciever: Number(currentUserId),
              attachment: attachment,
            },
            { "Content-Type": "multipart/form-data" }
          )
            .then((response) => {
              setTickets((prevState) => [...prevState, response.data.data]);
              setFormData(initialState);
              setFiles([]);
              setCurrentUser(null);
            })
            .catch((error) => {
              ToastError(error.response.data.message);
            });
        }
      } else {
        if (!errors[0]) {
          Request(
            "tickets",
            HTTP_METHOD.POST,
            { ...formData, attachment: attachment },
            { "Content-Type": "multipart/form-data" }
          )
            .then((response) => {
              setTickets((prevState) => [...prevState, response.data.data]);
              setFormData(initialState);
              setFiles([]);
              setCurrentUser(null);
            })
            .catch((error) => {
              ToastError(error.response.data.message);
            });
        }
      }
    } else {
      if (currentUser) {
        if (!errors[0]) {
          Request("tickets", HTTP_METHOD.POST, {
            title: formData.title,
            content: formData.content,
            reciever: Number(currentUserId),
          })
            .then((response) => {
              setTickets((prevState) => [...prevState, response.data.data]);
              setFormData(initialState);
              setCurrentUser(null);
            })
            .catch((error) => {
              ToastError(error.response.data.message);
            });
        }
      } else {
        if (!errors[0]) {
          Request("tickets", HTTP_METHOD.POST, formData)
            .then((response) => {
              setTickets((prevState) => [...prevState, response.data.data]);
              setFormData(initialState);
              setCurrentUser(null);
            })
            .catch((error) => {
              ToastError(error.response.data.message);
            });
        }
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      {!currentUser && (
        <SelectOption dispatch={setFormData} value={formData.subject} />
      )}

      <br />

      <Input
        floatLabel={true}
        name="title"
        dispatch={setFormData}
        value={formData.title}
        type="text"
        placeholder=": عنوان"
        labelColor="#f5f5f5"
        style={{
          direction: "rtl !important",
          marginBottom: 8,
          textAlign: "right",
        }}
      />

      {formData.department === "none" && (
        <UserSearch
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          setCurrentUserId={setCurrentUserId}
        />
      )}

      <ReactQuill
        style={{ width: "100%" }}
        theme="snow"
        value={formData.content}
        onChange={(e) =>
          setFormData((prevState) => ({ ...prevState, content: e }))
        }
        placeholder="متن سند ..."
      />

      <Attachment setFiles={setFiles} files={files} />

      <Submit
        type={"primary"}
        text="ارسال"
        options={{ style: { marginTop: 16, width: "100%" } }}
      />

      <ErrorMessage errors={errors} maxList={1} />
    </Form>
  );
}
