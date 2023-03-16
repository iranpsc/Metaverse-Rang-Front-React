import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FloatingModal from '../../Components/FloatingModal';
import useRequest from '../../Services/Hooks/useRequest';

import SeenImage from '../../Assets/images/seen.png';
import BellGif from '../../Assets/gif/bell.gif';
import { useNavigate } from 'react-router-dom';


const Notification = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding: 8px;
  position: relative;

  &:nth-child(even) {
    background-color: #e9ecef;
  }
`;

const Information = styled.div`
  text-align: right;

  & > p {
    margin-top: 8px;
  }

  & > div {
    position: relative;
  }
`;

const DateContainer = styled.p`
  position: absolute;
  top: 8px;
  left: 14%;
  color: #666;
  font-size: 14px;
`;

const Gif = styled.img`
  width: 350px;
`
const AnimateContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    text-align: right;
    direction: rtl;
    margin-top: -32px;
    font-weight: bold;
  }
`

const Pages = {
  tickets: '/metaverse/sanad'
}


export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const { Request } = useRequest();

  const Navigate = useNavigate();

  useEffect(() => {
    Request('notifications').then(response => {
      setNotifications(response.data.data);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ReadClickHandler = (id) => {
    Request(`notifications/${id}`).then(() => {
      setNotifications(notifications.filter(notification => 
        notification.id !== id
      ))
    })
  }

  return (
    <FloatingModal title={"چالش پاسخ به سوالات متارنگ"}>
        {notifications?.map(notification => (
          <Notification key={notification.id}>
            <img
              style={{ marginLeft: 16, borderRadius: 100, height: '75%' }}
              src={notification?.data?.["sender-image"]}
              width={60}
              alt={notification?.data?.["sender-name"]}
            />

            <DateContainer>{
              notification?.date
            }</DateContainer>
            
            <Information>
              <h4 className='link' onClick={() => Navigate(Pages[notification.data["related-to"]])}>
                {notification?.data?.["sender-name"]}
              </h4>

              <p className='text-information rtl'>
                {notification?.data?.["message"]}
              </p>
            </Information>

            <img
              src={SeenImage}
              width={40}
              alt='seen'
              className='cursor-pointer'
              onClick={() => ReadClickHandler(notification.id)}
            />
          </Notification>
        ))}

        {notifications?.length === 0 &&
          <AnimateContainer>
            <Gif src={BellGif} alt=''/>
            <p>پیامی موجود نیست !</p>
          </AnimateContainer>
        }
    </FloatingModal>
  )
}
