import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../../Components/Inputs/Input';
import Modal from '../../Components/Modal';
import Form from '../../Components/Form/index.jsx';
import useRequest from '../../Services/Hooks/useRequest';
import Submit from '../../Components/Buttons/Submit.jsx';

export default function Signup() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    referral: searchParams.get('referral'),
  });

  const [message, setMessage] = useState('');

  const { Request, HTTP_METHOD } = useRequest();
  const navigation = useNavigate();

  const onSubmitHandler = () => {
    Request('register', HTTP_METHOD.POST, formData)
      .then(() => {
        navigation('/metaverse/successful/signup');
      })
      .catch((error) => {
        if (error?.response?.status === 422) {
          setMessage(error?.response?.data?.message);
        }
    });
  };

  return (
    <Modal title='ثبت نام'>
      <Form onSubmit={onSubmitHandler}>
        <Input
          name='name'
          type='text'
          className='mt-5'
          placeholder='نام کاربری میتوان نام شرکت و یا برند باشد'
          value={formData.name}
          dispatch={setFormData}
        />

        <Input
          name='email'
          type='email'
          placeholder='name@example.com'
          value={formData.email}
          dispatch={setFormData}
        />

        <Input
          name='password'
          type='password'
          placeholder='********'
          value={formData.password}
          dispatch={setFormData}
        />

        {message && (
          <p className='w-100 text-right mb-4 text-danger'>{message}</p>
        )}

        <Submit text='ثبت نام' type='secondary' />

        <Link to='/metaverse/login' className='link text-2 mt-3 '>
          ثبت نام کرده ام' وارد شوید'
        </Link>
        
        <p className='text-information mt-4'>
          با کلیک بر روی دکمه ورود به سامانه موافقت میکنید
        </p>

        <a href='https://rgb.irpsc.com/ruls' className='link text-1 mt-2'>
          شرایط قرارداد خدمات
        </a>

        <p className='text-information mt-4'>
          سئوالی دارید یا میخواهید بیشتر بدانید؟
        </p>

        <a href='https://rgb.irpsc.com/' className='link text-1 mt-2 pb-2'>
          .از وبسایت ما دیدن کنید
        </a>
      </Form>
    </Modal>
  );
}
