import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import { GitHub } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} style={{ width:'100%' }}/>
        <div className="f-content">
            <span>Hagerashry0@gmail.com - Hagermahmoudashry@gmail.com</span>
            <div className="f-icons">
                <Instagram style={{ color:'white', fontSize:'3rem' }} />
                <Facebook style={{ color:'white', fontSize:'3rem' }}/>
                <GitHub style={{ color:'white', fontSize:'3rem' }}/>
                <Twitter style={{ color:'white', fontSize:'3rem' }}/>
                <LinkedIn style={{ color:'white', fontSize:'3rem' }}/>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
