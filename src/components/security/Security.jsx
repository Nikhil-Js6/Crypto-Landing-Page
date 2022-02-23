import { ArrowForward, CheckCircle } from '@mui/icons-material';
import './security.scss';

const Security = () => {
  return (
    <div className='security'>
        <img src='/img/wave8.png' className='securityWave' alt=''/>
        <div className='left'>
            <span className='securitySpan'>Security and protection</span>
            <h1 className='securityHeading'>For your peace of <span>mind</span></h1>
            <span className='securityFeatures'>
                <CheckCircle className='checkIcon'/>
                <span className='securityDesc'>We're authorised and regulated by the Financial Conduct Authority (FCA)</span>
            </span>
            <span className='securityFeatures'>
                <CheckCircle className='checkIcon'/>
                <span className='securityDesc'>We're authorised and regulated by the Financial Conduct Authority (FCA)</span>
            </span>
            <span className='securityFeatures'>
                <CheckCircle className='checkIcon'/>
                <span className='securityDesc'>We're authorised and regulated by the Financial Conduct Authority (FCA)</span>
            </span>
            <button>Learn More<ArrowForward style={{fontSize: '20px', marginLeft: '8px'}}/></button>
        </div>
        <div className='right'>
            <img src='/img/security.svg' alt=''/>
        </div>
    </div>
  )
}

export default Security