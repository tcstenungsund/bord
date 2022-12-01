const color = document.body;

const text = document.querySelector("h1");
const info = document.querySelector("h2");
const permissionText = document.querySelector("h3");

// Function scan after a nfc tag
function startScanning(){
    // Get refercens to nfc reader
    const ndef = new NDEFReader();
    color.style.backgroundColor = "#00FFFF";

    // Start scaning for NFC tags
    ndef.scan().then(() => {
        text.innerHTML = "Scan started successfully.";
        
        // If you get a error while reading a tag
        ndef.addEventListener("readingerror", () => {
            text.innerHTML = "Error! Cannot read data from the NFC tag. Try a different one?";
            color.style.backgroundColor = "#ff0000";
            //delay(400).then(() => startScanning());
        });
        // If you reading a tag successful 
        ndef.addEventListener("reading", ({ message, serialNumber }) => {
            info.innerHTML = message + ", " + serialNumber;
            text.innerHTML = "NDEF message read.";
            //delay(400).then(() => startScanning());
        });

        // If it get a error while starting the scan
        }).catch((error) => {
        text.innerHTML = `Error! Scan failed to start: ${error}.`;
        color.style.backgroundColor = "#ff0000";
        //delay(400).then(() => startScanning());
    });
    
}


// Look if the device have NFC
if ('NDEFReader' in window) {
    text.innerHTML = "Look if the device have NFC";

    color.style.backgroundColor = "#ffff00";

    // Look if have permissions for a nfc is granted or not if permissions is not granded make a button that give browser permissions for nfc
    navigator.permissions.query({name:'nfc'}).then((result) => {
        if (result.state === 'granted') {
          startScanning();
        } else if (result.state === 'prompt') {
            // Show a scan button.
            document.querySelector("#scanButton").style.display = "block";
            document.querySelector("#scanButton").onclick = event => {
            // Prompt user to allow to send and receive info when they tap NFC devices.
            document.querySelector("#scanButton").style.display = "none";
            permissionText.innerHTML = "navigator.permissions.query({name:'nfc'})";
            startScanning();
            };
        }
      });
    
}
else{
    // If device have no nfc reader or browser does not support NDEFReader
    text.innerHTML = "No nfc reader or browser does not support NDEFReader";
    color.style.backgroundColor = "#0000ff";
}