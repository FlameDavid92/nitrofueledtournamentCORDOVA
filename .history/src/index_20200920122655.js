import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener("backbutton", onBackKeyDown, false);  
function onBackKeyDown(e) { 
   e.preventDefault(); 
   alert('NOOOOOOOOOOOO! Ale smettila di premere il tasto sbagliato!'); 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
