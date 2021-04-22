let info = [];
        // Immediately Invoked Function Expression (IIFE)
        (function(){
            function writeData(favourites){
                let options = ['<option value=""></option>']
                info = favourites
                const select = document.getElementById('select')
                for(let i = 0;i<favourites.length;i++){
                    options.push(`<option value="${favourites[i]["name"]}">${favourites[i]["name"]}</option>`)
                    if(favourites[i]["name"] === "Samuel"){
                        console.log("Hey daddy i want to print the information to the page of the person")
                    }
                }
                select.innerHTML = options

            }

            async function getData(url) {
                return await fetch(url)
                .then(response => response.json())
            }

            getData('https://api.apispreadsheets.com/data/10618/')
            .then(data => writeData(data.data))
            
        })()

        function SubForm (){
            const data = $("#myForm").serializeArray();
            console.log("SubForm", data);
            $.ajax({
                url:'https://api.apispreadsheets.com/data/10618/',
                type:'post',
                data:data,
                success: function(){
                    alert("Your information was submited successfully!!!")
                },
                error: function(){
                    alert("There was an error :( Please report this to Samuel Jey")
                }
            });
        }
        function addInformation(name){
            console.log(name)
            console.log("Your favourite food is " + info.filter(item => item.name === name)[0]["food"])
            console.log("Your favourite hobby is " + info.filter(item => item.name === name)[0]["hobby"])
            console.log("Your favourite animal is " + info.filter(item => item.name === name)[0]["animal"])
            console.log("Your favourite game is " + info.filter(item => item.name === name)[0]["game"])
            console.log("Your image is " + info.filter(item => item.name === name)[0]["image"])
        }