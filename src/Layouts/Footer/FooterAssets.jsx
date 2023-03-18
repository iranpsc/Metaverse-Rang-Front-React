import { useContext } from 'react';

import FooterAssetsBox from './FooterAssetsBox.jsx';

import ImagePSC from '../../Assets/images/coin-psc.png';
import ImageIRR from '../../Assets/images/coin-irr.png';
import ImageBlue from '../../Assets/images/blue.png';
import ImageRed from '../../Assets/images/red.png';
import ImageYellow from '../../Assets/images/yellow.png';
import ImageSatisfaction from '../../Assets/images/satisfaction.png';
import { WalletContext } from '../../Services/Reducers/WalletContext.js';


export default function FooterAssets() {
    const [wallet, ] = useContext(WalletContext);
    
    return (
        <section className='footer-section footer-section-one'>
            <FooterAssetsBox
                value={wallet?.psc}
                image={ImagePSC}
                alt='PSC'
                borderColor='purple'
                TitleToltip={"ارز PSC"}
                ContentToltip={"ارز داخلی متارنگ به منظور معامله های داخلی "}
            />

            <FooterAssetsBox
                value={wallet?.irr}
                image={ImageIRR}
                alt='IRR'
                borderColor='gold'
                TitleToltip={"ارز ریال "}
                ContentToltip={"دارایی ارزی شما با قابلیت معامله ریالی و استخراج از دنیای موازی متارنگ"}
            />

            <FooterAssetsBox
                value={wallet?.blue}
                image={ImageBlue}
                alt='blue-color'
                borderColor='blue'
                TitleToltip={"رنگ آبی"}
                ContentToltip={"یک واحد قابل خرید از متارنگ به منظور تهیه VOD های آزاد شده آموزشی"}
            />

            <FooterAssetsBox
                value={wallet?.red}
                image={ImageRed}
                alt='red-color'
                borderColor='red'
                TitleToltip={"رنگ قرمز "}
                ContentToltip={"یک واحد قابل خرید از متارنگ به منظور تهیه VOD های آزاد شده تجاری"}
            />

            <FooterAssetsBox
                value={wallet?.yellow}
                image={ImageYellow}
                alt='yellow-color'
                borderColor='yellow'
                TitleToltip={"رنگ زرد"}
                ContentToltip={"یک واحد قابل خرید از متارنگ به منظور تهیه VOD های آزاد شده مسکونی"}
            />

            <FooterAssetsBox
                value={wallet?.satisfaction}
                image={ImageSatisfaction}
                alt='satisfaction'
                borderColor='white'
                TitleToltip={"رضایت"}
                ContentToltip={"یک واحد ارزشمند غیر قابل فروش با قابلیت کرایه"}
            />
        </section>
    );
}