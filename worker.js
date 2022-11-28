//import {startScanning} from './js/nfc.js';

//startScanning();

//onmessage = (evt) => { postMessage(+evt.data.a); };

self.addEventListener("NDEFReader", event => {
    postMessage({ a:1});
});