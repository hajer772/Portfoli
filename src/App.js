
import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import {themeContext} from './Context'
import { useContext } from 'react';
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='App' 
    style={{ background: darkMode? 'rgba(0, 0, 0, 0.8)':'',
      color: darkMode? 'white':'' ,zIndex: darkMode? '-99999':''
     }}>
      <Navbar/>
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
