var nombre = prompt("Nombre del Estudiante");
var edad = prompt("edad");
var grado = prompt("grado");
alert("su nombre es "+nombre);
alert("su edad es "+edad);
alert("su grado es "+grado);

alert("ingrese nombre materia 1 ");

var materia1 = prompt("Nombre Materia");
var nota1 = parseInt(prompt("nota1"));
var nota2 = parseInt(prompt("nota2"));
var nota3 = parseInt(prompt("nota3"));
var promedio = ((nota1+nota2+nota3)/3)
alert("\n nombre"+ nombre+"\n edad"+ edad+"\n grado"+ grado+"\n materia1"+ materia1+"\n calificacion final es: "+promedio);

alert("ingrese nombre materia 2");
var materia2 = prompt("Nombre Materia 2");

var nota1 = parseInt(prompt("nota1"));
var nota2 = parseInt(prompt("nota2"));
var nota3 = parseInt(prompt("nota3"));
var nota4 = parseInt(prompt("nota4"));
alert("\n nombre"+nombre+"\n edad"+edad+"\n grado"+grado+"\n materia 2"+materia2+"\n calificacion final es: "+(nota1+nota2+nota3+nota4)/4*25);