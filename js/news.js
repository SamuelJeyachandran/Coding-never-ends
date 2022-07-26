const lStorage = window.localStorage;
const URL_USER_PASSWORD =
  "https://api.apispreadsheets.com/data/Bk27ZkG3ivue8VMp/";

function SubForm() {
  const data = $("#myForm").serializeArray();
  let to = data.map(function (i) {
    return i.value;
  });
  let message = document.getElementById("message").value;
  $.ajax({
    url: "https://api.apispreadsheets.com/data/AJ9W5TR91dnEOgQ5/",
    type: "post",
    data: { From: `${lStorage.name}`, To: `${to}`, Message: `${message}` },
    success: function () {
      alert("Your information was submited successfully!!!");
    },
    error: function () {
      alert("There was an error :( Please report this to Samuel Jey");
    }
  });
}
async function getData(url) {
  return await fetch(url, { cache: "force-cache" }).then((response) =>
    response.json()
  );
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
  async function getData(url) {
    return await fetch(url).then((response) => response.json());
  }
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
      getData("https://api.apispreadsheets.com/data/AJ9W5TR91dnEOgQ5/").then(
        (data) => {
          let arr = data.data;
          let fromArr = arr.map((item) => item.from);
          let messageArr = arr.map((item) => item.message);
          let toArr = arr.map((item) => item.to);
          let html = ["<tr><th>From</th><th>Message</th><th>To</th></tr>"];
          let inputM = document.getElementById("inputM");
          for (let i = 0; i < fromArr.length; i++) {
            let count = html.push(
              `<tr><td>${fromArr[i]}</td><td>${messageArr[i]}</td><td>${toArr[i]}</td></tr>`
            );
          }
          inputM.innerHTML = html;
        }
      );
    }
  );
})();
