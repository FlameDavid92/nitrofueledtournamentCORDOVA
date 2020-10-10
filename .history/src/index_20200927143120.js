import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// process the confirmation dialog result
function onConfirm(buttonIndex) {
  alert('You selected button ' + buttonIndex);
  if(buttonIndex === 0){
    window.navigator.app.exitApp();
  }
}

function onBackKeyDown(e) {
  window.navigator.notification.confirm(
    'Sicuro di voler uscire dal torneo?', // message
    onConfirm,                // callback to invoke with index of button pressed
    "NitroFueled Tournament", // title
    ['Sì', 'No']         // buttonLabels
  );
}

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    document.addEventListener("backbutton", onBackKeyDown, false);
    window.cordova.plugins.backgroundMode.enable();
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}