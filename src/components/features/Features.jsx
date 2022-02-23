import Card from '../card/Card';
import './features.scss';

const Features = () => {
    return (
        <div className='features'>
            <img src='/img/wave9.png' className='featuresWave' alt=''/>
            <div className='featTop'>
                <h1 className='featuresHeading'>Why Work with <span>Crypt<span>.Inv</span></span></h1>
                <span className='featuresDesc'>
                    Whether you want to launch a investment proposition 
                    from existing account or build a customised hybrid digital
                    wealth management solution, Crypto.Inv is the place to start.
                </span>
                <button className='featuresButton'>Start Now</button>
            </div>
            <div className='featBottom'>
                <Card 
                    title='We understand from experience'
                    desc='From an AI-driven investment platform with Exo Investing, 
                          to a hybrid advisory platform for Edmond de Rothschild, 
                          we understand your project, the potential bumps in 
                          the road and how to get past them.'
                />
                <Card 
                    title='Technology that gets you there faster'
                    desc='The Platform has pre-integrated third parties for core banking systems, 
                          existing configurations for tax wrappers and local regulations, and
                          production-ready reference front-end experiences for web and mobile 
                          applications to speed up time to market.'
                />
                <Card 
                    title='A team by your side'
                    desc='Our people are experts in technology, investment management and 
                          operations and will work with your in-house teams from project 
                          inception to delivery and beyond, wherever you are in the world.'
                />
            </div>
        </div>
    )
}

export default Features
