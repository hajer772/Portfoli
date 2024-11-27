import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>
        Hager
        </div>
        <Toggle/>
      </div>
      <div className='n-right'>
        <div className='n-list'>
            <ul style={{ listStyleType:'none' }}>
                <Link spy={true} smooth={true} to='#'activeClass='activeClass'>
                <li>Home</li>
                </Link>

                <Link spy={true} smooth={true} to='Services' activeClass='activeClass'>
                <li>Services</li>
                </Link>
                
                <Link spy={true} smooth={true} to='Experience' activeClass='activeClass'>
                <li>Experience</li>
                </Link>

                <Link spy={true} smooth={true} to='Portfolio' activeClass='activeClass'>
                <li>Portfolio</li>
                </Link>

            </ul>
           
        </div>
        <button className="button n-button">
                Contact
            </button>
      </div>
    </div>
  )
}

export default Navbar
