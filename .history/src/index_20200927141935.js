import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function onBackKeyDown(e) {
  if(!window.confirm("Sicuro di voler uscire dal torneo?")){
    e.preventDefault();
  }else{
    window.cordova.navigator.app.exitApp();
  }
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