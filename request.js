const contentEl = document.getElementById("api-content");
const fruitBtn = document.getElementById("fruit-btn");

const fruitUrl = "https://creepy-headscarf-hen.cyclic.app/fruit";
const localhost = "http://localhost:8080/fruit";

fruitBtn.addEventListener("click", function () {
  console.log("Fruit-knapp klickad");
  fetch(localhost, {
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
  fetch(localhost, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      card_type: "primary_card",
      card_id: "ABC123",
      page_name: "apples",
    }),
  });
});

const sendPutBtn = document.getElementById("send-btn");
sendPutBtn.addEventListener("click", function putInput() {
  const pageInput = document.getElementById("page-input").value;
  const idInput = document.getElementById("id-input").value;
  const isPrimary = document.getElementById("is-primary").checked;
  if (isPrimary) {
    var cardType = "primary_card";
  } else {
    var cardType = "secondary_card";
  }
  console.log("🚀 ~ putInput ~ pageInput", pageInput);
  console.log("🚀 ~ putInput ~ idInput", idInput);
  console.log("🚀 ~ putInput ~ cardType", cardType);

  fetch(localhost, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      card_type: cardType,
      page_name: pageInput,
      card_id: idInput,
    }),
  });
  return;
});
