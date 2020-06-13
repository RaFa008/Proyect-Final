$(document).ready(function () {
    
    var btnInicio=$('#btnInicio');
    var btnRegistro=$('#btnRegistro');
    var btnCerrar=$('#btnCerrar');
    var btnCita=$('#btnCita');
    var btnPrfil=$('#btnPrfil');
    var btnPrfil=$('#btnPrfil');
    
    var contServicios=$('#contServicios');


        //FUNCION QUE VERIFICA SI HAY UN USUARIO LOGIADO
        function hayUsuario(){
            $.ajax({
                url: "../php/hayUsuario.php",
                success: function (respuesta){
                    if(respuesta==1){
                    //alert("hay usuario");
                    btnRegistro.hide();
                    btnInicio.hide();
                    btnPrfil.show();
                    //hay que modificar el css
                    }else{
                        //alert("no hay usurio");
                        btnInicio.show();
                        btnRegistro.show();
                        btnCerrar.hide();
                        btnPrfil.hide();
                    }
                }
            });
        }

        hayUsuario();


        //FUNCION PARA CARGAR TODOS LOS SERVICIOS
        function cargarSErvicio(){
                $.ajax({
                    url: "../php/cargarServicio.php",
                    success: function (respuesta) {

                        var js = JSON.parse(respuesta);
                       // console.log(js);
                        var tamarreglo=js.length;
                        //console.log(tamarreglo);
                        
                        for (x=0; x<tamarreglo; x++){ 
                        var nombre= js[x].nombre;
                        var informacion = js[x].informacion;
                        var imagen =js[x].imagen;
    
                        //.attr('onclick','selecionado(this)');

                        var div=$('<div></div>').attr('class','servicio');
                        var divImg=$('<div></div>').attr('class','contImg');
                        var info=$('<p></p>').text(informacion).attr('class','textos');
                        var nomServicio=$('<p></p>').text(nombre).attr('class','btnServicio');
                        var img=$('<img/>').attr('class','img').attr('src','../imagenes/'+imagen);


                        contServicios.append(div);
                        div.append(divImg);
                        divImg.append(img);
                        divImg.append(info);
                        div.append(nomServicio);
    
                        
                      }
                    }
                });

        }

        cargarSErvicio();

        //FUNCION PARA CREAR UNA CITA
       btnCita.click(function (e) {
            e.preventDefault();
            //hay que modicar esto despues jajaj o nel depende el timepo
            window.location.replace('../index/solicitarCitas.html');
            
        });

        //FUNCION PARA IR AL PERFIL DE CADA USUARIO
        btnPrfil.click(function (e) { 
            e.preventDefault();
            window.location.replace('../index/menuPerfil.html');
        });


        //FUNCION PARA CERRA SESION 
       btnCerrar.click(function (e) { 
            e.preventDefault();
                datos=('correo='+"");
               // alert(datos);
            $.ajax({
                type: "get",
                url: "../php/cerrarSesion.php",
                data: datos,
                success: function (respuesta){
                    if(respuesta==1){
                    alert("sesion Cerrada");
                    btnRegistro.show();
                    btnInicio.show();
                    btnCerrar.hide();
                    btnPrfil.hide();
                    //hay que modificar el css
                    } 
                }
            });


            
        });

        //FUNCION QUE TE ENVIA AL INICIO DE SESION
       btnInicio.click(function (e) { 
            e.preventDefault();
           // alert("inicio");
            window.location.replace('../index/inicioSesion.html');
            
        });

        //FUNCION QUE TE ENVIA AL REGSITRO DE UN NUEVO USUARIO
        btnRegistro.click(function (e) { 
            e.preventDefault();
            //alert("registra");
            window.location.replace('../index/crearCuenta.html');
        });

});