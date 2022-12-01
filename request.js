const fruitBtn = document.getElementById("fruit-btn");
const fruitURL = "http://creepy-headscarf-hen.cyclic.app/fruit";

fruitBtn.addEventListener("click", function () {
  console.log("Fruit-knapp klickad");
  fetch(fruitURL)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
    });
});
