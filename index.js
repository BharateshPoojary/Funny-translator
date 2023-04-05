var s1 = document.querySelector(".s1")
var s2 = document.querySelector(".s2")
var translate = document.querySelector(".translate")
var url = "https://api.funtranslations.com/translate/yoda.json?text="

translate.addEventListener("click",function fun(){
    var input =s1.value
    var finalurl = url+input
    fetch(finalurl)//return  promise
    .then(function print(pr){
        return pr.json();
    })
    .then(function out(op){
         s2.value = op.contents.translated

    })
    .catch{
        alert("Make sure you are connected to the internet")
    }
})
 