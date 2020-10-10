import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// process the confirmation dialog result
function onConfirm(buttonIndex) {
  alert('You selected button ' + buttonIndex);
}

function onBackKeyDown(e) {
  navigator.notification.confirm(
    'Sicuro di voler uscire dal torneo?', // message
    onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart', 'Exit']         // buttonLabels
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