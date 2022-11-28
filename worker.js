//import {startScanning} from './js/nfc.js';

//startScanning();

//onmessage = (evt) => { postMessage(+evt.data.a); };

postMessage({ a:1});

self.addEventListener("NDEFReader", event => {
    postMessage({ a:1});

});