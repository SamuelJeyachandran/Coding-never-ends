function logIn(){
  const nameField = document.getElementById('name')
  const name = nameField.value
  const pswField = document.getElementById('psw')
  const psw = pswField.value

  async function getData(url) {
    return await fetch(url).then((response) => response.json());
  }
  getData("https://api.apispreadsheets.com/data/10618/").then((data) => {
    let arr = data.data
    let nameArr = arr.map(item => item.name)
    let pswArr = arr.map(item => item.psw)
    let log = document.getElementById("log")
    for(let i = 0;i<name.length;i++){
      if(name === nameArr[i]){
        if(psw === pswArr[i]){
          log.innerHTML = "Logged in!";
        }
        else {
          log.innerHTML = "Wrong password or name";
        }
      }
    }
  });
}