import { cardIdNfc } from "./js/main.js";
const contentEl = document.getElementById("api-content");
const fruitBtn = document.getElementById("fruit-btn");

const hostingBase = "https://scary-duck-leotard.cyclic.app/";
const localhostBase = "http://localhost:9090";

// Fetches data from the backend
fruitBtn.addEventListener("click", function () {
  let user = "fruit";
  let exampleCard = "4a:2c:74:1b";
  fetch(`${localhostBase}/${user}/${exampleCard}`, {
    method: "GET",
    headers: {
      "Content-Type": "text/html",
    },
  })
    .then((data) => {
      return data.text();
    })
    .then((res) => {
      contentEl.innerHTML = res;
    });
});

async function startRequest() {
  const idInput = await cardIdNfc();

  if (idInput === "4a:2c:74:1b") {
    fruitBtn.innerHTML = idInput;
  }

  if (idInput !== undefined) {
    try {
      let user = "fruit";
      let card = idInput;
      fetch(`${hostingBase}/${user}/${card}`, {
        method: "GET",
        headers: {
          "Content-Type": "text/html",
        },
      })
        .then((data) => {
          return data.text();
        })
        .then((res) => {
          contentEl.innerHTML = res;
        });
    } catch (error) {
      contentEl.innerHTML = error;
    }
  } else {
    fruitBtn.style.backgroundColor = "yellow";
  }
}

startRequest();

//* Sends pre-specified data to the backend
const putBtn = document.getElementById("put-btn");
putBtn.addEventListener("click", function () {
  fetch(`${localhostBase}/card`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: "molekylverkstan",
      card_type: "primary_card",
      card_id: "ABC123",
      page_name: "about",
    }),
  })
    .then((data) => {
      return data.text();
    })
    .then((res) => {
      console.log(res);
    });
});

//* Sends custom data to the backend
const sendPutBtn = document.getElementById("send-btn");
sendPutBtn.addEventListener("click", async function putInput() {
  const pageInput = document.getElementById("page-input").value;
  const isPrimary = document.getElementById("is-primary").checked;
  const userInput = document.getElementById("user-input").value;
  // const idInput = await cardIdNfc();
  let idInput = document.getElementById("id-input").value;

  if (isPrimary) {
    var cardType = "primary_card";
  } else {
    var cardType = "secondary_card";
  }

  fetch(`${localhostBase}/card`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: userInput,
      card_type: cardType,
      page_name: pageInput,
      card_id: idInput,
    }),
  })
    .then((data) => {
      return data.text();
    })
    .then((res) => {
      console.log(res);
    });
});

//* Refreshes the content of the database with possible changes in the markdown repos
const refreshBtn = document.getElementById("refresh-btn");
// let user = "fruit";
refreshBtn.addEventListener("click", async () => {
  fetch(`${localhostBase}/refresh`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data.text();
    })
    .then((res) => {
      console.log(res);
    });
});
