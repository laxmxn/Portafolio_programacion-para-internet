
//Calificaciones
function calificar(){
    var calificacion = document.getElementById("calificacion").value;
    x = document.getElementById("demo");


    if(calificacion < 6 && calificacion >=0){
        x.innerHTML = "NA";
    }else if(calificacion >=6 && calificacion<7.5 ){
        x.innerHTML = "S";
    }else if(calificacion >=7.5 && calificacion<9){
        x.innerHTML = "B";
    }else if(calificacion >=9 && calificacion<10){
        x.innerHTML = "MB";
    }else if(calificacion == 10){
        x.innerHTML = "LAP";
    }else{
        alert("Introduce un numero entre 0 y 10")
    }
}
// Calcular factorial
function imprimir(){
    var y = document.getElementById("factorial").value;
    var factorial = parseInt(y);
    x = document.getElementById("demo2");

    if(factorial < 0){
        x.innerHTML = "Factorial no definido para números negativos";
    }else{
        var resultado =  num(factorial);
        x.innerHTML = "El factorial de " + factorial + " es: " + resultado;
    }
    
}

function num(n){
    if(n ==0){
        return 1;
    }else{
        return n * num(n-1);
    }
}
//Imprime formulario
function formulario(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var fecha = document.getElementById("nacimiento").value;
    var color = document.getElementById("color").value;

    x = document.getElementById("demo3");

    x.innerHTML = "Nombre: " + nombre + "<br><br>" + 
                  "Correo: " + correo + "<br><br>" +
                  "Edad: " + edad + "<br><br>" +
                  "Genero: " + genero + "<br><br>" +
                    "Fecha de nacimiento: " + fecha + "<br><br>" +
                    "Color favorito: " + color;
}