import { memo } from 'react';
import shortid from 'shortid';
import styled from 'styled-components'

const Container = styled.div`
    color: #707070;
    font-size: 1.5rem;
    margin-right: 16px;
`;

const Label = styled.label`
    color: #707070;
    font-size: 1.5rem;
`;

const Input = styled.input`
    -webkit-transform: scale(2, 2);
`;

function CheckBox({value ,onClickHandler}) {
    const id = shortid.generate();
    
    return (
        <Container className='mt-4'>
            <Label htmlhtmlFor={id}>مرا به خاطر بسپار
                <Input className='ms-3' type='checkbox' id={id} value={value} onClick={() => onClickHandler(!value)}/>
            </Label>
        </Container>
    )
}

export default memo(CheckBox);