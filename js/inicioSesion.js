$(document).ready(function () {
    

    var correo=$('#correo');
    var password=$('#password');
    var inicio=$('#inicio');
    var crearCuenta=$('#crearCuenta');
    var recuperarCuenta=$('#recuperarCuenta');

    crearCuenta.click(function (e) { 
        e.preventDefault();
        window.location.replace('../index/crearCuenta.html');
    });


   inicio.click(function (e) { 
        e.preventDefault();
        if(correo.val()=="" || password.val()==""){
            alert("Todos los campos son obligatorios");
        }else{
            var datos=('correo='+correo.val()+'&password='+password.val());
            //alert(datos);
            $.ajax({
                type: "get",
                url: "../php/iniciarSesion.php",
                data: datos,
                success: function (respuesta) {
                    if (respuesta==1) {
                        alert("BIENVENIDO Administrador")
                        window.location.replace('../index/index.html');
                        correo.val('');
                        password.val('');
                    }if(respuesta==2){
                        alert("BIENVENIDO stoker")
                        window.location.replace('../index/index.html');
                        correo.val('');
                        password.val('');
                    }if(respuesta==3){
                        alert("BIENVENIDO usuario")
                        correo.val('');
                        password.val('');
                        window.location.replace('../index/index.html');
                    }if(respuesta==0){
                        alert(" verifica tu correo y contraseña, error al iniciar sesion");
                    }
                }
            });

        }
    });

    recuperarCuenta.click(function (e) { 
        e.preventDefault();
        window.location.replace('../index/recupConta.html');
    });





});