import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// process the confirmation dialog result
function onConfirm(buttonIndex) {
  alert('You selected button ' + buttonIndex);
  if(buttonIndex === 0){
    
  }
}

function onBackKeyDown(e) {
  if(window.confirm('Sicuro di voler uscire dal torneo?')){
    navigator.app.exitApp();
  };
}

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (window.cordova) {
  console.log(navigator)
  document.addEventListener('deviceready', () => {
    console.log(navigator.notification);

    document.addEventListener("backbutton", onBackKeyDown, false);
    window.cordova.plugins.backgroundMode.enable();
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}