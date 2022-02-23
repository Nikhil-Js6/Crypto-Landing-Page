import React from 'react'

const OfferTab = ({src, title, desc}) => {
  return (
        <div className='offerTab'>
            <img className='offerImg' src={`/img/${src}.svg`} alt=''/>
            <div className='offerInfo'>
                <span className='offerTitle'>{title}</span>
                <span className='offerDesc'>{desc}</span>
            </div>
        </div>
  )
}

export default OfferTab