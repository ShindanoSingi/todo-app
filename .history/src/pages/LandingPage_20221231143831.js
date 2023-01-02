import React from 'react'
import landingPageImage from '../assests/TodoLogo.svg'

function LandingPage() {
  return (
		<div className='container'>
            <img className='landing-page-image' src={landingPageImage}/>
            <button className='button'>
                START
            </button>
		</div>
	)
}

export default LandingPage
