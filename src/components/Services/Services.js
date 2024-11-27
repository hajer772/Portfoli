import React from 'react'
import './Services.css'
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './Forms- Exercises.pdf'

import {themeContext} from '../../Context'
import { useContext } from 'react';

import { motion } from 'framer-motion'

const Services = () => {

  const transition={duration:2, type:'spring'}

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (

    <div className='services' id="Services">
      <div className="awesome">

            <span style={{ color: darkMode? 'white':'' 
     }}>My Awesome</span>
            <span>Services</span>
            <span style={{ color: darkMode? 'white':'' 
     }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias fugit voluptas, <br/>sunt veritatis aperiam!</span>
            <a href={Resume} download> 
            <button className="s-button button">Download CV</button>
            </a>
            <div className='blur s-blur1' style={{ background:"#ABF1FF94" }}></div>

        </div>
      

      <div className="cards">
        <motion.div 
           initial={{  top:'0rem' ,left:'38rem' }}
           whileInView={{ left:'28rem' }}
           transition={transition}
        style={{ left:"28rem",top:'0rem' }}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
        </motion.div>
        <motion.div 
           initial={{  top:'6rem' ,left:'-5rem' }}
           whileInView={{ left:'5rem' }}
           transition={transition}
            style={{ left:"5rem", top:'6rem' }}>
            <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={"HTML, CSS, JavaScript, React JS, PHP, SQL, Laravel"}
            />
        </motion.div>
        <motion.div 
           initial={{  top:'19rem' ,left:'36rem' }}
           whileInView={{ left:'26rem' }}
           transition={transition}
           style={{ left:"26rem", top:'19rem' }}>
            <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={"lorem Ipsum is true and simply verifies that it is true and accurate enough for human..."}
            />
        </motion.div>
        <div className='blur s-blur2' style={{ background:"var(--purple)" }}></div>


      </div>
    </div>
  )
}

export default Services
