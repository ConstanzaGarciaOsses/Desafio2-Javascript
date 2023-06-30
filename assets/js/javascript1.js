// DESAFIO 2 -- PARTE 1: SIRENAS

var Sirena = document.querySelector("#Sirena");
    console.log(Sirena);


Sirena.addEventListener("click", function(){
    if (Sirena.style.border === "2px solid red"){
        Sirena.style.border = "0px solid red"; // La otra opcion es poner none. 
        }
    else{
        Sirena.style.border = "2px solid red";
    }
});
