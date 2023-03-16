import React, { useRef } from 'react'
import { BorderIcon, IconContainer, PlayerIcons } from '../Profile/Styles';
import ScrollContainer from 'react-indiana-drag-scroll';

// player images
import FollowerImage from '../../Assets/images/follower.png';
import DynastyImage from '../../Assets/images/dynasty.png';
import UnityImage from '../../Assets/images/unity.png';
import PlayerList from './PlayerList';
import shortid from 'shortid';


export default function Player() {
    const horizontalSlide = useRef();

    const horizontalSlideHandler = () => {
        if(horizontalSlide.current){
            const classList = horizontalSlide.current.container.current.classList;
            classList.contains('close-player') ? classList.remove('close-player') : classList.add('close-player');
        }
    }

    return (
        <>
            <PlayerIcons>
                <IconContainer style={{ height: '100%', top: 0 }}>
                    <BorderIcon onClick={horizontalSlideHandler}>
                        <img width={32} src={FollowerImage} alt='' className='cursor-pointer bg-light'/>
                    </BorderIcon>

                    <BorderIcon>
                        <img width={32} src={DynastyImage} alt='' className='cursor-pointer object-disabled'/>
                    </BorderIcon>

                    <BorderIcon>
                        <img width={32} src={UnityImage} alt='' className='cursor-pointer object-disabled'/>
                    </BorderIcon>
                </IconContainer>
            </PlayerIcons>

            <ScrollContainer ref={horizontalSlide} horizontal={true} vertical={false} className='ScrollContainer'  stopPropagation={true}>
                <PlayerList />
            </ScrollContainer>
        </>
    )
}
