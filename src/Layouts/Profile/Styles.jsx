import styled from 'styled-components';

export const UserProfile = styled.section`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 500;
    width: 160px;
    height: 160px;
    margin-top: 16px;
    margin-right: 16px;
    border: 3px solid #fff;
    border-radius: 8px;
    overflow: hidden;
    cursor: auto;
`;

export const PlayerIcons = styled.section`
    position: absolute;
    top: 0;
    right: 170px;
    z-index: 500;
    width: 40px;
    height: 160px;
    margin-top: 16px;
    margin-right: 16px;
    overflow: hidden;
    cursor: auto;
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const ProfileId = styled.div`
    position: absolute;
    width: 70%;
    top: 0;
    height: 24px;
    background-color: #1212;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;
    font-family: iransans;
    font-weight: bold;
    border-bottom: 3px solid #fff;
    background-color: #fff;
    z-index: 502;
    & p {
        font-size: 14px;
        color: #2563Eb;
    }
`;

export const ProfileLevel = styled.div`
    position: absolute;
    width: 30%;
    top: 0;
    right: 0;
    font-family: iransans;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-left: 3px solid #fff;;
    border-bottom: 3px solid #fff;
    border-radius: 0px 0px 0px 8px;
    background-color: #ccc;
    z-index: 502;
    & p {
        font-size: 24px;
        color: red;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 0px;
    top: 45px;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    /* & img {
        margin-top: 4px;
    } */
`;

export const BorderIcon = styled.div`
    border: 3px solid #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;