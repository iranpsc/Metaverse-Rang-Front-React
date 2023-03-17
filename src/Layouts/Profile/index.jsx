import React, { useEffect, useState } from 'react'

import useAuth from '../../Services/Hooks/useAuth';

import {
    IconContainer,
    ProfileId,
    ProfileImage,
    ProfileLevel,
    UserProfile
} from './Styles';

// user images
import AnonymousImage from '../../Assets/images/anonymous.png';

import SanadImage from '../../Assets/images/sanad.png';
import ChatImage from '../../Assets/images/chat.png';
import SettingImage from '../../Assets/images/setting.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LevelProgress = styled.div`
    height: 100%;
    background: red;
`;


export default function Profile() {
    const { getUser } = useAuth();
    const [user, setUser] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        setUser(getUser());
    }, [getUser])

    return (
        <>
            <UserProfile className='white-box-shadow'>
                <ProfileImage src={user?.image ? user?.image : AnonymousImage} onClick={() => navigate('/metaverse/profile')} />

                <ProfileId className='white-box-shadow'>
                    <LevelProgress style={{ width: `${user?.score_percentage_to_next_level ? user?.score_percentage_to_next_level : 0}%` }}/>
                    <p>{ user?.code }</p>
                </ProfileId>

                <ProfileLevel className='white-box-shadow'>
                    <p>{ user?.level?.slug }</p>
                </ProfileLevel>

                <IconContainer>
                    <img width={32} src={SanadImage} alt='' className='cursor-pointer' onClick={() => navigate('/metaverse/sanad')}/>
                    <img width={32} src={ChatImage} alt='' className='cursor-pointer object-disabled'/>
                    <img width={32} src={SettingImage} alt='' className='cursor-pointer' onClick={() => navigate('/metaverse/settings')}/>
                </IconContainer>
            </UserProfile>
        </>
    )
}
