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

const readFile = (nomeFile) => {
  var type = window.TEMPORARY;
  var size = 5*1024*1024;
  var ret = null;
  const setRet = (toRet) => {
    this.ret = toRet;
  }

  window.requestFileSystem(type, size, successCallback, errorCallback)

  function successCallback(fs) {
     fs.root.getFile(nomeFile+'.txt', {}, function(fileEntry) {

        fileEntry.file(function(file) {
           var reader = new FileReader();

           reader.onloadend = function(e) {
              setRet(this.result);
           };
           reader.readAsText(file);

        }, errorCallback);
     }, errorCallback);
  }

  function errorCallback(error) {
     alert("ERROR: " + error.code)
  }

  return ret;
}

const writeFile = (blob, nomeFile) => {
  var type = window.TEMPORARY;
  var size = 5*1024*1024;
  window.requestFileSystem(type, size, successCallback, errorCallback)

  function successCallback(fs) {
     fs.root.getFile(nomeFile+'.txt', {create: true}, function(fileEntry) {

        fileEntry.createWriter(function(fileWriter) {
           fileWriter.onwriteend = function(e) {
              alert('Torneo salvato.');
           };

           fileWriter.onerror = function(e) {
              alert('Errore durante il salvataggio: ' + e.toString());
           };
           fileWriter.write(blob);
        }, errorCallback);
     }, errorCallback);
  }

  function errorCallback(error) {
     alert("ERRORE: " + error.code)
  }
}

const renderReactDom = () => {
  ReactDOM.render(<App readFile={readFile} writeFile={writeFile} />, document.getElementById('root'));
};


if (window.cordova) {
  console.log(navigator)
  document.addEventListener('deviceready', () => {
    document.addEventListener("backbutton", onBackKeyDown, false);
    /*writeFile( new Blob(["ciao"],
    { type: "text/plain;charset=utf-8" }),"nuovotorneo");*/
    window.cordova.plugins.backgroundMode.enable();
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}