import React from 'react'
import './Intro.css'
import { GitHub } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
// import  GitHub  from '../../img/github.png'
// import  Instagram  from '../../img/instagram.png'
// import  LinkedIn  from '../../img/linkedin.png'
import  Vector1  from '../../img/Vector1.png'
import  Vector2  from '../../img/Vector2.png'
import  Girl  from '../../img/girl2.png'
import  Thumbup  from '../../img/thumbup.png'
import  Crown  from '../../img/crown.png'
import  Glassesimoji  from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

import {themeContext} from '../../Context'
import { useContext } from 'react';

import { motion } from 'framer-motion'


const Intro = () => {
  const transition={duration:2, type:'spring'}

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='intro' id='Intro'>
      <div className="i-left">
        <div className="i-name">

          <span style={{ color: darkMode? 'white':'' 
     }}>Hy! I Am</span>
          <span>Hager Mahmoud</span>
          <span style={{ color: darkMode? 'white':'' 
     }}>Full Stack Developer with high level of experience in web designing and development,<br/>producting the Quality work.</span>

        </div>
        <button className="i-button button">Hire Me</button>

        <div className='i-icons'>
        <GitHub />
        <LinkedIn />
        <Instagram />
          {/* <img src={GitHub}/>
          <img src={LinkedIn}/>
          <img src={Instagram}/> */}

        </div>
      </div>
      <div className="i-right">
      <img src={Vector1}/>
      <img src={Vector2}/>
          <img src={Girl} width='400vw' />
          <motion.img 
          initial={{ left:'-36%' }}
          whileInView={{ left:'-24%' }}
          transition={transition}
          src={Glassesimoji} 
          className='floating-div'/>
          
          <motion.div 
           initial={{  top:'-4%' ,left:'66%' }}
           whileInView={{ left:'55%' }}
           transition={transition}
           style={{ top:"-4%",left:"55%" }}
           className='floating-div'>
            <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
          </motion.div>

          <motion.div 
           initial={{ top:'56%' ,left:'-19%' }}
           whileInView={{ left:'-6%' }}
           transition={transition}
           style={{ top:"56%",left:"-6%"}}
           className='floating-div'>
            <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award"/>
          </motion.div>

          <div className='blur' style={{ background:'rgb(238,210,255)' }}> </div>
          <div className='blur' style={{ background:'#c1f5ff',top:'17rem', width:'21rem', height:'11rem', left:'-23%' }}> </div>

      </div>
    </div>
  )
}

export default Intro
