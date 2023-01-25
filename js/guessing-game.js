const lStorage = window.localStorage;
async function getData(url) {
  return await fetch(url).then((response) => response.json());
}
(function () {
  let num = Math.floor(Math.random() * (100 - 1)) + 1;
  let response = "";
  let howManyTurns = 0;
  let s = "";
  if (lStorage["logged in"] === "true") {
    document.getElementById("needToLogin").hidden = true;
  } else {
    document.getElementById("needToLogin").hidden = false;
  }
  function sendScore() {
    getData("https://api.apispreadsheets.com/data/dWkhejvhEHxMiDPC/").then(
      (data) => {
        let arr = data.data;
        let nameS = lStorage.getItem("name");
        let score = arr.filter((item) => item.name === nameS)[0].score;
        if (score > howManyTurns || score === "No score inputed") {
          fetch("https://api.apispreadsheets.com/data/dWkhejvhEHxMiDPC/", {
            method: "POST",
            body: JSON.stringify({
              data: { score: howManyTurns },
              query: `select*from15972wherename='${lStorage.getItem("name")}'`
            })
          }).then((res) => {
            if (res.status === 201) {
              getUserNameAndLeaderboard();
            } else {
              alert("Please report to Samuel Jey");
            }
          });
        }
      }
    );
  }
  function checkNum(event) {
    const inputField = document.getElementById("inputnum");
    const input = parseInt(inputField.value);
    if (input === num) {
      response = "Congratulations that's the right number";
      howManyTurns++;
      document.getElementById("form").hidden = true;
      document.getElementById(
        "turn"
      ).innerHTML = `You have had ${howManyTurns} turn${s}`;
      document.getElementById("hButton").hidden = false;
      sendScore(); //api.apispreadsheets.com/data/dWkhejvhEHxMiDPC/
    } else if (input > num) {
      response = "go lower";
      howManyTurns++;
    } else if (input < num) {
      response = "go higher";
      howManyTurns++;
    } else {
      response.replace("Oops something is broken");
    }
    inputField.value = "";
    event.preventDefault();
    document.getElementById("answer").innerHTML = response;
    s = "s";
  }
function replay(){
  document.getElementById("form").hidden = false;
}
  const form = document.getElementById("form");
  form.addEventListener("submit", checkNum);
})();
async function getData(url) {
  return await fetch(url).then((response) => response.json());
}
getData("https://api.apispreadsheets.com/data/dWkhejvhEHxMiDPC/").then(
  (data) => {
    const arr = data.data;
    const nameArr = arr.map((item) => item.name);
    const scoreArr = arr.map((item) => item.score);
    let html = `<tr><th>Username</th><th>Best score</th></tr>`;
    const leadeboard = document.getElementById("leaderboard");
    for (let i = 0; i < nameArr.length; i++) {
      html += `<tr><td>${nameArr[i]}</td><td>${scoreArr[i]}</td></tr>`;
    }
    leadeboard.innerHTML = html;
  }
);
getData("https://api.apispreadsheets.com/data/Bk27ZkG3ivue8VMp/").then(
  (data) => {
    let username = document.getElementById("username");
    if (lStorage["logged in"] === "true") {
      const arr = data.data;
      const nameS = lStorage["name"];
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
