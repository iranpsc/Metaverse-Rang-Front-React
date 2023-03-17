import React, { memo, useState } from 'react';
import ReactQuill from 'react-quill';

import useRequest from '../../../../../Services/Hooks/useRequest';

import Submit from '../../../../../Components/Buttons/Submit';
import Form from '../../../../../Components/Form';
import Input from '../../../../../Components/Inputs/Input';
import { Select } from '../../../../../Components/Inputs/Select';
import ErrorMessage from '../../../../../Components/ErrorMessage';
import Attachment from '../../../../../Components/Attachment';
import { useLocation } from 'react-router-dom';

const SelectOption = memo(({ value, dispatch }) => {
  const selectOptionHandler = (e) => {
    const { name, value } = e.target;

    dispatch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Select name='subject' onChange={selectOptionHandler} value={value}>
      <option value='none'>یک موضوع را انتخاب کنید</option>
      <option value='displayError'>خطا در نمایش</option>
      <option value='spellingError'>خطا در املا</option>
      <option value='codingError'>خطا در کد نویسی</option>
      <option value='FPSError'>FPS کندی سامانه</option>
      <option value='disrespect'>بی احترامی</option>
    </Select>
  );
}) 


export default function ReportForm({ setReports }) {
  const { state } = useLocation();
  const { Request, HTTP_METHOD } = useRequest();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    subject: 'none',
    url: state?.href ? `https://rgb.irpsc.com/${state?.href}` : 'https://rgb.irpsc.com/metaverse/report',
  });

  console.log(formData);
  const [errors, setErrors] = useState([]);
  const [files, setFiles] = useState([]);

  const onSubmit = () => {
    const errors = [];

    if(formData.title.length <= 0) {
      errors.push('فیلد عنوان خالی است لطفا آنرا پر کنید.')

    }
    
    if(formData.subject === 'none') {
      errors.push('لطفا موضوع گزارش خود را وارد کنید.')

    }
    
    if(formData.content.replace(/<[^>]*>?/gm, '') <= 50) {
      errors.push('متن پیام شما باید بیش از 50 کارکتر داشته باشد.')

    }
    
    setErrors(errors);

    if(files.length > 0) {
      const filesData = new FormData()
      filesData.append('file', new Blob([files[0]], { type: files[0].type }), files[0].name || 'File')
      const attachment = filesData.get('file');

      if(!errors[0]) {
        Request('reports', HTTP_METHOD.POST, {...formData, attachment: attachment}, {"Content-Type": "multipart/form-data"}).then((response) => {
          setReports((prevState) => [...prevState, response.data.data]);
          setFormData({
            title: '',
            content: '',
            subject: 'none',
            url: 'https://rgb.irpsc.com/metaverse/report',
          });
          setFiles([]);
        }, []);
      }
    } else {
      if(!errors[0]) {
        Request('reports', HTTP_METHOD.POST, formData).then((response) => {
          setReports((prevState) => [...prevState, response.data.data]);
          setFormData({
            title: '',
            content: '',
            subject: 'none',
            url: 'https://rgb.irpsc.com/metaverse/report',
          });
        }, []);
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <SelectOption
        dispatch={setFormData}
        value={formData.subject}
      />
      <br />
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

      
      <ErrorMessage errors={errors} maxList={1}/>
    </Form>
  );
}

