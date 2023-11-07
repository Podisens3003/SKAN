import logoW from '../../images/logoWhite.svg';
import { Logo } from "./Header";

function Footer(){
    return (
        <div className='footer'>
            <Logo img={logoW} alt={'logotype'}/>
            <address className='company-info main-text-style'>
                г. Москва, Цветной б-р, 40 
                <br/>
                +7 495 771 21 11 
                <br/>
                info@skan.ru
                <br/><br/>
                <span className='copyrihgt'>Copyright. 2022</span>
            </address>
        </div>
    )
}

export default Footer