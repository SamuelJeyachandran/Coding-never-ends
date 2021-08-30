const lStorage = window.localStorage;
function SubForm() {
  const data = $("#myForm").serializeArray();
  $.ajax({
    url: "https://api.apispreadsheets.com/data/10618/",
    type: "post",
    data: data,
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