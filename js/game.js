(function(){    
    let num = Math.floor(Math.random() * (100 - 1)) + 1;
    let response = ''
    let howManyTurns = 0
    let s = ''
    let lStorage = window.localStorage
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
        }
        else if(input > num){
            response = "too high";
            howManyTurns++;
        }
        else if(input < num){
            response = "too low";
            howManyTurns++;
        }
        else{
            response.replace("Oops something is broken")
        }

        // clear field value
        inputField.value = ""
        event.preventDefault();
        document.getElementById("answer").innerHTML = response
        s = 's'
    }

    const form = document.getElementById('form');
    form.addEventListener('submit', checkNum);

})()
