import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Submit from '../../Components/Buttons/Submit';
import Form from '../../Components/Form';
import Modal from '../../Components/Modal';
import Toggle from '../../Components/Toggle';
import useRequest from '../../Services/Hooks/useRequest';
import useTabs from '../../Services/Hooks/useTabs';
import AccountSetting from './Tabs/AccountSetting';

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

const Section = styled.div``;

function GeneralSettings() {
  const { Request, HTTP_METHOD } = useRequest();

  const [generalSettings, setGeneralSettings] = useState({
    announcements_sms: 0,
    announcements_email: 0,
    reports_sms: 0,
    reports_email: 0,
    login_verification_sms: 0,
    login_verification_email: 0,
    transactions_sms: 0,
    transactions_email: 0,
    trades_sms: 0,
    trades_email: 0,
  });

  useEffect(() => {
    Request('general-settings').then(response => {
      setGeneralSettings({...response.data.data});
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = () => {
    const data = Object.fromEntries(Object.entries(generalSettings).filter(([key]) => !key.includes('id')));
    Request(`general-settings/${generalSettings.id}`, HTTP_METHOD.PUT, data);
  }

  return (
    <Form onSubmit={onSubmit} options={{ style: { height: '100%' } }}>
      <Container>
        <Section>
          <Toggle
            text='ارسال پیامک اطلاعیه های متاورس'
            onChange={setGeneralSettings}
            value={generalSettings.announcements_sms}
            name='announcements_sms'
          />

          <Toggle
            text='ارسال ایمیل اطلاعیه های متاورس'
            onChange={setGeneralSettings}
            value={generalSettings.announcements_email}
            name='announcements_email'
          />

          <Toggle
            text='ارسال پیامک تذکر ارسال شده'
            onChange={setGeneralSettings}
            value={generalSettings.reports_sms}
            name='reports_sms'
          />

          <Toggle
            text='ارسال ایمیل تذکر ارسال شده'
            onChange={setGeneralSettings}
            value={generalSettings.reports_email}
            name='reports_email'
          />

          <Toggle
            text='ارسال ایمیل تایید برای ورود به متاورس'
            onChange={setGeneralSettings}
            value={generalSettings.login_verification_email}
            name='login_verification_email'
          />
        </Section>

        <Section>
          <Toggle
            text='ارسال پیامک تصویه حساب تراکنش ها'
            onChange={setGeneralSettings}
            value={generalSettings.transactions_sms}
            name='transactions_sms'
          />

          <Toggle
            text='ارسال ایمیل تصویه حساب تراکنش ها'
            onChange={setGeneralSettings}
            value={generalSettings.transactions_email}
            name='transactions_email'
          />

          <Toggle
            text='ارسال پیامک تایید خرید'
            onChange={setGeneralSettings}
            value={generalSettings.trades_sms}
            name='trades_sms'
          />

          <Toggle
            text='ارسال ایمیل تایید خرید'
            onChange={setGeneralSettings}
            value={generalSettings.trades_email}
            name='trades_email'
          />

          <Toggle
            text='ارسال پیامک تایید برای ورود به حساب'
            onChange={setGeneralSettings}
            value={generalSettings.login_verification_sms}
            name='login_verification_sms'
          />
        </Section>
      </Container>

      <Submit
        text='بروز رسانی'
        type='primary'
        options={{
          style: {
            marginBottom: 32,
            width: 735,
          },
        }}
      />
    </Form>
  );
}

export default function Settings() {
  const tabs = [
    { title: 'تنظیمات عمومی', content: <GeneralSettings /> },
    { title: 'حساب کاربری', content: <AccountSetting /> }
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal type='modal-section-md' title='تنظیمات'>
      {TabPanel}
    </Modal>
  );
}
