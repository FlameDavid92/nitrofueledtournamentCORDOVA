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

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

function gotFS(fileSystem) {
  fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
  fileEntry.createWriter(gotFileWriter, fail);
}

if (window.cordova) {
  console.log(navigator)
  document.addEventListener('deviceready', () => {
    
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

    document.addEventListener("backbutton", onBackKeyDown, false);
    window.cordova.plugins.backgroundMode.enable();
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}