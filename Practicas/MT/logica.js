function CuentaRegresiva() {
    var fechaInput = document.getElementById("fecha").value;
    var horaInput = document.getElementById("hora").value;
    var fechaObjetivo = new Date(fechaInput + "T" + horaInput).getTime();

    function actualizarContador() {
        var ahora = new Date().getTime();
        var tiempoRestante = fechaObjetivo - ahora;

        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            document.getElementById("dias").innerHTML = "00";
            document.getElementById("horas").innerHTML = "00";
            document.getElementById("minutos").innerHTML = "00";
            document.getElementById("segundos").innerHTML = "00";
            
            document.getElementById("mensaje").innerHTML = "¡La cuenta regresiva ha terminado!";
            document.getElementById("mensaje").style.color = "green"; 
            return;
        }

        var d = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        var h = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        document.getElementById("dias").innerHTML = d.toString().padStart(2, '0') + " dias";
        document.getElementById("horas").innerHTML = h.toString().padStart(2, '0') + " horas";
        document.getElementById("minutos").innerHTML = m.toString().padStart(2, '0') + " minutos";
        document.getElementById("segundos").innerHTML = s.toString().padStart(2, '0') + " segundos";

        if (tiempoRestante <= 60000) {
            document.getElementById("mensaje").innerHTML = "¡Queda menos de un minuto!";
            document.getElementById("cuenta-regresiva").style.color = "red";
            document.getElementById("cuenta-regresiva").style.fontWeight = "bold";
        }
    }

    actualizarContador();
    const intervalo = setInterval(actualizarContador, 1000);
}

function HabilitarBoton(){
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    if(fecha != "" && hora != ""){
        var fechaHora = new Date(fecha + "T" + hora);
        if(fechaHora.getTime() >= Date.now()){
            document.getElementById("Regresiva").disabled = false;
            document.getElementById("Regresiva").hidden = false;
            document.getElementById("validar").disabled = true;
            document.getElementById("validar").hidden = true;
        }else{
            alert("La fecha y hora ingresada debe ser mayor a la actual");
            Resetearbotones();
        }
    }else{
        document.getElementById("Regresiva").disabled = true;
        document.getElementById("Regresiva").hidden = true;
        alert("Debe ingresar una fecha y una hora para habilitar el botón");
    }
}

function Resetearbotones(){
    document.getElementById("Regresiva").disabled = true;
    document.getElementById("Regresiva").hidden = true;
    document.getElementById("validar").disabled = false;
    document.getElementById("validar").hidden = false;
}