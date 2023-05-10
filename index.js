let s1 = document.querySelector(".s1")
let s2 = document.querySelector(".s2")
let translate = document.querySelector(".translate")
const url = "https://api.funtranslations.com/translate/yoda.json?text="
translate.addEventListener("click",async () => {
    try{
            let input =s1.value
            let finalurl = url+input
            let object = await(await fetch(finalurl)).json();
            s2.value = await(object.contents.translated);
        }
    catch{
            alert("Internet is off");
         }
    })
    
 