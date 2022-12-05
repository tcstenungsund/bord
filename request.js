const fruitBtn = document.getElementById("fruit-btn");
const fruitURL = "https://creepy-headscarf-hen.cyclic.app/fruit";
const contentEl = document.getElementById("api-content");

fruitBtn.addEventListener("click", function () {
  console.log("Fruit-knapp klickad");
  fetch(fruitURL, {
    credentials: "include",
    headers: {
      "Content-Type": "text/plain",
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(JSON.stringify(res));
      contentEl.innerHTML = JSON.stringify(res);
    });
});
