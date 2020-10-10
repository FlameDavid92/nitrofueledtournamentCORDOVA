import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function onBackKeyDown(e) {
  e.preventDefault();
  alert('NOOOOOOOOOOOO! Ale smettila di premere il tasto sbagliato!');
}
const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (window.cordova) {
  document.addEventListener("backbutton", onBackKeyDown, false);

  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}
