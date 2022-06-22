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
  text.hidden = false;
}
