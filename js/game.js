(function(){    
    let num = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(num)
    function checkNum(event){
    
        const inputField = document.getElementById('inputnum')
        const input = parseInt(inputField.value)
        console.log(input)
        if(input === num){
            console.log("Congratulations that's the right number")
        }
        else if(input > num){
            console.log("too high")
        }
        else if(input < num){
            console.log("too low")
        }
        else{
            console.log("Oops something is broken")
        }

        // clear field value
        inputField.value = ""
        event.preventDefault();
    }

    const form = document.getElementById('form');
    form.addEventListener('submit', checkNum);

})()
