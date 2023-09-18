//user input
let s1 = document.querySelector(".s1")
//displaying translated output
let s2 = document.querySelector(".s2")
//button for translating the user input
let translate = document.querySelector(".translate")
//api for translation
const url = "https://api.funtranslations.com/translate/yoda.json?text="
translate.addEventListener("click",async () => {
    try{
            let input =s1.value
            let finalurl = url+input
            let object =await(await(await fetch(finalurl)).json()).contents;
            s2.value = object.translated;
            console.log(object);
    }
    catch
        {
            alert("Internet is off");
    }
})
    
 