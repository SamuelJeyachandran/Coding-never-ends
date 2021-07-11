const lStorage = window.localStorage;
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
  
      console.log(nameArr[num], imageArr[num], lStorage);
      let userimage = document.getElementById('userimage')
      userimage.innerHTML = `<img src="/favourite/${imageArr[num]}" alt="${nameS}" width="32" height="32">`
      console.log(userimage)
    }
  });