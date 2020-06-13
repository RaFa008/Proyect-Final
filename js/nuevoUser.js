$(document).ready(function () {
    
    var Nombres=$('#nombreUser');
    var Apellido=$('#apellidoUser');
    var correo=$('#correo');
    var password=$('#contrasena');
    var selectUSer=$('#tipoUser');


    var nuevoUser=$('#nuevoUser');


    nuevoUser.click(function (e) { 
        e.preventDefault();
        var datos = ('Nombre='+Nombres.val()+'&Apellidos='+Apellido.val()+'&correo='+correo.val()+'&password='+password.val()+
            '&selectUser='+selectUSer.val());
            alert(datos);
        if(Nombres.val()=='' || Apellido.val()=='' || correo.val()=='' || password.val()=='' || selectUSer.val()==''){
            alert("Todos los campos son necesarios");
        }else{
            var datos = ('Nombre='+Nombres.val()+'&Apellidos='+Apellido.val()+'&correo='+correo.val()+'&password='+password.val()+
            '&selectUser='+selectUSer.val());
            $.ajax({
                type: "get",
                url: "../php/nuevoUser.php",
                data: datos,
                success: function (respuesta) {
                    if(respuesta == 1){
                        alert("Registro exitoso");
                        Nombres.val('');
                        Apellido.val('');
                        correo.val('');
                        password.val('');
                        selectUSer.val('');
                        
                    }if(respuesta == 2){
                        alert("Error al crear uasuario");
                    }if(respuesta == 0){
                        alert("Usuario ya registrado intente de nuevo");
                    }
                }
            });
        }
    });



});