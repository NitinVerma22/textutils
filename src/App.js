
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';




function App() {
  const [mode, setMode] = useState('light')
  const [lighttDark, setlightDark] = useState('Dark Mode')
  const [showHide, setshowHide] = useState('hide')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setlightDark('Dark Mode');
      // setshowHide('hide');
      document.body.style.backgroundColor = 'white';

    }
    else {
      if(setlightDark=="Light Mode")
      setMode('light');
      setMode('dark');
      setlightDark('Light Mode');
      setshowHide('show');
      document.body.style.backgroundColor = ' rgb(21, 25, 43)';

    }
  }
  const togglePink = () => {
    setMode('pink');
    setshowHide('show');
    document.body.style.backgroundColor = 'rgb(124, 13, 50)';
    document.getElementById('myBox').style.backgroundColor = 'pink';
    document.getElementById('myBox').style.color = 'blue';
  }
  const toggleGreen = () => {
    setMode('green');
    setshowHide('show');
    document.body.style.backgroundColor = 'rgb(29, 101, 9)';
    document.getElementById('myBox').style.backgroundColor = 'rgb(71, 129, 54)';
    document.getElementById('myBox').style.color = 'pink';
  }
  const togglePurple = () => {
    setMode('purple');
    setshowHide('show');
    document.body.style.backgroundColor = 'rgb(89, 21, 99)';
    document.getElementById('myBox').style.backgroundColor = 'rgb(129, 61, 139)';
    document.getElementById('myBox').style.color = 'pink';
  }
  const resetMode = () => {
    setMode('light');
    setlightDark('Dark Mode');
    document.body.style.backgroundColor = 'white';
    document.getElementById('myBox').style.backgroundColor = 'white';
    document.getElementById('myBox').style.color = 'black';
  }
  return (
  <>
      <Navbar mode={mode} setshowHide={showHide} toggleMode={toggleMode} resetMode={resetMode} lighttDark={lighttDark} toggleThemeP={togglePink} toggleThemePu={togglePurple} toggleThemeG={toggleGreen}></Navbar >
      <div className="container"></div>
      <Textform></Textform>

      </>
  );
}

export default App;
