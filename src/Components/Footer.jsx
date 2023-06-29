import React from 'react'
import myImage from '../Assets/Images/DH.png'
import fbIcon from '../Assets/Images/ico-facebook.png'
import igIcon from '../Assets/Images/ico-instagram.png'
import tkIcon from '../Assets/Images/ico-tiktok.png'
import wpIcon from '../Assets/Images/ico-whatsapp.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Powered by</p>
        <img src={myImage} alt='DH-logo' />
        <div>
          <a target='blank' href="https://www.digitalhouse.com/ar"><img className="icon"src={fbIcon} alt="fb-icon" /></a>
          <a target='blank' href="https://www.digitalhouse.com/ar"><img className="icon"src={igIcon} alt="ig-icon" /></a>
          <a target='blank' href="https://www.digitalhouse.com/ar"><img className="icon"src={tkIcon} alt="tiktok-icon" /></a>
          <a target='blank' href="https://www.digitalhouse.com/ar"><img className="icon"src={wpIcon} alt="whatsapp-icon" /></a>
        </div>

    </footer>
  )
}

export default Footer
