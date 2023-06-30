var BotonValidacion = document.querySelector("#Validacion");

BotonValidacion.addEventListener("click", function(){
    var Num1 = document.querySelector("#numero1").value;
    var Num2 = document.querySelector("#numero2").value;
    var Num3 = document.querySelector("#numero3").value;
    var Contrasenia = Num1.toString() + Num2.toString() + Num3.toString() 
        console.log("Contrasenia");
    if (Contrasenia === "911"){
        document.querySelector("#Mensaje").innerHTML="Password 1 correcto"
    }
    else if (Contrasenia === "714"){
        document.querySelector("#Mensaje").innerHTML="Password 2 correcto"
    }
    else {
        document.querySelector("#Mensaje").innerHTML="Password incorrecto"
    }
});
