import styled from 'styled-components';

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

export default function OtpInput({
    className,
    dispatch,
    value,
    maxLength,
    style,
    name,
    options,
    type = 'text',
    nextSibling = false,
}) {
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
        <InputField
        name={name}
        style={{...style}}
        type={type}
        className={className}
        value={value}
        onChange={(e) => {e.preventDefault();onChangeHandler(e)}}
        {...options}
        />
    )    
}

