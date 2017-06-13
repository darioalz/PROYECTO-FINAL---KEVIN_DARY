function navegar(liga){
            window.location.assign(liga + '.html');
        }

function verAlerta(titulo,contenido){
    document.getElementById('alerta-titulo').innerHTML = titulo;
    document.getElementById('alerta-mensaje').innerHTML = contenido;
    document.querySelector('.alerta').classList.add('ver');
    setTimeout(function(){
        document.querySelector('.alerta').classList.remove('ver')
    },4000);
}
function guardarUbicacion(){
    verAlerta('Ubicación guardada','Seleccione navegar para ver la ubicación de tu auto.');
    latitud=posicion.coords.latitude;
    longitud= posicion.coords.longitude;
}
function mostrar(){
    var ubicacion=document.getElementById('mapa');
    var mapurl='http://maps.google.com/maps/api/staticmap?center='+
        latitud.coords.latitude+','+longitud.coords.longitude+
        '&zoom=12&size=800x600&sensor=false&markers='+latitud.coords.latitude+
        ','+longitud.coords.longitude;
    ubicacion.innerHTML='<img src="'+mapurl+'">';
}



/*--------------------------------------- REGISTRAR DATOS ----------------------------------------------*/

function guardar() {
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    modelo = document.getElementById('modelo').value;
    anio = document.getElementById('anio').value;
    contrasena = document.getElementById('contrasena').value;
    conContrasena = document.getElementById('conContrasena').value;
    
    
    if (nombre == "" && contrasena == "" && conContrasena == "" || contrasena != conContrasena) {
        
        alert("No es posible continuar, verifique que todos los campos esten completos"+ nombre + correo + modelo + contrasena);
        
    } else {
        
        //SI YA EXISTE EL CONTADOR, ACTUALIZARLO, SI NO, CREARLO
    if(localStorage.getItem('contadorRegistro')) {
        contadorRegistro = localStorage.getItem('contadorRegistro');
        localStorage.setItem('nombre' + contadorRegistro, nombre);
        localStorage.setItem('correo' + contadorRegistro, correo);
        localStorage.setItem('modelo' + contadorRegistro, modelo);
        localStorage.setItem('anio' + contadorRegistro, anio);
        localStorage.setItem('contrasena' + contadorRegistro, contrasena);
        contadorRegistro++;
        localStorage.setItem('contadorRegistro', contadorRegistro);
    } else {
        contadorRegistro = 0;
        localStorage.setItem('nombre' + contadorRegistro, nombre);
        localStorage.setItem('correo' + contadorRegistro, correo);
        localStorage.setItem('modelo' + contadorRegistro, modelo);
        localStorage.setItem('anio' + contadorRegistro, anio);
        localStorage.setItem('contrasena' + contadorRegistro, contrasena);
        contadorRegistro++;
        localStorage.setItem('contadorRegistro', contadorRegistro);
    }
        
        
        alert("Tus datos se guardaron exitosamente");
    
    }
}

/*----------------------------------------- INICIO SESION ----------------------------------------------*/

function recuperarDatos(){
    
    correoSesion = document.getElementById('correoSesion').value;
    contrasenaSesion = document.getElementById('contrasenaSesion').value;
    contadorRegistro = localStorage.getItem('contadorRegistro');
    
        
    for(j=0;j<contadorRegistro;j++){
        
        if ((localStorage.getItem('correo'+j) == correoSesion) && (localStorage.getItem('contrasena'+j) == contrasenaSesion)){
        window.location.assign('perfil.html');
        alert("INICIASTE SESION");
        break;
    }  
}
}