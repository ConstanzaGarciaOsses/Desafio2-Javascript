var Boton = document.querySelector("#Total");

Boton.addEventListener("click", function(){
    var Input1 = document.querySelector("#Meme1").value;
    var Input2 = document.querySelector("#Meme2").value;
    var Input3 = document.querySelector("#Meme3").value;
    var Total = Number(Input1) + Number(Input2) + Number(Input3); 
    if (Total > 10){
        document.querySelector("#Mensaje").innerHTML="Llevas demasiados stickers."
    }
    else if (Total === 0){
        document.querySelector("#Mensaje").innerHTML="No puedes llevar 0 stickers... Selecciona alguno."
    }
    else if (Total <= 10){
        document.querySelector("#Mensaje").innerHTML="Llevas " + Total + " stickers."
    }
});


