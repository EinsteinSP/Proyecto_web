function mostrarTratamiento(tratamiento){

let detalle=document.getElementById("detalle");
let titulo=document.getElementById("titulo");
let imagen=document.getElementById("imagen");
let texto=document.getElementById("texto");
let precio=document.getElementById("precio");
let duracion=document.getElementById("duracion");
let beneficios=document.getElementById("beneficios");
let inforamcion=document.getElementById("informacion");

switch(tratamiento){

case "limpieza":
detalle.scrollIntoView({
    behavior:"smooth",
    block: "center"
});
titulo.innerHTML="Limpieza Dental";
imagen.src="../img/tratamientos/limpieza_dental.png";
texto.innerHTML="Mantén tu sonrisa saludable con nuestro servicio de limpieza dental profesional. Eliminamos la placa bacteriana, el sarro y las manchas superficiales.";
precio.innerHTML="S/. 80";
duracion.innerHTML="30 - 45 minutos";
beneficios.innerHTML="Previene caries y enfermedades de las encías, elimina manchas superficiales y mejora la salud bucal.";
informacion.href="limpieza_dental/index.html";
break;

case "blanqueamiento":

case "limpieza":
detalle.scrollIntoView({
    behavior:"smooth",
    block: "center"
});
titulo.innerHTML="Blanqueamiento Dental";
imagen.src="../img/tratamientos/blancamiento_dental.png";
texto.innerHTML="Aclara el color de los dientes y mejora la apariencia de tu sonrisa de forma segura.";
precio.innerHTML="S/. 250";
duracion.innerHTML="1 hora";
beneficios.innerHTML="Sonrisa más brillante, eliminación de manchas y mayor confianza al sonreír.";
informacion.href="blanqueamiento_dental/index.html";
break;

case "curaciones":

case "limpieza":
detalle.scrollIntoView({
    behavior:"smooth",
    block: "center"
});
titulo.innerHTML="Curaciones Estéticas";
imagen.src="../img/tratamientos/curaciones_esteticas.png";
texto.innerHTML="Restauramos dientes afectados por caries o fracturas utilizando materiales del color natural del diente.";
precio.innerHTML="S/. 100";
duracion.innerHTML="40 - 60 minutos";
beneficios.innerHTML="Recupera la funcionalidad del diente, mejora la estética y evita daños mayores.";
informacion.href="curaciones_esteticas/index.html";
break;

case "endodoncia":

case "limpieza":
detalle.scrollIntoView({
    behavior:"smooth",
    block: "center"
});
titulo.innerHTML="Endodoncia";
imagen.src="../img/tratamientos/endodoncia.png";
texto.innerHTML="Tratamiento que permite salvar dientes dañados o infectados eliminando el tejido afectado.";
precio.innerHTML="S/. 350";
duracion.innerHTML="1 - 2 horas";
beneficios.innerHTML="Evita la pérdida del diente, elimina el dolor y recupera la función dental.";
informacion.href="endodoncia/index.html";
break;

case "coronas":

case "limpieza":
detalle.scrollIntoView({
    behavior:"smooth",
    block: "center"
});
titulo.innerHTML="Coronas y Prótesis";
imagen.src="../img/tratamientos/coronas_y_protesis.png";
texto.innerHTML="Recupera la función y estética de tu sonrisa mediante coronas y prótesis dentales.";
precio.innerHTML="Desde S/. 600";
duracion.innerHTML="2 a 3 sesiones";
beneficios.innerHTML="Reemplaza dientes perdidos, mejora la masticación y devuelve una sonrisa natural.";
informacion.href="coronas_protesis/index.html";
break;

case "extracciones":

case "limpieza":
detalle.scrollIntoView({
    behavior:"smooth",
    block: "center"
});
titulo.innerHTML="Extracciones";
imagen.src="../img/tratamientos/extraciones.png";
texto.innerHTML="Realizamos extracciones dentales de forma segura y profesional cuando una pieza no puede ser recuperada.";
precio.innerHTML="Desde S/. 120";
duracion.innerHTML="30 - 60 minutos";
beneficios.innerHTML="Elimina infecciones, alivia el dolor y previene complicaciones futuras.";
informacion.href="extracciones/index.html";
break;

}

}