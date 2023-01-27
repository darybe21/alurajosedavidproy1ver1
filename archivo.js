//archivo en js . aqui se define la logica //
//asocia las class en cada variable para su asignacion a la funcion establecida//
var botonEncriptar= document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var muneico = document.querySelector(".contenedor-muneico");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

// aqui se define la funcion a la accion de cada boton //
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

// funcion encriptar/
function encriptar() {
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area); 
    
}
// funcion desencriptar//
function desencriptar(){

    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);  

}
//funcion copiar//
function copiar(){
    
    var contenido = document.querySelector(".texto-resultado").innerText;
   
    //document.getElementsByClassName(".area").innerHTML = contenido;//
    navigator.clipboard.writeText(contenido);
    alert("se copia el texto ");
}
//funcion recuperar texto//
// toma el texto ingresado y lo asigna a variable area //
function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}
//funcion ocultarAdelante , esconde el muñeco y las demas areas //
//para q le permitan q aprezca el texto ingresado y convertido//
function ocultarAdelante(){
    muneico.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
//funcion encriptarTexto ..cambia las vocales a las cadenas definidas//
function encriptarTexto(mensaje){
    var texto="";
    texto = mensaje;
    var textoFinal = "";
   
   
    for (var i=0; i < texto.length; i=i+1){
        // letra por letra hace la busqueda de las vocales//
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
//function desencriptarTexto ...texto convertido lo pasa a vocales //
function desencriptarTexto(mensaje){
    var texto="";
    texto = mensaje;
    var textoFinal = "";
   
   
    for (var i=0; i < texto.length; i=i+1){
        //considerar q le suma la cantidad de letras de la clave para q el indice//
        //salte la cadena convertida //
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

