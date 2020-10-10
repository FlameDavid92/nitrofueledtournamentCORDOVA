import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const onBackKeyDown = (e) => {
  if (window.confirm('Sicuro di voler uscire dal torneo?')) {
    navigator.app.exitApp();
  } else {
    e.preventDefault();
  }
};

const readFile = () => {
  var type = window.TEMPORARY;
  var size = 5*1024*1024;
  window.requestFileSystem(type, size, successCallback, errorCallback)

  function successCallback(fs) {
     fs.root.getFile('log.txt', {}, function(fileEntry) {

        fileEntry.file(function(file) {
           var reader = new FileReader();

           reader.onloadend = function(e) {
              var txtArea = document.getElementById('textarea');
              txtArea.value = this.result;
           };
           reader.readAsText(file);
        }, errorCallback);
     }, errorCallback);
  }

  function errorCallback(error) {
     alert("ERROR: " + error.code)
  }
}

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};


if (window.cordova) {
  console.log(navigator)
  document.addEventListener('deviceready', () => {
    alert(JSON.stringify(window.cordova.file));
    document.addEventListener("backbutton", onBackKeyDown, false);
    window.cordova.plugins.backgroundMode.enable();
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}