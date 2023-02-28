import React from 'react'

// style 
import './thankyou.css'

// image
import finishImage from '../../assets/images/icon-thank-you.svg'


export default function ThankyouSection() {

    
  return (
      <section className='thankyou'>
          <div className="thankyou-wrapper">
              <div className="submit-success-icon">
                  <img src={finishImage} alt="finish" />
              </div>
              <h1 className='main-title'>Thank you!</h1>
              <p className='main-desc'>Thanks for confirming your subscription! We hope you have fun using our plateform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
          </div>
      </section>
  )
}
