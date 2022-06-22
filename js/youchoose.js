const start = document.getElementById("start");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
function startYouChoose() {
  start.hidden = true;
  buttonA.hidden = false;
  buttonB.hidden = false;
  buttonC.hidden = false;
}
function activate(id) {
  buttonA.hidden = true;
  buttonB.hidden = true;
  buttonC.hidden = true;
  const text = document.getElementById("text" + id);
  const text2 = document.getElementById("text2" + id);
  text.hidden = false;
  text2.hidden = false;
}
function replay() {
  buttonA.hidden = true;
  buttonB.hidden = true;
  buttonC.hidden = true;
  start.hidden = false;
  textA.hidden = true;
  textB.hidden = true;
  textC.hidden = true;
  text2A.hidden = true;
  text2B.hidden = true;
  text2C.hidden = true;
}
