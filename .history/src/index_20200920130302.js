import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};


// Wait for device API libraries to load
    //
    function onLoad() {
      document.addEventListener("deviceready", onDeviceReady, false);
  }

  // device APIs are available
  //
  function onDeviceReady() {
      // Register the event listener
      document.addEventListener("backbutton", onBackKeyDown, false);
      renderReactDom();
  }

  // Handle the back button
  //
  function onBackKeyDown(e) {
    e.preventDefault();
    alert('NOOOOOOOOOOOO! Ale smettila di premere il tasto sbagliato!');
  }