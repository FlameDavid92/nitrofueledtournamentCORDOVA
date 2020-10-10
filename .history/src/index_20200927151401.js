import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function onBackKeyDown(e) {
  if(window.confirm('Sicuro di voler uscire dal torneo?')){
    navigator.app.exitApp();
  }else{
    e.preventDefault();
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