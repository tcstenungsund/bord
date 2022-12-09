const fruitBtn = document.getElementById("fruit-btn");
const fruitUrl = "https://creepy-headscarf-hen.cyclic.app/fruit";
const localhost = "http://localhost:8080/fruit";
const contentEl = document.getElementById("api-content");

fruitBtn.addEventListener("click", function () {
  console.log("Fruit-knapp klickad");
  fetch(localhost, {
    method: "GET",
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
      contentEl.innerHTML = res;
    });
});

class putReq {
  async put(url, data) {
    fetch("/", {
      method: "PUT",
      credentials: "include",
    });
  }
}
