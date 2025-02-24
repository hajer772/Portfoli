import React from 'react'
import './Toggle.css'
import { LightMode } from '@mui/icons-material'
import { DarkMode } from '@mui/icons-material'
import {themeContext} from '../../Context'
import { useContext } from 'react';

const Toggle = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;  
    const handelClick=()=>{
        theme.dispatch({type: 'toggle'})
    } 
  return (
    <div className='toggle' onClick={ handelClick}>
        <DarkMode/>
      <LightMode/>

      <div className="t-button" 
      
      style={ darkMode? {left:'2px'} : {right:'2px'} }>

      </div>
    </div>
  )
}

export default Toggle
