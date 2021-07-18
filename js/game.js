const lStorage = window.localStorage;
(function(){    
    let num = Math.floor(Math.random() * (100 - 1)) + 1;
    let response = ''
    let howManyTurns = 0
    let s = ''
    if(lStorage["logged in"] === "true"){
        document.getElementById('needToLogin').hidden=true
    }
    else{
        document.getElementById('needToLogin').hidden=false
    }
    function checkNum(event){
      const inputField = document.getElementById('inputnum')
      const input = parseInt(inputField.value)
      if(input === num){
        response = "Congratulations that's the right number";
        howManyTurns++;
        document.getElementById('form').hidden=true
        document.getElementById("turn").innerHTML = `You have had ${howManyTurns} turn${s}`
        document.getElementById('hButton').hidden=false
        if(lStorage.getItem("score"+lStorage.getItem("name")) === "No score inputed"){
          lStorage.setItem("score"+lStorage.getItem("name"), howManyTurns)
        }
        else if(howManyTurns<lStorage.getItem("score"+lStorage.getItem("name"))){
          lStorage.setItem("score"+lStorage.getItem("name"), howManyTurns)
        }
      }
      else if(input > num){
        response = "go lower";
        howManyTurns++;
      }
      else if(input < num){
        response = "go higher";
        howManyTurns++;
      }
      else{
        response.replace("Oops something is broken")
      }
      inputField.value = ""
      event.preventDefault();
      document.getElementById("answer").innerHTML = response
      s = 's'
    }

    const form = document.getElementById('form');
    form.addEventListener('submit', checkNum);

})()
async function getData(url) {
    return await fetch(url).then((response) => response.json());
  }
  getData("https://api.apispreadsheets.com/data/10618/").then((data) => {
    let arr = data.data
    let nameS = lStorage["name"]
    let nameArr = arr.map(item => item.name)
    if(lStorage["logged in"] === "true"){
      let imageArr = arr.map(item => item.image)
      let num = 2
      for(let i = 0;i<nameArr.length;i++){
        if(nameArr[i] === nameS){
          num = i
        }
      }
      let userimage = document.getElementById('userimage')
      userimage.innerHTML = `<img src="/favourite/${imageArr[num]}" alt="${nameS}" width="32" height="32">`
    }
    let leadeboard = document.getElementById("leaderboard")
    for(let i = 0;i<nameArr.length;i++){
      leadeboard.innerHTML += `<tr><td>${nameArr[i]}</td><td>${lStorage.getItem("score"+nameArr[i])}</td></tr>`
      if(lStorage.getItem("score"+nameArr[i]) === null){
        lStorage.setItem("score"+nameArr[i], "No score inputed")
      }
    }
  });