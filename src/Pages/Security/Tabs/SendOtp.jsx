import React, { useState } from 'react'

import useRequest from '../../../Services/Hooks/useRequest';

import Form from '../../../Components/Form'
import Input from '../../../Components/Inputs/Input';
import CounterInput from '../../../Components/Inputs/CounterInput';
import Submit from '../../../Components/Buttons/Submit';

// image
import IranImage from '../../../Assets/images/iran.png';


export default function SendOtp({ paginate }) {
  const [phone, setPhone] = useState(true);

  const [formData, setFormData] = useState({
    phone: '',
    time: 5,
  });

  const { Request, HTTP_METHOD } = useRequest();

  const onSendHandler = () => {
    if(phone) {
      Request('account/security', HTTP_METHOD.POST, {time: formData.time}).then(() => {
        paginate.setOptions({ nextPage: true, data: {time: formData.time} });
      }).catch(error => {
        if(error.response.status === 422) {
          setPhone(false);
        }
      })
    } else {
      Request('account/security', HTTP_METHOD.POST, formData).then(() => {
        paginate.setOptions({ nextPage: true, data: {time: formData.time} });
      })
    }
  };

  return (
    <Form onSubmit={onSendHandler}>
      {!phone &&
        <div className='account-security-section w-100 px-4'>
          <div htmlFor='pre-phone' className='me-3'>
            <img src={IranImage} className='pre-phone-logo' width='32' alt='iran-flag' />
            <input type='text' className='d-number-arrows w-100-px account-security-code-input ps-5 h-100' disabled value='98' />
          </div>
          <Input
            name='phone'
            type='number'
            className='w-100 mb-0'
            maxLength={11}
            placeholder='091XXXXXXXX'
            value={formData.phone}
            dispatch={setFormData}
          />
        </div>
      }
        <div className='account-security-section w-100 px-4 mt-4 mb-5'>
            <CounterInput name='time' text='دقیقه' dispatch={setFormData} value={formData} step={5} />
            <p className='text-information text-1 text-danger'>. مدت زمانی که میخواهید کیف پولتان خاموش بماند</p>
        </div>

        <Submit text='ادامه' type='primary' options={{ className: 'w-100' }} />
    </Form>
  )
}
