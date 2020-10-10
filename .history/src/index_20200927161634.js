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
     fs.root.getFile('nometorneo.txt', {}, function(fileEntry) {

        fileEntry.file(function(file) {
           var reader = new FileReader();

           reader.onloadend = function(e) {
              alert(this.result);
           };
           reader.readAsText(file);

        }, errorCallback);
     }, errorCallback);
  }

  function errorCallback(error) {
     alert("ERROR: " + error.code)
  }
}

const writeFile = () => {
  var type = window.TEMPORARY;
  var size = 5*1024*1024;
  window.requestFileSystem(type, size, successCallback, errorCallback)

  function successCallback(fs) {
     fs.root.getFile('nometorneo.txt', {create: true}, function(fileEntry) {

        fileEntry.createWriter(function(fileWriter) {
           fileWriter.onwriteend = function(e) {
              alert('Write completed.');
           };

           fileWriter.onerror = function(e) {
              alert('Write failed: ' + e.toString());
           };

           var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
           fileWriter.write(blob);
        }, errorCallback);
     }, errorCallback);
  }

  function errorCallback(error) {
     alert("ERROR: " + error.code)
  }
}

function listDir(path){
  window.resolveLocalFileSystemURL(path,
    function (fileSystem) {
      var reader = fileSystem.createReader();
      reader.readEntries(
        function (entries) {
          console.log(entries);
        },
        function (err) {
          console.log(err);
        }
      );
    }, function (err) {
      console.log(err);
    }
  );
}

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};


if (window.cordova) {
  console.log(navigator)
  document.addEventListener('deviceready', () => {
    alert(JSON.stringify(window.cordova.file.dataDirectory));
    listDir(window.cordova.file.applicationDirectory);
    document.addEventListener("backbutton", onBackKeyDown, false);
    window.cordova.plugins.backgroundMode.enable();
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}