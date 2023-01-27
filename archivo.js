var botonEncriptar= document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var muneico = document.querySelector(".contenedor-muneico");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar() {
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area); 
    area=""; 
}

function desencriptar(){

    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);  

}
function copiar(){
    
    var contenido = document.querySelector(".texto-resultado").innerText;
   
    //document.getElementsByClassName(".area").innerHTML = contenido;//
    navigator.clipboard.writeText(contenido);
    alert("se copia el texto ");
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    muneico.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto="";
    texto = mensaje;
    var textoFinal = "";
   
   
    for (var i=0; i < texto.length; i=i+1){
        
        if(texto[i] =="a"){
            textoFinal = textoFinal + "ai";
        } 
        else if (texto[i]=="e") {
            textoFinal = textoFinal + "enter";
        }
                
        else if (texto[i]=="i") {
            textoFinal = textoFinal + "imes";
        }

        else if (texto[i]=="o") {
            textoFinal = textoFinal + "ober";
        }

        else if (texto[i]=="u") {
            textoFinal = textoFinal + "ufat";
        }

        else {
            textoFinal=textoFinal + texto[i];
        }
      
    }
    
    
    
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto="";
    texto = mensaje;
    var textoFinal = "";
   
   
    for (var i=0; i < texto.length; i=i+1){
        
        if(texto[i] =="a"){
            textoFinal = textoFinal + "a";
            i=i+1;
        } 
        else if (texto[i]=="e") {
            textoFinal = textoFinal + "e";
            i=i+4;
        }
                
        else if (texto[i]=="i") {
            textoFinal = textoFinal + "i";
            i=i+3;
        }

        else if (texto[i]=="o") {
            textoFinal = textoFinal + "o";
            i=i+3;
        }

        else if (texto[i]=="u") {
            textoFinal = textoFinal + "u";
            i=i+3;
        }

        else {
            textoFinal=textoFinal + texto[i];
        }
      
    }
    
    
    
    return textoFinal;

}

