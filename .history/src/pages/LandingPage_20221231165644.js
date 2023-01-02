import React from 'react'
import landingPageImage from '../assests/TodoLogo.svg'

function LandingPage() {
  return (
		<div className='container'>
            <div className='wrap'>
            <h1>Task Management System</h1>
                <img className='landing-page-image' src={landingPageImage}/>
                <button className='button'>
                    START
                </button>
            </div>
		</div>
	)
}

export default LandingPage
