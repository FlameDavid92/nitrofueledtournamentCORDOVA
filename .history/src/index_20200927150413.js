import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// process the confirmation dialog result
function onConfirm(buttonIndex) {
  alert('You selected button ' + buttonIndex);
  if(buttonIndex === 0){
    window.cordova.navigator.app.exitApp();
  }
}

function onBackKeyDown(e) {
  window.cordova.navigator.notification.confirm(
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
    console.log(navigator.notification);

    document.addEventListener("backbutton", onBackKeyDown, false);
    window.cordova.plugins.backgroundMode.enable();
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}