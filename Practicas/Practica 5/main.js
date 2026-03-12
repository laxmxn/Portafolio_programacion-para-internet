function procesar(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var color = document.getElementById("color").value;
    var range = document.getElementById("rango").value;

    var gusto = document.querySelectorAll('input[name="gustos"]:checked');
    var grupo = document.querySelector('input[name="grupo"]:checked');
    var texto_gusto = "";

    var falta = true;

    if(nombre == ""){
        alert("El campo nombre esta vacio");
    }else if(correo == ""){
        alert("El campo correo esta vacio");
    }else if(fecha == ""){
        alert("El campo fecha esta vacio");
    }else if(gusto.length == 0){
        alert("No se ha seleccionado un gusto");
    }else if(grupo == null){
        alert("No se ha seleccionado un grupo");
    }else if(range == 0){
        alert("No se ha seleccionado un rango");
    }else{
        falta = false;
    }

    for(i=0; i<gusto.length; i++){
        if(gusto[i].checked){
            texto_gusto += gusto[i].value + " ";
        }
    }    
    if(falta == false){
        var tablab = document.getElementById("tabla-body");
        tablab.innerHTML+="<tr><td>"+nombre+"</td>"
                + "<td>"+correo+"</td>"
                + "<td>"+texto_gusto+"</td>"
                + "<td>"+grupo.value+"</td>"
                + "<td>"+fecha+"</td>"
                + "<td>"+color+"</td>"
                + "<td>"+range+"</td></tr>";
    }   
    document.getElementById("registro").reset();
}