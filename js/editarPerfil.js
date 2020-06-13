$(document).ready(function () {
    

    var nombre=$('#nom');
    var apellidos=$('#apellidos');
    var correo=$('#correo');
    var password=$('#password');
    var Actualizar=$('#Actualizar');

    alert("hoal");

        function cargarDatos(){
            $.ajax({
                url: "../php/verificaUser.php",
                success: function (respuesta) {
                    var js = JSON.parse(respuesta);
                    console.log(js);
                     
                    var x=0;
                    var nombreB= js[x].nombre;
                    var apellidosB=js[x].apellidos;
                    var correoB=js[x].correo;
                    var contrasenaB=js[x].contrasena;
                    
                    nombre.val(nombreB);
                    apellidos.val(apellidosB);
                    correo.val(correoB);
                    password.val(contrasenaB);


                }
            });
        }

        cargarDatos();

        //ya funciona
    Actualizar.click(function (e) { 
        e.preventDefault();
        if(nombre.val()=="" || apellidos.val()=="" || password.val() ==""){
            alert("Todos los campos son obligatorios");
        }else{
            var datos = ('nombre='+nombre.val()+'&apellidos='+apellidos.val()+'&password='+password.val());

            $.ajax({
                type: "get",
                url: "../php/editarPerfil.php",
                data: datos,
                success: function (respuesta) {
                    if(respuesta == 1){
                        alert("La actualizacion correcta");

                    }else{
                        alert("Error al actualizar los datos intente nuevamente");
                    }

                }
            });


        }

        
    });


});