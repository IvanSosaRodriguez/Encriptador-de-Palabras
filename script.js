function encriptar (){
    var texto = document.querySelector("#input-text").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#output-text").value = textoCifrado;
    document.querySelector("#input-text").value;
    let i = true
    if(i=true){
        document.getElementById("esconder").style.display = "none";
        document.getElementById("output-text").style.display = "block";
        i=false
    }
}

var boton1 = document.querySelector("#button-a"); 

boton1.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector("#input-text").value; 
var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
document.querySelector("#output-text").value = textoCifrado; 
document.querySelector("#input-text").value;

}

var boton2 = document.querySelector("#button-b"); 

boton2.onclick = desencriptar;