import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Header,{Footer, NavBar,imgBack} from './Components/header.jsx'
import About from './Components/About.jsx'
import Contact from './Components/contact.jsx'
import Skill from './Components/Skill.jsx'



export default function App(){ //Parent

  const history = useNavigate();

    const changeabout = () => history('/about');
    const changemain = () => history('../');

  const [darkMode, setDarkMode] = React.useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : false;});

    React.useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
   }, [darkMode]);
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
        console.log(darkMode)
    }

  return (
    <div className={darkMode ? 'site-wrapper dark' :'site-wrapper'}>
      {imgBack}
       <NavBar handleMain={changemain} handleAbout={changeabout} darkmode={darkMode}  toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={
                                  <div> 
                                    <Header />
                                    <Skill />
                                  </div>
                                } 
        />
        <Route path='/about' element={<About /> }  />
      </Routes>
      <Contact />
      <Footer />
    </div>
  )
}