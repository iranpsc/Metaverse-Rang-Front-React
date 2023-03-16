import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import useRequest from '../../../../../Services/Hooks/useRequest';

import Submit from '../../../../../Components/Buttons/Submit';
import Form from '../../../../../Components/Form';
import Input from '../../../../../Components/Inputs/Input';
import ErrorMessage from '../../../../../Components/ErrorMessage';
import Attachment from '../../../../../Components/Attachment';

const initialState = {
  title: '',
  content: ''
}


export default function NotesForm({ setNotes }) {
  const { Request, HTTP_METHOD } = useRequest();
  const [formData, setFormData] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);

  const onSubmit = () => {
    const errors = [];

    if(formData.title.length <= 0) {
      errors.push('فیلد عنوان خالی است لطفا آنرا پر کنید.')

    }
    
    if(formData.content.replace(/<[^>]*>?/gm, '') <= 30) {
      errors.push('متن یادداشت شما باید بیش از 30 کارکتر داشته باشد.')

    }
    setErrors(errors);

    if(files.length > 0) {
      const filesData = new FormData()
      filesData.append('file', new Blob([files[0]], { type: files[0].type }), files[0].name || 'File')
      const attachment = filesData.get('file');

      if(!errors[0]) {
        Request('notes', HTTP_METHOD.POST, {...formData, attachment: attachment}, {"Content-Type": "multipart/form-data"}).then((response) => {
          setNotes((prevState) => [...prevState, response.data.data]);
          setFormData(initialState);
          setFiles([]);
        }, []);
      }
    } else {
      if(!errors[0]) {
        Request('notes', HTTP_METHOD.POST, {...formData}, {"Content-Type": "multipart/form-data"}).then((response) => {
          setNotes((prevState) => [...prevState, response.data.data]);
          setFormData(initialState);
        }, []);
      }
    }
  };

  return (
    <Form onSubmit={onSubmit} options={{ style: { marginTop: 32 } }}>
      <Input
        floatLabel={true}
        name='title'
        dispatch={setFormData}
        value={formData.title}
        type='text'
        placeholder=': عنوان'
        labelColor='#f5f5f5'
        style={{ direction: 'rtl !important', marginBottom: 8, textAlign: 'right' }}
      />
      
      <ReactQuill
        style={{ width: '100%' }}
        theme='snow'
        value={formData.content}
        onChange={(e) =>
          setFormData((prevState) => ({ ...prevState, content: e }))
        }
        placeholder='متن پیام ...'
      />
      
      <Attachment setFiles={setFiles} files={files}/>

      <Submit
        type={'primary'}
        text='ارسال'
        options={{ style: { marginTop: 16, width: '100%' } }}
      />

      <ErrorMessage errors={errors} maxList={2}/>
    </Form>
  );
}

