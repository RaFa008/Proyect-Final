$(document).ready(function () {
    
    //contenedor
    var promociones=$('#promociones');


    //BOTONES
    var menuPrincipal=$('#menuPrincipal');
    var verCitasUser=$('#verCitasUser');
    var verCitasAdm=$('#verCitasAdm');
    var NuevoServicio=$('#NuevoServicio');
    var NUevoUSuario =$('#NUevoUSuario');
    var verAlmacen=$('#verAlmacen');
    var realCita=$('#realCita');
    var regProducto=$('#regProducto');
    var perfil=$('#perfil');
    var actProducto=$('#actProducto');
    var ActualizaSer=$('#ActualizaSer');
    var usuarios=$('#usuarios');

    
    //DATOS
    var nom=$('#nombre');
    var ape=$('#apellido')

    //FUNCION QUE CARGA DATOS Y VERIFICA EL TIPO DE USUARIOS
    function verificaUser(){
        $.ajax({
            url: "../php/verificaUser.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                //console.log(js);
                var x=0;
                var nombre= js[x].nombre;
                var apellidos=js[x].apellidos;
                var tipoUsuer=js[x].tipouser;

                nom.text(nombre);
                ape.text(apellidos);


                if(tipoUsuer == "1" ){
                    //alert("eres un administradro");
                    verCitasUser.hide();
                    realCita.hide();
                    regProducto.hide();
                    actProducto.hide();

                    
                    
                }if(tipoUsuer== "2"){
                    //alert("eres stok");
                    verCitasUser.hide();
                    verCitasAdm.hide();
                    NuevoServicio.hide();
                    NUevoUSuario.hide();
                    verAlmacen.hide();
                    realCita.hide();
                    regProducto.show();
                    actProducto.show();
                    ActualizaSer.hide();
                    usuarios.hide();


                }if(tipoUsuer === "3"){
                    //alert("eres usuario");
                    verCitasUser.show();
                    verCitasAdm.hide();
                    NuevoServicio.hide();
                    NUevoUSuario.hide();
                    verAlmacen.hide();
                    realCita.show();   
                    regProducto.hide();
                    actProducto.hide();
                    ActualizaSer.hide();
                    usuarios.hide();

                }
            }
        });
    }

    verificaUser();

    //FUNCION PARA MOSTRAR EL MENU PRINCIPAL
    menuPrincipal.click(function (e) { 
        e.preventDefault();
        window.location.replace('../index/index.html');
    });


    //FUNCION PARA SOLICITAR CITA
    realCita.click(function (e) { 
        e.preventDefault();
        window.location.replace('../index/solicitarCitas.html');
        
    });


        //FUNCION PARA BER LAS CITAS POR PARTE DEL USUARIO
        verCitasUser.click(function (e) { 
            e.preventDefault();

            $.ajax({
                url: "../index/citasUser.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);        
                }
            });
            
            
        });


        //FUNCION PARA LLAMAR EL HTML PARA CREAR UN NUEVO SERVICIO
        NuevoServicio.click(function (e) { 
            e.preventDefault();

            $.ajax({
                url: "../index/nuevoServicio.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);        
                }
            });
             
        });

        //fUNCION PARA LLAMAR EL HTML PARA CREAR NUEVO USUARIO
        NUevoUSuario.click(function (e) { 
            e.preventDefault();
            $.ajax({
                url: "../index/nuevoUser.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);        
                }
            });
             
        });

        //FUNCION PARA LLAMAR EL REGISTRAR NUEVO PRODUCTO
        regProducto.click(function (e) { 
            e.preventDefault();
            $.ajax({
                url: "../index/regitrarProducto.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);        
                }
            });
            
        });

        //FUNCION PARA VER LO QUE TENEMOS EN ALMACEN
        verAlmacen.click(function (e) { 
            e.preventDefault();
            $.ajax({
                url: "../index/verProductos.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);        
                }
            });
            
        });

        //FUNCION PARA VER CITAS
        verCitasAdm.click(function (e) { 
            e.preventDefault();

            $.ajax({
                url: "../index/citasAdmi.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);        
                }
            });
            
        });

        //FUNCION QUE LLAMA EL HTML PARA EDITAR PERFIL 
        perfil.click(function (e) { 
            e.preventDefault();
            $.ajax({
                url: "../index/editarPerfil.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                        
                      },200);        
                    
                }
            });
        });

        //FUNCION QUE LLAMA EL HTML PARA ACTUALIZAR PRODUTOS
        actProducto.click(function (e) { 
            e.preventDefault();
            $.ajax({
                url: "../index/actualizarProducto.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);             
                }
            });
            
        });

        //FUNCION QUE LLAMA EL HTML PARA ACTUALIZAR SERVICIOS
        ActualizaSer.click(function (e) { 
            e.preventDefault();
            $.ajax({
                url: "../index/actualizaServicio.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);             
                }
            });
        });

        //FUCION PARA ELIMINAR USUARIOS
        usuarios.click(function (e) { 
            e.preventDefault();
            $.ajax({
                url: "../index/eliUsuarios.html",
                success: function (datos) {
                    setTimeout(function() {
                        promociones.html(datos);
                      },200);             
                }
            });
            
        });
        
    
});