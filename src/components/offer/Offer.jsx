import OfferTab from '../offertabs/OfferTab';
import './offer.scss';

const Offer = () => {
    return (
        <div className='offerWrapper'> 
            <img className='offersWave' src='/img/wave7.png' alt=''/>
            <span className='offerSpan'>What we offer</span>
            <h1 className='offerHeading'>Investing at your <span>fingertips</span></h1>
            <div className='offers'>
                <div className='offerLeft'>
                    <OfferTab
                        src='fees'
                        title='Low annual fees'
                        desc='Our low annual fees mean you can invest more of your money and reach your financial goals.'
                    />
                    <OfferTab
                        src='transparency'
                        title='Full transparency'
                        desc={`We'll tell you what you're paying in pounds and pence. No more confusing financial jargon or mental maths.`}
                    />
                </div>
                <div className='offerCentre'>
                    <img className='offerPhone' src='/img/phone.png' alt=''/>
                </div>
                <div className='offerRight'>
                    <OfferTab
                        src='access'
                        title='24/7 access'
                        desc='Track your investment performance in our app whenever and wherever you are.'
                    />
                    <OfferTab
                        src='world'
                        title='Diversified portfolio'
                        desc='Minimise your investment risk with a globally diversified investment strategy.'
                    />
                </div>
            </div>
            <button className='offerButton'>Start Investing Now</button>
            <img className='offersWaveBottom' src='/img/wave3.png' alt=''/>
        </div>
    )
}

export default Offer
