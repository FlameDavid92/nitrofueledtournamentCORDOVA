(this["webpackJsonpio.cordova.hellocordova"]=this["webpackJsonpio.cordova.hellocordova"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"battles":[{"id":0,"name":"Default","src":"./battles/default.png"},{"id":1,"name":"Roccia teschio","src":"./battles/rocciaTeschio.png"},{"id":2,"name":"Palazzo nitro","src":"./battles/palazzoNitro.png"},{"id":3,"name":"Parcheggio","src":"./battles/parcheggio.png"},{"id":4,"name":"Via rocciosa","src":"./battles/viaRocciosa.png"},{"id":5,"name":"Laboratorio","src":"./battles/laboratorio.png"},{"id":6,"name":"Ruderi furiosi","src":"./battles/ruderiFuriosi.png"},{"id":7,"name":"Arena nord","src":"./battles/arenaNord.png"},{"id":8,"name":"Guai al tempio","src":"./battles/guaiAlTempio.png"},{"id":9,"name":"Follie tra i ghiacci","src":"./battles/follieTraIGhiacci.png"},{"id":10,"name":"Tempesta di sabbia","src":"./battles/tempestaDiSabbia.png"},{"id":11,"name":"Caos magnetico","src":"./battles/caosMagnetico.png"},{"id":12,"name":"Terradromo","src":"./battles/terradromo.png"}],"tracks":[{"id":0,"name":"Default","src":"./tracks/default.png"},{"id":1,"name":"Baia Crash","src":"./tracks/baiaCrash.png"},{"id":2,"name":"Grotte mistero","src":"./tracks/grotteMistero.png"},{"id":3,"name":"Pista cloaca","src":"./tracks/pistaCloaca.png"},{"id":4,"name":"Fiale di Roo","src":"./tracks/fialeDiRoo.png"},{"id":5,"name":"Colosseo mobile","src":"./tracks/colosseoMobile.png"},{"id":6,"name":"Pista turbo","src":"./tracks/pistaTurbo.png"},{"id":7,"name":"Parco Coco","src":"./tracks/parcoCoco.png"},{"id":8,"name":"Tempio Tiger","src":"./tracks/tempioTiger.png"},{"id":9,"name":"Piramide Papu","src":"./tracks/piramidePapu.png"},{"id":10,"name":"Canyon Dingo","src":"./tracks/canyonDingo.png"},{"id":11,"name":"Valico polare","src":"./tracks/valicoPolare.png"},{"id":12,"name":"Arena di Tiny","src":"./tracks/arenaDiTiny.png"},{"id":13,"name":"Miniere drago","src":"./tracks/miniereDrago.png"},{"id":14,"name":"Colle tempesta","src":"./tracks/colleTempesta.png"},{"id":15,"name":"Via aria calda","src":"./tracks/viaAriaCalda.png"},{"id":16,"name":"Rocca Cortex","src":"./tracks/roccaCortex.png"},{"id":17,"name":"Laboratorio N.Gin","src":"./tracks/laboratorioNGin.png"},{"id":18,"name":"Stazione Oxide","src":"./tracks/stazioneOxide.png"},{"id":19,"name":"Isola infernale","src":"./tracks/isolaInfernale.png"},{"id":20,"name":"Ballo della giungla","src":"./tracks/balloDellaGiungla.png"},{"id":21,"name":"Wumpa meccanica","src":"./tracks/wumpaMeccanica.png"},{"id":22,"name":"Vicolo androidi","src":"./tracks/vicoloAndroidi.png"},{"id":23,"name":"Viale elettronico","src":"./tracks/vialeElettronico.png"},{"id":24,"name":"Immersione a 4 ruote","src":"./tracks/immersioneA4Ruote.png"},{"id":25,"name":"Colpo di fulmine","src":"./tracks/colpoDiFulmine.png"},{"id":26,"name":"Tempio di Tiny","src":"./tracks/tempioDiTiny.png"},{"id":27,"name":"Gola delle meteore","src":"./tracks/golaDelleMeteore.png"},{"id":28,"name":"Rovine di Barin","src":"./tracks/rovineDiBarin.png"},{"id":29,"name":"Fuori dal tempo","src":"./tracks/fuoriDalTempo.png"},{"id":30,"name":"All\'assemblaggio","src":"./tracks/allAssemblaggio.png"},{"id":31,"name":"Iperstrada galattica","src":"./tracks/iperstradaGalattica.png"},{"id":32,"name":"Arena retr\xf2","src":"./tracks/arenaRetro.png"},{"id":33,"name":"Tour del crepuscolo","src":"./tracks/tourDelCrepuscolo.png"},{"id":34,"name":"Parco preistorico","src":"./tracks/parcoPreistorico.png"},{"id":35,"name":"Circuito di Spyro","src":"./tracks/circuitoDiSpyro.png"},{"id":36,"name":"Incubo di Nina","src":"./tracks/incuboDiNina.png"},{"id":37,"name":"Fiera di Koala","src":"./tracks/fieraDiKoala.png"},{"id":38,"name":"Gita al pan di zenzero","src":"./tracks/gitaAlPanDiZenzero.png"},{"id":39,"name":"Megamix mania","src":"./tracks/megamixMania.png"},{"id":40,"name":"Drive-In pericolo","src":"./tracks/driveInPericolo.png"}]}')},18:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),o=a(1);function l(e){var t=e.readFile,a=e.setLoad,c=e.setTournamentName,i=e.setNumGioc,l=e.setTipo,s=e.setInitForm,m=e.setInitForm2,u=e.setAudio,d=Object(n.useState)(null!==window.localStorage.getItem("nitrofueledtournament")),p=Object(o.a)(d,2),f=p[0],v=(p[1],Object(n.useState)(!1)),b=Object(o.a)(v,2),E=b[0],g=b[1],y=Object(n.useState)(null),N=Object(o.a)(y,2),h=N[0],k=N[1],w=Object(n.useRef)(null),O=Object(n.useRef)(null);Object(n.useEffect)((function(){if(h)if("ERRORE"!==h){var e=JSON.parse(h);e.tournamentName?(g(!1),window.localStorage.setItem("nitrofueledtournament",JSON.stringify(e)),a(!0),u(!1),m(!1),s(!1)):g(!0)}else g(!0)}),[h]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row m-0 justify-content-center align-items-center h-75"},r.a.createElement("div",{className:"col-12 col-md-4 p-0"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(e.target.tournamentName.value),i(parseInt(e.target.numGioc.value)),l(e.target.tipo.value),s(!1)}},r.a.createElement("div",{className:"form-row text-center"},r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("div",null,E&&r.a.createElement("label",{className:"my-label-error mb-4"},"File selezionato non corretto!")),r.a.createElement("div",null,r.a.createElement("label",{className:"my-label",htmlFor:"inputState1"},"Torneo:"),r.a.createElement("input",{name:"tournamentName",className:"form-control form-control-sm mb-1",type:"text",placeholder:"Inserisci un nome per il torneo",required:!0})),r.a.createElement("div",{className:"mt-2"},r.a.createElement("label",{className:"my-label",htmlFor:"inputState1"},"Tipologia torneo:"),r.a.createElement("select",{name:"tipo",id:"inputState1",className:"form-control form-control-sm text-center",defaultValue:"",required:!0},r.a.createElement("option",{disabled:!0,hidden:!0,value:""},"Scegli il tipo di torneo"),r.a.createElement("option",{value:"small"},"Small"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"big"},"Big"))),r.a.createElement("div",{className:"mt-2"},r.a.createElement("label",{className:"my-label",htmlFor:"inputState2"},"Numero giocatori:"),r.a.createElement("select",{name:"numGioc",id:"inputState2",className:"form-control form-control-sm text-center",defaultValue:"",required:!0},r.a.createElement("option",{disabled:!0,hidden:!0,value:""},"Scegli il numero di giocatori"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"))),r.a.createElement("input",{className:"btn btn-secondary mt-2",type:"submit",value:"Nuovo torneo"}),r.a.createElement("input",{ref:function(e){return w=e},onChange:function(e){var t=new FileReader;t.onload=function(){try{var e=JSON.parse(t.result);e.tournamentName?(g(!1),window.localStorage.setItem("nitrofueledtournament",JSON.stringify(e)),a(!0),u(!1),m(!1),s(!1)):g(!0)}catch(n){g(!0)}},t.readAsText(e.target.files[0])},className:"btn btn-secondary mt-2 ml-2 d-none",type:"file",id:"carica-torneo",accept:".txt"}),window.cordova&&r.a.createElement("input",{ref:function(e){return O=e},name:"loadFileName",className:"form-control form-control-sm mb-2 mt-4",type:"text",placeholder:"Inserisci il nome del torneo da caricare"}),r.a.createElement("input",{onClick:function(){window.cordova?""!==O.value?t(O.value,k):alert("Inserire il nome torneo del torneo che si vuole caricare."):w.click()},className:"btn btn-secondary mt-2",type:"button",value:"Carica torneo"}),f&&r.a.createElement("input",{onClick:function(){a(!0),u(!1),m(!1),s(!1)},className:"btn btn-secondary mt-2 ml-2",type:"button",value:"Torna all'ultimo torneo"})))))))}var s=a(3),m=a(14),u=a(15),d=function(){function e(t,a,n,r){Object(m.a)(this,e),this.name=t,this.favoriteTrack=a,this.battlePoints=n,this.trackPoints=r}return Object(u.a)(e,[{key:"addBattlePoints",value:function(e){this.battlePoints+=e}},{key:"addTrackPoints",value:function(e){this.trackPoints+=e}},{key:"getTotalPoints",value:function(){return this.battlePoints+this.trackPoints}}]),e}();function p(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function f(e){var t=e.favoriteTracksImgs;return Object(n.useEffect)((function(){t.forEach((function(e){(new Image).src=e.fileName}))}),[]),r.a.createElement("div",{className:"preftracks mb-2 shadow"},r.a.createElement("div",{className:"row m-0 justify-content-center"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"col-6 w-100 h-100 p-2"},r.a.createElement("img",{className:"img-fluid trackimg "+(0===t?"b-blue":1===t?"b-red":2===t?"b-green":"b-purple"),src:e,alt:"Logo pista preferita del giocatore "+(t+1)}))}))))}function v(e){var t=e.tracks,a=e.numGioc,c=e.setPlayers,i=e.setInitForm2,l=Object(n.useState)(Array(a).fill(0)),m=Object(o.a)(l,2),u=m[0],p=m[1];return r.a.createElement("div",{className:"row m-0 justify-content-center align-items-center h-75"},r.a.createElement("div",{className:"col-12 col-md-4 p-0"},r.a.createElement("div",{className:"row m-0"},r.a.createElement("div",{className:"col-12 p-0"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=Array(a).fill(null),r=Array(a).fill(null);n.forEach((function(a,r){var c=e.target[2*r].value.split(" "),i=c[0].length>10?c[0].substr(0,8):c[0],o=c[1]?c[1].toUpperCase().charAt(0):"";n[r]=new d(i+o,t[e.target[2*r+1].value],0,0,0)})),c(n),p(r),i(!1)}},r.a.createElement("div",{className:"form-row text-center justify-content-center"},Array(a).fill(null).map((function(e,a){return r.a.createElement("div",{key:"newpl-"+a,className:"form-group col-6"},r.a.createElement("div",{key:"input-"+(a+1),className:"mt-2"},r.a.createElement("input",{className:"form-control form-control-sm mb-1",type:"text",placeholder:"Nome giocatore "+(a+1),required:!0}),r.a.createElement("select",{name:"inputStatePlayer-"+(a+1),id:"inputStatePlayer-"+(a+1),onChange:function(e){return function(e,t){u[t]=parseInt(e.target.value),p(Object(s.a)(u))}(e,a)},className:"form-control form-control-sm text-center",defaultValue:"",required:!0},r.a.createElement("option",{disabled:!0,hidden:!0,value:""},"Gara preferita del giocatore "+(a+1)),t.map((function(e){return 0===e.id||u.some((function(t,n){return e.id===t&&n!==a}))?r.a.createElement(r.a.Fragment,{key:"j-"+e.id}):r.a.createElement("option",{key:"j-"+e.id,value:e.id},e.id,". ",e.name)})))))})),r.a.createElement("input",{className:"btn btn-secondary mt-1",type:"submit",value:"Avanti"})))),r.a.createElement("div",{className:"col-12 mt-4 p-0"},r.a.createElement(f,{favoriteTracksImgs:u.map((function(e){return t[e].src}))})))))}var b=a(4),E=a(5),g=a(7);function y(e){var t=e.end,a=e.players,n=e.setPlayers,c=e.currentGameId,i=e.setCurrentGameId,o=e.myTournament,l=e.setMyTournament,m=e.endGame,u=e.setEndGame,d=e.openModalTempoPoints;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-12"},m?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row align-items-center"},function(e){var t=[],a=Number.POSITIVE_INFINITY;if(e.forEach((function(e){var n=e.getTotalPoints();n<a?(a=e.getTotalPoints(),t=[e.name]):n===a&&t.push(e.name)})),t.length>1){var n="";return t.forEach((function(e){return n+=e+" "})),"Torneo concluso in parit\xe0, i vincitori sono: ;"+n}return"Vince il torneo: ;"+t[0]}(a).split(";").map((function(e,t){return r.a.createElement("div",{className:"col-12 col-md-6 mb-2",key:"w"+t},r.a.createElement("h4",{className:"my-color-black"},e))}))),r.a.createElement("div",{className:"row align-items-center"},function(e){var t=[],a=Number.POSITIVE_INFINITY;if(e.forEach((function(e){var n=e.battlePoints;n<a?(a=e.battlePoints,t=[e.name]):n===a&&t.push(e.name)})),t.length>1){var n="";return t.forEach((function(e){return n+=e+" "})),"Premio battaglia in parit\xe0, i vincitori sono: ;"+n}return"Vince il premio battaglia: ;"+t[0]}(a).split(";").map((function(e,t){return r.a.createElement("div",{className:"col-12 col-md-6 mb-2",key:"wb"+t},r.a.createElement("h4",{className:"my-color-black"},e))}))),r.a.createElement("div",{className:"row align-items-center"},function(e){var t=[],a=Number.POSITIVE_INFINITY;if(e.forEach((function(e){var n=e.trackPoints;n<a?(a=e.trackPoints,t=[e.name]):n===a&&t.push(e.name)})),t.length>1){var n="";return t.forEach((function(e){return n+=e+" "})),"Premio gara in parit\xe0, i vincitori sono: ;"+n}return"Vince il premio gara: ;"+t[0]}(a).split(";").map((function(e,t){return r.a.createElement("div",{className:"col-12 col-md-6 mb-2",key:"wt"+t},r.a.createElement("h4",{className:"my-color-black"},e))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=Object(s.a)(a),m=o.map((function(t,a){return parseInt(t.index)===parseInt(c)+1?Object(g.a)(Object(g.a)({},o[c]),{},{state:"complete",points:r.map((function(t,a){return parseInt(e.target[a].value)}))}):t}));l(m),r.forEach((function(t,a){"battle"===o[c].type?t.addBattlePoints(parseInt(e.target[a].value)):t.addTrackPoints(parseInt(e.target[a].value))})),n(r),c===t-1&&u(!0),i(c+1),e.target.reset()}},r.a.createElement("div",{className:"form-row text-center"},a.map((function(e,t){return r.a.createElement("div",{key:e.name,className:"form-group col-6 mb-0"},r.a.createElement("div",{key:"pt-pl-"+t},r.a.createElement("label",{htmlFor:"pt-pl-"+t,className:"player"},e.name,":"),r.a.createElement("select",{name:"tipo",id:"pt-pl-"+t,className:"form-control text-center",defaultValue:"",required:!0},r.a.createElement("option",{disabled:!0,hidden:!0,value:""},"---Posizione---"),[1,2,3,4,5,6,7,8].map((function(e,t){return r.a.createElement("option",{key:"opt-"+t,value:e},e,"\u2090")})))))})),r.a.createElement("div",{className:"form-group col-12 w-75 mt-2"},r.a.createElement("input",{className:"btn w-100"+(c===t-1?" btn-danger":" btn-secondary"),type:"submit",value:c===t-1?"Concludi partita":"Inserisci punti"}))))),r.a.createElement("div",{className:""},r.a.createElement("button",{onClick:d,className:"btn w-100 mb-3"+(t===c?" btn-success":" btn-secondary")},t===c?"Punteggi finali":"Punteggi parziali"))))}function N(e){var t=e.clicksModal,a=e.text,i=e.title,l=document.getElementById("divModale"),s=Object(n.useState)(!1),m=Object(o.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){t&&d(!0)}),[t]),Object(c.createPortal)(r.a.createElement(r.a.Fragment,null,u&&r.a.createElement("div",{className:"containermodale"},r.a.createElement("div",{className:"shadow modale"},r.a.createElement("div",{className:"row justify-content-between m-0 p-1"},r.a.createElement("div",{className:"h3 text-uppercase"},i),r.a.createElement("button",{onClick:function(){d(!1)},className:"btn btn-sm btn-danger rounded p-1 h-50"},"X")),r.a.createElement("hr",{className:"separator m-0"}),r.a.createElement("div",{className:"row modal-children w-100 m-0"},a.split(";").map((function(e){return r.a.createElement("div",{key:"t"+e,className:"col-12"},r.a.createElement("span",null,e))})))))),l)}function h(e){var t=e.clicksModal2,a=e.title,i=e.players,l=e.setPlayers,m=e.myTournament,u=e.setMyTournament,d=e.pointsChangeId,p=document.getElementById("divModale"),f=Object(n.useState)(!1),v=Object(o.a)(f,2),b=v[0],E=v[1],y=function(){E(!1)};Object(n.useEffect)((function(){t&&E(!0)}),[t]);return Object(c.createPortal)(r.a.createElement(r.a.Fragment,null,b&&r.a.createElement("div",{className:"containermodale"},r.a.createElement("div",{className:"shadow modale"},r.a.createElement("div",{className:"row justify-content-between m-0 p-1"},r.a.createElement("div",{className:"h3 text-uppercase"},a),r.a.createElement("button",{onClick:y,className:"btn btn-sm btn-danger rounded p-1 h-50"},"X")),r.a.createElement("hr",{className:"separator m-0"}),r.a.createElement("div",{className:"form-row justify-content-center w-100 m-0"},r.a.createElement("div",{className:"h6 text-uppercase"},"".concat(m[d].index,". ").concat(m[d].name," - ").concat("battle"===m[d].type?"BATTAGLIA":"favorite"===m[d].type?"PREFERITA":"GARA")),r.a.createElement("div",{className:"col-12"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=m[d].points,a=i.map((function(t,a){return parseInt(e.target[a].value)}));u([].concat(Object(s.a)(m.slice(0,d)),[Object(g.a)(Object(g.a)({},m[d]),{},{points:a,state:"complete"})],Object(s.a)(m.slice(d+1))));var n=Object(s.a)(i);n.forEach((function(e,n){"battle"===m[d].type?e.battlePoints=e.battlePoints-t[n]+a[n]:"track"!==m[d].type&&"favorite"!==m[d].type||(e.trackPoints=e.trackPoints-t[n]+a[n])})),l(n),console.log("sono qui"),y()}},r.a.createElement("div",{className:"form-group"},i.map((function(e,t){return r.a.createElement("div",{key:"modal2-pt-pl-"+t},r.a.createElement("label",{className:"mb-1",htmlFor:"modal2-pt-pl-"+t},e.name,":"),r.a.createElement("select",{name:"tipo",id:"modal2-pt-pl-"+t,className:"form-control text-center mb-2",defaultValue:"",required:!0},r.a.createElement("option",{disabled:!0,hidden:!0,value:""},"---Posizione---"),[1,2,3,4,5,6,7,8].map((function(e,t){return r.a.createElement("option",{key:"modal2-opt-"+t,value:e},e,"\u2090")}))))}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control btn btn-outline-primary mt-2",type:"submit",value:"Inserisci punti"})))))))),p)}function k(e){e.saveToLocalStorage;var t=e.arrayRiavviaSwitch,a=e.setArrayRiavviaSwitch,c=e.names,i=e.numGioc,l=e.tipo,m=e.myTournament,u=e.setMyTournament,d=e.switchTracks,f=e.setSwitchTracks,v=e.currentGameId,g=Object(n.useState)(""),y=Object(o.a)(g,2),h=y[0],k=y[1],w=Object(n.useState)(0),O=Object(o.a)(w,2),j=O[0],T=O[1];Object(n.useEffect)((function(){var e=2,t=2,n=2,r=1,i=1,o=1,s=[];c.forEach((function(){s.push({riavvia:"small"===l?i:"medium"===l?n:e,switch:"small"===l?o:"medium"===l?r:t})})),a(s)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},t&&t.map((function(e,n){return r.a.createElement("div",{key:"gHelp-"+n,className:"col-6 col-md-3"},r.a.createElement("div",{key:"player-"+n,className:"row"},r.a.createElement("div",{className:"col-12 h4 m-0 player"+(n+1)+"-italic"},c[n]),r.a.createElement("div",{className:"col-12 col-xl-6 my-label-sm"},r.a.createElement("div",{className:"row align-items-center m-0"},r.a.createElement("div",{className:"col-6 p-0"},"Riavvia: ",e.riavvia),r.a.createElement("div",{className:"col-3 p-0"},r.a.createElement("span",{className:"my-icon-medium"},r.a.createElement(b.a,{title:"Riavvia",className:0===e.riavvia?"my-icon-disabled":"my-icon",onClick:function(){return function(e,n){if(0!==n)if("track"===m[v].type||"favorite"===m[v].type){if(t[e].riavvia>0){var r=Object(s.a)(t);r[e].riavvia-=1,a(r)}}else T((function(e){return e+1})),k("Non \xe8 possibile effettuare Riavvia su una battaglia.")}(n,e.riavvia)},icon:E.e}))),r.a.createElement("div",{className:"col-3 p-0"},r.a.createElement("span",{className:"my-icon-medium"},r.a.createElement(b.a,{title:"SuperRiavvia",className:e.riavvia-2<0?" my-icon-disabled":" my-icon",onClick:function(){return function(e,n){if(n-2>=0)if("track"===m[v].type||"favorite"===m[v].type){if(t[e].riavvia>0){var r=Object(s.a)(t);r[e].riavvia-=2,a(r)}}else T((function(e){return e+1})),k("Non \xe8 possibile effettuare SuperRiavvia su una battaglia.")}(n,e.riavvia)},icon:E.f}))))),r.a.createElement("div",{className:"col-12 col-xl-6 my-label-sm"},r.a.createElement("div",{className:"row align-items-center m-0"},r.a.createElement("div",{className:"col-6 p-0"},"Switch: ",e.switch),r.a.createElement("div",{className:"col-3 p-0"},r.a.createElement("span",{className:"my-icon-medium"},r.a.createElement(b.a,{title:"Switch",className:0===e.switch?"my-icon-disabled":"my-icon",onClick:function(){return function(e,n){if(0!==n)if(d.length>0)if("track"===m[v].type){var r=Object(s.a)(d),c=p(0,r.length),o=r[c];r.splice(c,1),f(r);var l=Object(s.a)(m);if(l[v]={index:v+1,num:o.id,name:o.name,type:"track",state:"uncomplete",points:Array(i).fill(null)},u(l),t[e].switch>0){var b=Object(s.a)(t);b[e].switch-=1,a(b)}}else T((function(e){return e+1})),k("Non \xe8 possibile effettuare Switch su una battaglia o su una gara preferita.");else alert("Errore durante lo switch, non \xe8 possibile effettuare lo switch")}(n,e.switch)},icon:E.b}))),r.a.createElement("div",{className:"col-3 p-0"},r.a.createElement("span",{className:"my-icon-medium"},r.a.createElement(b.a,{title:"1 Switch => 2 Riavvia",className:0===e.switch?" my-icon-disabled":" my-icon",onClick:function(){return function(e,n){if(0!==n&&t[e].switch>0){var r=Object(s.a)(t);r[e].switch-=1,r[e].riavvia+=2,a(r)}}(n,e.switch)},icon:E.a})))))))}))),r.a.createElement(N,{clicksModal:j,text:h,title:"ATTENZIONE"}))}var w=a(16);function O(e){var t=e.writeFile,a=e.goToHome,c=(e.setAudio,e.setInitForm,e.setInitForm2,e.setTournamentName),i=e.setNumGioc,l=e.setTipo,m=e.setPlayers,u=e.tournamentName,f=e.load,v=e.tipo,g=e.numGioc,O=e.battles,j=e.tracks,T=e.players,S=Object(n.useState)(0),I=Object(o.a)(S,2),P=I[0],F=I[1],A=Object(n.useState)(null),R=Object(o.a)(A,2),x=R[0],G=R[1],C=Object(n.useState)([]),M=Object(o.a)(C,2),D=M[0],V=M[1],z=Object(n.useState)(0),B=Object(o.a)(z,2),L=B[0],q=B[1],J=Object(n.useState)(null),Y=Object(o.a)(J,2),H=Y[0],_=Y[1],K=Object(n.useState)(!1),W=Object(o.a)(K,2),X=W[0],Z=W[1],U=g,Q=U+("small"===v?2:"medium"===v?3:4)+("small"===v?3:"medium"===v?6:9),$=Object(n.useState)(0),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(0),re=Object(o.a)(ne,2),ce=re[0],ie=re[1],oe=Object(n.useState)(""),le=Object(o.a)(oe,2),se=le[0],me=le[1],ue=function(){window.localStorage.setItem("nitrofueledtournament",JSON.stringify({tournamentName:u,numGioc:g,tipo:v,players:T,currentGameId:P,myTournament:x,switchTracks:D,pointsChangeId:L,clicksModal:te,clicksModal2:ce,textModal:se,arrayRiavviaSwitch:H,endGame:X}))},de=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(de.current){var e=document.getElementsByClassName("prev-current")[0].offsetTop;de.current.scrollTop=e}P&&ue()}),[P]),Object(n.useEffect)((function(){H&&ue()}),[H]),Object(n.useEffect)((function(){x&&ue()}),[x]),Object(n.useEffect)((function(){if(f){var e=JSON.parse(window.localStorage.getItem("nitrofueledtournament"));return console.log("loaded: ",e),c(e.tournamentName),i(e.numGioc),l(e.tipo),Z(e.endGame),m(e.players.map((function(e){return new d(e.name,e.favoriteTrack,e.battlePoints,e.trackPoints)}))),F(e.currentGameId),G(e.myTournament),V(e.switchTracks),q(e.pointsChangeId),ae(0),ie(0),me(""),void _(e.arrayRiavviaSwitch)}var t=Object(s.a)(O);t.shift();var a=Object(s.a)(j);a.shift();var n=T.map((function(e){return{num:e.favoriteTrack.id,name:e.favoriteTrack.name,player:e.name}}));!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(n);var r=function(e,t){var a=p(0,e.length),n=e[a];return e.splice(a,1),{index:t+1,num:n.id,name:n.name,type:"battle",state:"uncomplete",points:Array(g).fill(null)}},o=function(e,t){var a=p(0,e.length),n=e[a];return e.splice(a,1),{index:t+1,num:n.id,name:n.name,type:"track",state:"uncomplete",points:Array(g).fill(null)}},u=function(e,t){var a=e.pop();return{index:t+1,num:a.num,name:a.name+" ["+a.player+"]",type:"favorite",state:"uncomplete",points:Array(g).fill(null)}};G(Array(Q).fill(null).map((function(e,c){return"small"===v?0===c?r(t,c):c>0&&c<=3?o(a,c):c>3&&c<=3+U?u(n,c):(V(a),r(t,c)):"medium"!==v?0===c?r(t,c):c>0&&c<=3?o(a,c):3===U||4===U?4===c?u(n,c):5===c?r(t,c):c>5&&c<=8?o(a,c):9===c?u(n,c):10===c?r(t,c):c>10&&c<=13?o(a,c):c>13&&c<=U-2+13?u(n,c):(V(a),r(t,c)):4===c?r(t,c):c>4&&c<=7?o(a,c):8===c?u(n,c):9===c?r(t,c):c>9&&c<=12?o(a,c):13===c?u(n,c):(V(a),r(t,c)):0===c?r(t,c):c>0&&c<=3?o(a,c):2===U||3===U?4===c?u(n,c):5===c?r(t,c):c>5&&c<=8?o(a,c):c>8&&c<=U-1+8?u(n,c):(V(a),r(t,c)):4===g?c>3&&c<=5?u(n,c):6===c?r(t,c):c>6&&c<=9?o(a,c):c>9&&c<=U-2+9?u(n,c):(V(a),r(t,c)):null})))}),[]),r.a.createElement(r.a.Fragment,null,!X&&r.a.createElement(k,{saveToLocalStorage:ue,arrayRiavviaSwitch:H,setArrayRiavviaSwitch:_,names:T.map((function(e){return e.name})),numGioc:g,tipo:v,switchTracks:D,setSwitchTracks:V,myTournament:x,setMyTournament:G,currentGameId:P}),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-12 col-md-6 p-0"},x&&r.a.createElement("div",{ref:de,className:"playlist"},r.a.createElement("div",{className:"row m-0"},r.a.createElement("div",{className:"col-12"},r.a.createElement("table",{className:"table table-sm table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Nome"),r.a.createElement("th",{scope:"col"},"Tipo"),r.a.createElement("th",{scope:"col"},"Punti"),r.a.createElement("th",{scope:"col"},r.a.createElement(b.a,{icon:E.c})))),r.a.createElement("tbody",null,x.map((function(e,t){return r.a.createElement("tr",{className:e.type+" "+e.state+(P===t?" current":P-1===t?" prev-current":""),key:"tm-"+e.index},r.a.createElement("th",{className:"align-middle",scope:"row"},e.index),r.a.createElement("td",{className:"align-middle"},e.name),r.a.createElement("td",{className:"align-middle"},"battle"===e.type?"BATTAGLIA":"favorite"===e.type?"PREFERITA":"GARA"),r.a.createElement("td",{className:"align-middle"},e.points[0]&&r.a.createElement("p",{className:"mb-0"},T.map((function(t,a){return" "+t.name.slice(0,3)+" "+e.points[a]})))),r.a.createElement("td",{className:"align-middle"},e.points[0]&&!X&&r.a.createElement(b.a,{className:"my-icon",onClick:function(){!function(e){q(e),ie((function(e){return e+1}))}(t)},icon:E.d})))})))))))),r.a.createElement("div",{className:"col-12 col-md-6 mt-2"},r.a.createElement(y,{openModalTempoPoints:function(){var e="";T.forEach((function(t){e+=t.name+"= tot:"+t.getTotalPoints()+" battaglie:"+t.battlePoints+" gare:"+t.trackPoints+";"})),me(e),ae((function(e){return e+1}))},end:Q,players:T,setPlayers:m,myTournament:x,setMyTournament:G,currentGameId:P,setCurrentGameId:F,endGame:X,setEndGame:Z}),r.a.createElement("button",{onClick:a,type:"button",className:"btn btn-secondary w-100 mt-5 mb-3"},"Nuovo torneo"),r.a.createElement("button",{onClick:function(){var e=new Blob([window.localStorage.getItem("nitrofueledtournament")],{type:"text/plain;charset=utf-8"});window.cordova?t(e,u):Object(w.saveAs)(e,u+".txt")},type:"button",className:"btn btn-secondary w-100 mb-3"},"Salva torneo"))),r.a.createElement(N,{clicksModal:te,text:se,title:Q===P?"Punteggi finali":"Punteggi parziali"}),r.a.createElement(h,{title:"Modifica Punti",myTournament:x||[],setMyTournament:G,pointsChangeId:L,players:T,setPlayers:m,clicksModal2:ce}))}a(28),a(29);var j=a(11),T=a(17),S=a.n(T);var I=function(e){var t=e.readFile,a=e.writeFile,c=Object(n.useState)(!0),i=Object(o.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(!0),d=Object(o.a)(u,2),p=d[0],f=d[1],b=Object(n.useState)(""),E=Object(o.a)(b,2),g=E[0],y=E[1],N=Object(n.useState)(!1),h=Object(o.a)(N,2),k=h[0],w=h[1],T=Object(n.useState)(-1),I=Object(o.a)(T,2),P=I[0],F=I[1],A=Object(n.useState)(""),R=Object(o.a)(A,2),x=R[0],G=R[1],C=Object(n.useState)([]),M=Object(o.a)(C,2),D=M[0],V=M[1],z=Object(n.useState)(!1),B=Object(o.a)(z,2),L=B[0],q=B[1];return S.a.polyfill(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"divModale"}),r.a.createElement("div",{className:"container"},L&&r.a.createElement("audio",{src:"./audio/theme.mp3",autoPlay:!0,loop:!0}),r.a.createElement("button",{onClick:function(){return q((function(e){return!e}))},className:"btn btn-sm "+(L?"btn-danger my-btn-audio-off":"btn-success my-btn-audio-on")},L?"Audio OFF":"Audio ON"),""!==g&&r.a.createElement("span",{className:"ml-2"},g),s&&r.a.createElement(l,{readFile:t,setLoad:w,setTournamentName:y,setNumGioc:F,setTipo:G,setInitForm:m,setInitForm2:f,setAudio:q}),!s&&p&&r.a.createElement(v,{tracks:j.tracks,numGioc:P,setPlayers:V,setInitForm2:f}),!p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{writeFile:a,goToHome:function(){w(!1),m(!0),f(!0),q(!1)},setAudio:q,setInitForm:m,setInitForm2:f,setTournamentName:y,setNumGioc:F,setTipo:G,tournamentName:g,load:k,tipo:x,numGioc:P,battles:j.battles,tracks:j.tracks,setPlayers:V,players:D}))))},P=function(e){window.confirm("Sicuro di voler uscire dal torneo?")?navigator.app.exitApp():e.preventDefault()},F=function(e,t){var a=window.TEMPORARY;function n(e){t("ERRORE")}window.requestFileSystem(a,5242880,(function(a){a.root.getFile(e+".txt",{},(function(e){e.file((function(e){var a=new FileReader;a.onloadend=function(e){t(this.result)},a.readAsText(e)}),n)}),n)}),n)},A=function(e,t){var a=window.TEMPORARY;function n(e){alert("ERRORE: "+e.code)}window.requestFileSystem(a,5242880,(function(a){a.root.getFile(t+".txt",{create:!0},(function(t){t.createWriter((function(t){t.onwriteend=function(e){alert("Torneo salvato.")},t.onerror=function(e){alert("Errore durante il salvataggio: "+e.toString())},t.write(e)}),n)}),n)}),n)},R=function(){i.a.render(r.a.createElement(I,{readFile:F,writeFile:A}),document.getElementById("root"))};window.cordova?(console.log(navigator),document.addEventListener("deviceready",(function(){document.addEventListener("backbutton",P,!1),R()}),!1)):R()}},[[18,1,2]]]);
//# sourceMappingURL=main.06b70e07.chunk.js.map