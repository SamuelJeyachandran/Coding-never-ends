const lStorage = window.localStorage;
async function getData(url) {
  return await fetch(url).then((response) => response.json());
}
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
    function getScore(){
      getData("https://api.apispreadsheets.com/data/10618/").then((data) => {
        let arr = data.data
        let nameS = lStorage.getItem("name")
        let score = arr.filter(item => item.name === nameS)[0].score
        if(score > howManyTurns || score === "No score inputed") {
          fetch("https://api.apispreadsheets.com/data/15972/", {
            method: "POST",
            body: JSON.stringify({"data": {"score": howManyTurns}, "query": `select*from15972wherename='${lStorage.getItem("name")}'`}),
          }).then(res =>{
            if (res.status === 201){
              alert("GOOD")          }
            else{
              alert("Please report to Samuel Jey")
            }
          })
        }
      })
    }
    function checkNum(event){
      const inputField = document.getElementById('inputnum')
      const input = parseInt(inputField.value)
      if(input === num){
        response = "Congratulations that's the right number";
        howManyTurns++;
        document.getElementById('form').hidden=true
        document.getElementById('turn').innerHTML = `You have had ${howManyTurns} turn${s}`
        document.getElementById('hButton').hidden=false
        getScore()
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
    let scoreArr = arr.map(item => item.score)
    if(lStorage["logged in"] === "true"){
      let imageArr = arr.map(item => item.image)
      let num = 2
      for(let n = 0;n<nameArr.length;n++){
        if(nameArr[n] === nameS){
          num = n
        }
      }
      let userimage = document.getElementById('userimage')
      userimage.innerHTML = `<img src="/favourite/${imageArr[num]}" alt="${nameS}" width="32" height="32">`
    }
    let leadeboard = document.getElementById("leaderboard")
    for(let i = 0;i<nameArr.length;i++){
      leadeboard.innerHTML += `<tr><td>${nameArr[i]}</td><td>${scoreArr[i]}</td></tr>`
    }
  });