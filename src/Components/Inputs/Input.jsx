import { memo, useState } from 'react';
import styled from 'styled-components';


const Label = styled.label`
    color: #707070!important;
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: transparent !important;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
`;

const InputField = styled.input`
    padding: 8px 16px;
    width: 100%;
    margin-bottom: 32px;
    font-size: 1.4rem !important;
    font-family: iransans;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance:textfield;
    }

    &:not([value='']) {
        direction: ltr !important;
    }

    &:not([value='']) + i {
        display: block;
    }

    @media screen and (max-height: 840px)  {
        font-weight: 700;
        margin-bottom: 16px;
        padding: 8px 16px;
    }
`;

const Container = styled.div`
    position: relative;
    width: 100%;

    & i {
        color: #555;
        position: absolute;
        right: 16px;
        top: 22%;
        font-size: 20px;
        display: none;
    }

    & i:hover {
        cursor: pointer;
    }
    
    ${InputField}[value='']:focus + ${Label} {
        top: -26px;
        right: 16px;
        background: white;
        padding-right: 8px;
        padding-left: 8px;
        font-size: 16px;
    }

    ${InputField}:not([value='']) + ${Label} {
        top: -26px;
        right: 16px;
        background: white;
        padding-right: 8px;
        padding-left: 8px;
        font-size: 16px;
    }
`;

function Input({
    placeholder,
    className,
    dispatch,
    value,
    maxLength,
    style,
    name,
    options,
    type = 'text',
    nextSibling = false,
    floatLabel = false
}) {
    const [show, setShow] = useState(false);
    const onChangeHandler = (e) => {
        if(dispatch) {
            if(typeof maxLength === 'number') {
                if(value.length <= maxLength) {
                    value = e.target.value.substring(0, maxLength)
                    e.target.value = value;
                }
            }
            
            dispatch((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));

            if(nextSibling) {
                e.target.nextElementSibling.focus()
            }
        }
    }

    return (
        floatLabel ? (
        <Container>
            <InputField
                name={name}
                style={{...style}}
                type={type}
                className={className}
                value={value}
                onChange={(e) => {e.preventDefault();onChangeHandler(e)}}
                {...options}
            />
            
            <Label>{placeholder}</Label>
        </Container>
        ) : (
            <Container>
                <InputField
                    name={name}
                    style={{...style}}
                    type={type === "password" ? (show ? 'text' : 'password') : type}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {e.preventDefault();onChangeHandler(e)}}
                    {...options}
                />

                {type === "password" && 
                    (show ?
                    <i className='fa-solid fa-eye-slash' onClick={() => setShow(false)}></i>
                    :
                    <i className='fa-solid fa-eye' onClick={() => setShow(true)}></i>)
                }
                
            </Container>
        )
    )
}
// fa-solid fa-eye
// fa-solid fa-eye-slash
const areEqual = (prevProps, nextProps) => {
    return prevProps.value === nextProps.value && prevProps?.options?.disabled === nextProps?.options?.disabled;
}

export default memo(Input, areEqual)
