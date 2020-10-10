import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function onBackKeyDown(e) {
  e.preventDefault();
  if(!confirm("Sicuro di voler uscire dal torneo?")){
    e.preventDefault();
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