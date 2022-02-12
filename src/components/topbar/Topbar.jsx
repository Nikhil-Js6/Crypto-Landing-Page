import { useState } from 'react';
import './topbar.scss';

const Topbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
  }

  return (
    <div className={isScrolled ? 'topbar scroll' : 'topbar'}>
        <div className='topLeft'>
            <span className='logo'>
                Crypt
                <span className='logoPart'>.Inv</span>
            </span>
        </div>
        <div className='topCentre'>
            <span className='topbarLink'>Why Us</span>
            <span className='topbarLink'>Services</span>
            <span className='topbarLink'>Pricing</span>
            <span className='topbarLink'>About Us</span>
            <span className='topbarLink'>Help & Support</span>
        </div>
        <div className='topRight'>
            <span className='topbarRightItem'>Login</span>
            <span className='topbarRightItem'>Sign Up</span>
        </div>
    </div>
  )
}

export default Topbar
