function encriptar(){
  var oracion = document.getElementById("encriptador").value.toLowerCase();
  var textoEncriptado= oracion.replace(/e/img, "enter");
  var textoEncriptado= textoEncriptado.replace(/i/img, "imes");
  var textoEncriptado= textoEncriptado.replace(/a/img, "ai");
  var textoEncriptado= textoEncriptado.replace(/o/img, "ober");
  var textoEncriptado= textoEncriptado.replace(/u/img, "ufat");

  document.getElementById("mensajeEncriptado").innerHTML = textoEncriptado;

  document.getElementById("botonCopiar").style.display="show";
  document.getElementById("botonCopiar").style.display  ="inherit";
  document.getElementById("imagenMuneco").style.display="none";
  document.getElementById("mensaje1").style.display="none";
  document.getElementById("mensaje2").style.display="none";
}

function desencriptar(){
  var oracion = document.getElementById("encriptador").value.toLowerCase();
  var textoDesencriptado= oracion.replace(/enter/img, "e");
  var textoDesencriptado= textoDesencriptado.replace(/imes/img, "i");
  var textoDesencriptado= textoDesencriptado.replace(/ai/img, "a");
  var textoDesencriptado= textoDesencriptado.replace(/ober/img, "o");
  var textoDesencriptado= textoDesencriptado.replace(/ufat/img, "u");

  document.getElementById("mensajeEncriptado").innerHTML = textoDesencriptado;
  document.getElementById("botonCopiar").style.display="show";
  document.getElementById("botonCopiar").style.display  ="inherit";
  document.getElementById("imagenMuneco").style.display="none";
  document.getElementById("mensaje1").style.display="none";
  document.getElementById("mensaje2").style.display="none";
}

function copiar(){
  var contenido=document.querySelector("#mensajeEncriptado");
  contenido.select();
  document.execCommand("copy");
}
