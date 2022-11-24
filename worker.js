//import {startScanning} from './js/nfc.js';

//startScanning();


self.addEventListener("NDEFReader", event => {
    onmessage = (evt) => { postMessage(+evt.data.a); };
});