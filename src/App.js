import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Accrodion from './components/Accrodion';
import Footer from './components/Footer';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [textColor, setTextColor] = useState('dark');

  document.body.style.backgroundColor = 'light';

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextColor('light');
      document.body.style.backgroundColor = '#191970';
      showAlert('Dark Mode has been enabled', 'dark');
      document.title = 'Textutils - Dark Mode';
    } else {
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'primary');
      document.title = 'Textutils';
    }
  };

  return (
    <Router>
      <Navbar
        title="Textutils"
        home="Home"
        about="About us"
        accrodion = 'Accrodion'
        mode={mode}
        togglemode={toggleMode}
        textColor={textColor}
      />
      <Alert alert={alert} />
      <Routes>
      <Route path="/about" element={
      <About mode={mode} togglemode={toggleMode} textColor={textColor} />
      } />
    <Route path="/" element={
    <>
      <Textform
        check="check me out"
        heading="Enter the text to analyze"
        
        mode={mode}
        textColor={textColor}
        togglemode={toggleMode}
      />
    </>
    } />
    <Route path="/accrodion" element={
    <>
      <Accrodion
        
        mode={mode}
        togglemode={toggleMode}
        textColor={textColor}
      />
    </>
    } />

    </Routes>
      <Footer mode={mode} togglemode={toggleMode} textColor={textColor} />
    </Router>
  );
}

export default App;