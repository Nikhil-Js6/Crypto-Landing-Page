import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import './footer.scss';

const AppFooter = () => {
  return (
    <div className='footer'>
        <img src='/img/wave1.png' className='waveImg' alt='' />
        <div className='footerTop'>
            <div className='footerLeft'>
                <div className='contacts'>
                    <span className='links'>
                        <span className='linkSpan'>
                            <span className='linkHeader'>Contacts</span>
                            <a href='tel:7428423872' className='linkItem'>0-123-987-776</a>
                            <a href='mailto: imsystemanonymous@gmail.com' className='linkItem'>contact@crypt-inv.mail</a>
                        </span>
                        <span className='linkSpan'>
                            <span className='linkHeader'>Enquiry</span>
                            <a href='tel:7428423872'className='linkItem'>679-8668-8686</a>
                            <a href='mailto: imsystemanonymous@gmail.com' className='linkItem'>support@crypt-inv.mail</a>
                        </span>
                        <span className='linkSpan'>
                            <span className='linkHeader'>Address</span>
                            <span className='linkItem'>2nd floor - Vox Studios1–45 London</span>
                        </span>
                    </span>
                </div>
                <div className='footerInfo'>
                    <div className='footerLinks'>
                        <span className='links'>
                            <span className='linkHeader'>Products</span>
                            <span className='linkItem'>Crypt.Inv Web</span>
                            <span className='linkItem'>Crypt.Inv App</span>
                            <span className='linkItem'>Developer</span>
                            <span className='linkItem'>API's</span>
                            <span className='linkItem'>SDK</span>
                        </span>
                        <span className='links'>
                            <span className='linkHeader'>Company</span>
                            <span className='linkItem'>About Us</span>
                            <span className='linkItem'>Contact Us</span>
                            <span className='linkItem'>Plans</span>
                            <span className='linkItem'>Privacy Policy</span>
                            <span className='linkItem' id='imp'>Terms & Conditions</span>
                            <span className='linkItem'>Vision</span>
                            <span className='linkItem'>Markets</span>
                        </span>
                        <span className='links'>
                            <span className='linkHeader'>Tools</span>
                            <span className='linkItem'>Brokerage Calculator</span>
                            <span className='linkItem'>Margin Calculator</span>
                            <span className='linkItem'>SIP Calculator</span>
                            <span className='linkItem'>Investment Calculator</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='footerLogo'>
                <span className='logo'>Crypt<span>.Inv</span></span>
                <span className='appSocial'>
                    <span className='iconsWrapper'>
                        <Facebook className='icon1'/>
                    </span>
                    <span className='iconsWrapper'>
                        <Instagram className='icon2'/>
                    </span>
                    <span className='iconsWrapper'>
                        <LinkedIn className='icon3'/>
                    </span>
                    <span className='iconsWrapper'>
                        <Twitter className='icon4'/>
                    </span>                    
                </span>
                <span className='appLink'>
                    <img src='/img/app-store.png' alt='' className='storeImg' />
                    <img src='/img/play-store.png' alt='' className='storeImg' />
                </span>
            </div>
        </div>
        <span className='address'>
            Crypt.Inv is a trading style of OpenMoney Adviser Services Ltd. OpenMoney Adviser Services Ltd is registered in England & Wales under Company Registration Number 09407280; 
            its registered address is WeWork St. Peter’s Square, 1 St. Peter’s Square, Manchester, M2 3DE. 
            OpenMoney Adviser Services Ltd is authorised and regulated by the Financial Conduct Authority. Our FCA number for evestor is 676331.
        </span>
        <span className='options'>
            <span className='option'>SEBI</span>
            <span className='option'>Guidlines</span>
            <span className='option'>Procedures</span>
            <span className='option'>Applications</span>
            <span className='option'>Disclosure</span>
            <span className='option'>User Guide</span>
        </span>
        <span className='warning'>
            As with all investing, your capital is at risk.
            The value of your portfolio with Crypt.Inv can go down as well as
            up and you may get back less than you invest.
        </span>
    </div>
  )
}

export default AppFooter