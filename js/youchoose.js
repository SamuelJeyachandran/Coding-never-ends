const start = document.getElementById("start");
const passageway1 = document.getElementById("passageway1");
const again = document.getElementById("again");
const hback = document.getElementById("back");

function startYouChoose() {
  start.hidden = true;
  passageway1.hidden = false;
  again.hidden = false;
  hback.hidden = false;
}
function activate(id) {
  passageway1.hidden = true;
  const text = document.getElementById("text" + id);
  const text2 = document.getElementById("text2" + id);
  text.hidden = false;
  text2.hidden = false;
}
function replay() {
  passageway1.hidden = true;
  start.hidden = false;
  textA.hidden = true;
  textB.hidden = true;
  textC.hidden = true;
  text2A.hidden = true;
  text2B.hidden = true;
  text2C.hidden = true;
  again.hidden = true;
  hback.hidden = true;
}
function back() {
  if (passageway1.hidden === true) {
    passageway1.hidden = false;
    textA.hidden = true;
    textB.hidden = true;
    textC.hidden = true;
    text2A.hidden = true;
    text2B.hidden = true;
    text2C.hidden = true;
    return;
  }
  if ((start.hidden = true)) {
    again.hidden = true;
    hback.hidden = true;
    start.hidden = false;
    passageway1.hidden = true;
  }
}
