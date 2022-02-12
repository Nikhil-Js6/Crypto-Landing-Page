import './featured.scss';
import Typical from 'react-typical';
import { ArrowForward } from '@mui/icons-material';

const Featured = () => {

  return (
    <div className='featured'>
      <div className='featLeft'>
          <h1 className='featHeading'>
            Invest in {' '} 
            <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  "Crypto",
                  1300,
                  "Today",
                  1300,
                  "The Future!",
                  1300,
                ]}
            />
         </h1>
         <button>Get Started<ArrowForward style={{fontSize: '20px', marginLeft: '8px'}}/></button>
      </div>
      <div className='featRight'>
          <img src='/img/home.svg' className='featImg' alt='' />
      </div>
    </div>
  )
}

export default Featured
