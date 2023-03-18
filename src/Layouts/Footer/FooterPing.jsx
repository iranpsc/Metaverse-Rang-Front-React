import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FooterTextBox from './FooterTextBox';

export default function FooterPing() {
    const [ping, setPing] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            try {
                const xhr = new XMLHttpRequest();
                
                let startTime, endTime;

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        endTime = new Date().getTime();
                        const pingTime = endTime - startTime;
                        setPing(pingTime);
                    }
                };

                xhr.open('GET', `https://rgb.irpsc.com/metaverse`, true);

                startTime = new Date().getTime();
                
                xhr.send();
            } catch {}
        }, 3000)

        return () => clearInterval(interval);
    });

  return (
    <FooterTextBox Text={`${ping}ms`} className='me-2'/>
  );
}
