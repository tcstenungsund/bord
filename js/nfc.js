const color = document.body;
const text = document.querySelector("h1");
const info = document.querySelector("h2");

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
        });
        // If you reading a tag successful 
        ndef.addEventListener("reading", ({ message, serialNumber }) => {
            info.innerHTML = message + ", " + serialNumber;
            text.innerHTML = "NDEF message read.";
        });

        // If it get a error while starting the scan
        }).catch((error) => {
        text.innerHTML = `Error! Scan failed to start: ${error}.`;
        color.style.backgroundColor = "#ff0000";
    });
    
} 

// Look if the device have NFC
if ('NDEFReader' in window) {
    const text = document.querySelector("h1");
    text.innerHTML = navigator.permissions.query({name:'nfc'});

    // Look if have permissions for a nfc is granted or not if permissions is not granded make a button that give browser permissions for nfc
    navigator.permissions.query({name:'nfc'}).then((result) => {
        if (result.state === 'granted') {
            text.innerHTML = navigator.permissions.query({name:'nfc'});
            document.body.style.backgroundColor = "#A020F0";
            webWorker();
          
        } else if (result.state === 'prompt') {
            // Show a scan button.
            document.querySelector("#scanButton").style.display = "block";
            document.querySelector("#scanButton").onclick = event => {
                // Prompt user to allow to send and receive info when they tap NFC devices.
                document.querySelector("#scanButton").style.display = "none";
                webWorker();
            };
        }
      });
    
}
else{
    // If device have no nfc reader or browser does not support NDEFReader
    document.body.style.backgroundColor = "#0000ff";
}

function webWorker(){
    if(window.Worker){
        text.innerHTML = navigator.permissions.query({name:'nfc'});
        document.body.style.backgroundColor = "blue";
        workerMessage();
    }
}


function workerMessage(){
    color.style.backgroundColor = "hotpink";
    let worker = new Worker("./worker.js");
    color.style.backgroundColor = "#784212";
    worker.addEventListener("message", function(evt){
        document.body.style.backgroundColor = "red";
            if(evt.data){
                document.body.style.backgroundColor = "yellow";

                if (result.state === 'granted') {

                    if(evt.data === 1){
                        document.body.style.backgroundColor = "green";
                        startScanning();
                    }
                } 

                
            }

    })
}