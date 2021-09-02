let info = [];
const lStorage = window.localStorage;
// Immediately Invoked Function Expression (IIFE)
(function () {
  function writeData(favourites) {
    let options = ['<option value=""></option>'];
    info = favourites;
    const select = document.getElementById("select");
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

  getData("https://api.apispreadsheets.com/data/10618/").then((data) =>
    writeData(data.data)
  );
})();
function addInformation(name) {
  let listfavourites = "";
  for (let type = 0; type < 5; type++) {
    let keyname = ["food", "hobby", "animal", "game", "image"];
    if (keyname[type] === "image") {
      listfavourites += `<br><img src="${
        info.filter((item) => item.name === name)[0]["image"]
      }" width=300 alt-"${name}"/>`;
    } else {
      listfavourites += `<li>Your favourite ${keyname[type]} is ${
        info.filter((item) => item.name === name)[0][keyname[type]]
      }</li>`;
    }
    document.getElementById("username").innerHTML = info.filter(
      (item) => item.name === name
    )[0]["name"];
  }
  document.getElementById("list").innerHTML = "<ul>" + listfavourites + "</ul>";
}
async function getData(url) {
  return await fetch(url).then((response) => response.json());
}
getData("https://api.apispreadsheets.com/data/10618/").then((data) => {
  if(lStorage["logged in"] === "true"){
    let arr = data.data
    let nameS = lStorage["name"]
    let nameArr = arr.map(item => item.name)
    let imageArr = arr.map(item => item.image)
    let num = 2
    for(let i = 0;i<nameArr.length;i++){
      if(nameArr[i] === nameS){
        num = i
      }
    }
    let userimage = document.getElementById('userimage')
    userimage.innerHTML = `<img src="/${imageArr[num]}" alt="${nameS}" width="32" height="32">`
  }
});