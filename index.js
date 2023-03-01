var letras = document.querySelector("#cuerpo");

document.getElementById("modooscuro").addEventListener("click",activarmodo);

function activarmodo(){
    letras.classList.toggle("bodyoscuro")
    letras.classList.toggle("body");
    letras.classList.toggle("letraoscuro")
}
document.getElementById("experiencia").addEventListener("click",añadir);
var texto =
"<h3>EXPERIENCIA LABORAL</h3>" + "<h5>SAMET S.A</h5>" + "<h6>ABRIL 2018 - SEPTIEMBRE 2018</h6>" +  " <p>pasante en el area de matriceria, rectificado de piezas y mantenimiento.</p> " 

function añadir(){
document.getElementById("experiencia").innerHTML= texto;
}