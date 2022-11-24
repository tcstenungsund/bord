//import {startScanning} from './js/nfc.js';

//startScanning();


onmessage = (evt) => { postMessage(+evt.data.a); };

self.addEventListener("load", event => {
    
})

self.addEventListener("NDEFReader", event => {

});