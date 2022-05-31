import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode enabled.', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled.', 'success')
    }
  }

  const changeBckColor = (choice) => {
    if(mode==='dark'){
      if(choice==='green') {
        document.body.style.backgroundColor = '#004d4d'
      } 
      else if(choice==='blue') {
        document.body.style.backgroundColor = '#5F68BD'
      }
      else {
        document.body.style.backgroundColor = 'grey'
      }     
    }
    else {
      document.body.style.backgroundColor = 'white'
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1500);
  }  

  return (
    <>
    <Router>
      <div>
        <NavBar title="TextUtils" mode={mode} onToggleMode={toggleMode} onChangeBckColor={changeBckColor}/>
        <Alert alert={alert}/>
        <Routes>
            <Route exact path="/"
              element={<TextForm label="Enter text to analyze below" mode={mode} alert={showAlert}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
