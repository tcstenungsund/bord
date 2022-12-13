import { cardIdNfc } from "./js/main.js";
const contentEl = document.getElementById("api-content");
const fruitBtn = document.getElementById("fruit-btn");

const fruitUrl = "https://creepy-headscarf-hen.cyclic.app/fruit";
const molekylUrl = "https://creepy-headscarf-hen.cyclic.app/molekylverkstan";
const localhostFruit = "http://localhost:8080/fruit";
const localhostMolekyl = "http://localhost:8080/molekylverkstan";

fruitBtn.addEventListener("click", function () {
  console.log("Fruit-knapp klickad");
  fetch(fruitUrl, {
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

const putBtn = document.getElementById("put-btn");
putBtn.addEventListener("click", function () {
  fetch(fruitUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      card_type: "primary_card",
      card_id: "ABC123",
      page_name: "apples",
    }),
  })
    .then((data) => {
      return data.text();
    })
    .then((res) => {
      console.log(res);
    });
});

const sendPutBtn = document.getElementById("send-btn");
sendPutBtn.addEventListener("click", async function putInput() {
  const pageInput = document.getElementById("page-input").value;
  // let idInput = document.getElementById("id-input").value;
  const idInput = await cardIdNfc();
  const isPrimary = document.getElementById("is-primary").checked;
  if (isPrimary) {
    var cardType = "primary_card";
  } else {
    var cardType = "secondary_card";
  }

  fetch(fruitUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
