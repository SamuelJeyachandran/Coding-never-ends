const lStorage = window.localStorage;
const UrlSheet = "https://api.apispreadsheets.com/data/Bk27ZkG3ivue8VMp/";

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
  getData(UrlSheet).then((data) => writeData(data.data));
})();
getData(UrlSheet).then((data) => {
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
    let userimage = document.getElementById("userimage");
    userimage.innerHTML = `<p>You are logged in as <strong>${nameS}</strong></p>`;
  }
});
