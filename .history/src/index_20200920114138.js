import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener("backbutton", onBackKeyDown, false);  
function onBackKeyDown(e) { 
   e.preventDefault(); 
   alert('Back Button is Pressed!'); 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
