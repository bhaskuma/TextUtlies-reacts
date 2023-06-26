import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
function App() {
  const [mode,setmode] = useState('light');
  const [alert, setalert]= useState(null);

  const showAlert = (message, type)=>
  {
    setalert({
    msg: message,
    type: type
  })
  setTimeout(()=>
  {
    setalert(null);
  },1000)
}
  const toggleMode = ()=>
  {
   if(mode === 'light')
   {
    setmode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","sucess");
   }
   else
   {
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled","sucess");


   }
  }
  return (
<>
<Navbar title="TextUtiles" abouttext="about" mode = {mode} toggleMode = {toggleMode}/>
<Alerts alert= {alert}/>
<div className="container my-3">
<TestForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode}/>

</div>
</>  );
}

export default App;
