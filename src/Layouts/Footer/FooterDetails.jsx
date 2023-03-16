import FooterClock from './FooterClock';
import FooterPing from './FooterPing';

export default function FooterDetails() {
    return (
        <section className='footer-section footer-section-three'>
            <FooterPing/>
            <FooterClock />
        </section>
    );
}