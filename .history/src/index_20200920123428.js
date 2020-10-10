import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (window.cordova) {
  document.addEventListener("backbutton", onBackKeyDown, false);
  function onBackKeyDown(e) {
    e.preventDefault();
    alert('NOOOOOOOOOOOO! Ale smettila di premere il tasto sbagliato!');
  }

  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}
