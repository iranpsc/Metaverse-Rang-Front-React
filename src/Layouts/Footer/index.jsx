// Components
import FooterAssets from './FooterAssets';
import FooterButtons from './FooterButtons';
import FooterWarning from './FooterWarning';
import FooterDetails from './FooterDetails';

// css
import './Footer.css';


export default function Footer() {
    return (
        <footer className='footer'>
            <FooterAssets />
            <FooterButtons />
            <FooterDetails />
            <FooterWarning />
        </footer>
    );
}