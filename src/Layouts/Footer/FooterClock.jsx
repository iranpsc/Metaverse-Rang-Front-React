import { useEffect, useState } from 'react';
import FooterTextBox from './FooterTextBox';

export default function FooterClock() {
    const [clock, setClock] = useState('12:00:00');

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date().toLocaleTimeString().split(' ')[0]);
        }, 1000)
        
        return () => clearInterval(interval);
    }, []);

    return (
        <FooterTextBox Text={clock} className='w-100-px'/>
    )
}