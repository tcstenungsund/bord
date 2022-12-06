const fruitBtn = document.getElementById("fruit-btn");
const fruitUrl = "https://creepy-headscarf-hen.cyclic.app/fruit";
const contentEl = document.getElementById("api-content");

fruitBtn.addEventListener("click", function () {
  console.log("Fruit-knapp klickad");
  fetch(fruitUrl, {
    credentials: "include",
    headers: {
      "Content-Type": "text/html",
    },
  })
    .then((data) => {
      return data.text();
    })
    .then((res) => {
      console.log(res);
      console.log(typeof res);
      contentEl.innerHTML = res;
    });
});
