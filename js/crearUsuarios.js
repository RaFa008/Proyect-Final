$(document).ready(function () {
    
    var nombre=$('#nombre')
    var apellidos=$('#apellidos')
    var correo=$('#correo')
    var password=$('#password')
    var pregunta=$('#pregunta')
    var respuesta=$('#respuesta')
    var CrearCuenta=$('#CrearCuenta')


    CrearCuenta.click(function(event){
        event.preventDefault();
if(nombre.val()=="" || apellidos.val()=="" || correo.val()=="" || password.val()=="" || pregunta.val()=="" || respuesta.val()==""){
            alert("Todos los campos son obligatorios");
        }else{
            var datos = ('nombre='+nombre.val()+'&apellidos='+apellidos.val()+'&correo='+correo.val()+'&password='+password.val()+
            '&pregunta='+pregunta.val()+'&respuesta='+respuesta.val());
            //alert(datos);
            $.ajax({
                    type: "post",
                    url: "../php/crearUsuarios.php",
                    data: datos,
                success: function (respuestas) {
                    if (respuestas==1) {
                        alert("BIENVENIDO GRACIAS POR REGISTARTE")
                        console.log("los dato se gusardaron con exito");
                        nombre.val('');
                        apellidos.val('');
                        correo.val('');
                        password.val('');
                        pregunta.val('');
                        respuesta.val('');
                        window.location.replace('../index/inicioSesion.html');
                }else{
                    alert("CORREO YA REGISTRADO,INTENTE CON OTRO");
                    console.log("erro al guardar los datos");
                }
             }
          
            });
            
        }
    
    })

});