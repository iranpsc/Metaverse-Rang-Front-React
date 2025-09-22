import { useEffect } from 'react'
import styled from 'styled-components';

const Icon = styled.img`
    position: absolute;
    z-index: 99999;
    width: 24px;
    height: 24px;
`;

const Container = styled.a`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    cursor: pointer;
    margin: 0px !important;
`


export default function LeafletIcon({ source, position, style, onClick, alt = '' }) {
    useEffect(() => {
        if(!source) {
            throw Error('You did not use the source !');
        }
    }, [source]);

    return (
        <div className='leaflet-top leaflet-left' style={{...style}}>
            <div className='leaflet-bar leaflet-control'>
                <Container className='leaflet-control'>
                    <Icon source={source} src={source} alt={alt} style={position} onClick={() => onClick()} />
                </Container>
            </div>
        </div>
    )
}