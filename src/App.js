import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [btntext, setbtntext] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setbtntext('Enable Light Mode');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode Enabled", "success");
      // document.title = "TextUtils Dark"
      // document.title.style = {color: 'red'};
    }
    else {
      setMode('light');
      setbtntext('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("LIght Mode Enabled", "success");
      document.title = "TextUtils"
    }
  }

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
