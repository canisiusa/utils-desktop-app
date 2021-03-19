
const {ipcRenderer} = require('electron')
window.ipcRenderer = ipcRenderer
window.addEventListener('DOMCONTENTLOADED', function(){

})