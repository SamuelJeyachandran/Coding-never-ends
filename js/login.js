const lStorage = window.localStorage;
function logIn() {
  const nameField = document.getElementById("selectName");
  const name = nameField.value;
  const pswField = document.getElementById("psw");
  const psw = pswField.value;
  async function getData(url) {
    return await fetch(url).then((response) => response.json());
  }
  getData("https://api.apispreadsheets.com/data/Bk27ZkG3ivue8VMp/").then(
    (data) => {
      let arr = data.data;
      let nameArr = arr.map((item) => item.name);
      let pswArr = arr.map((item) => item.psw);
      let log = document.getElementById("log");
      for (let i = 0; i < nameArr.length; i++) {
        if (name === nameArr[i]) {
          if (psw === pswArr[i]) {
            log.innerHTML = "Logged in!";
            lStorage.setItem("logged in", true);
            lStorage.setItem("name", name);
            lStorage.setItem("score", 100);
          } else {
            log.innerHTML = "Wrong password or name";
          }
        }
      }
    }
  );
}
async function getData(url) {
  return await fetch(url).then((response) => response.json());
}
let info = [];
(function () {
  function writeData(favourites) {
    let options = ['<option value=""></option>'];
    info = favourites;
    const select = document.getElementById("selectName");
    for (let i = 0; i < favourites.length; i++) {
      options.push(
        `<option value="${favourites[i]["name"]}">${favourites[i]["name"]}</option>`
      );
    }

    select.innerHTML = options;
  }
  getData("https://api.apispreadsheets.com/data/Bk27ZkG3ivue8VMp/").then(
    (data) => writeData(data.data)
  );
})();
document.getElementById("logout").addEventListener("click", function () {
  lStorage.clear();
  logout.hidden = true;
  username.innerHTML = `<p><-- Go Here to Log In ^_^</p>`;
});
getData("https://api.apispreadsheets.com/data/Bk27ZkG3ivue8VMp/").then(
  (data) => {
    let username = document.getElementById("username");
    if (lStorage["logged in"] === "true") {
      let arr = data.data;
      let nameS = lStorage["name"];
      let nameArr = arr.map((item) => item.name);
      let num = 2;
      for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i] === nameS) {
          num = i;
        }
      }
      if (username) {
        logout.hidden = false;
        username.innerHTML = `<p>You are logged in as <strong>${nameS}</strong></p>`;
      }
    } else {
      if (username) {
        username.innerHTML = `<p><-- Go Here to Log In ^_^</p>`;
      }
    }
  }
);
