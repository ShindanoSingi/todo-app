import React from 'react'
import landingPageImage from '../assests/TodoLogo.svg'

function LandingPage() {
  return (
		<div className='container'>
            <div className='wrap'>
                <img className='landing-page-image' src={landingPageImage}/>
                <button className='button'>
                    START
                </button>
            </div>
		</div>
	)
}

export default LandingPage
