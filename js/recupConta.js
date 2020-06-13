$(document).ready(function () {
    

    var correo=$('#correo');
    var pregunta=$('#pregunta');
    var respuest =$('#respuesta');
    var Recuperar=$('#Recuperar');
    var contasenar=$('#contasenar');
    var Restablecer=$('#Restablecer');


    contasenar.hide();
    Restablecer.hide();

    var corGuarada;


    Recuperar.click(function (e) { 
        e.preventDefault();
        datos=('correo='+correo.val()+'&pregunta='+pregunta.val()+'&respuesta='+respuest.val());
        alert(datos);

        if( correo.val()=="" || pregunta.val() == "" || respuest.val()=="" ){
            alert("Todos los campos son obligatorios");
    
        }else{
                datos=('correo='+correo.val()+'&pregunta='+pregunta.val()+'&respuesta='+respuest.val());
                corGuarada=correo.val();
            $.ajax({
                type: "get",
                url: "../php/compCorreo.php",
                data: datos,
                success: function (respuesta) {
                    if(respuesta == 1){
                        
                        correo.hide();
                        pregunta.val('');
                        pregunta.hide();
                        respuest.hide();
                        respuest.val('');
                        Recuperar.hide();

                        
                        contasenar.show();
                        Restablecer.show();
                    }else{

                        alert("Verifica tus respues no encotramos usuario");

                    }
                }
            });

        }
    });

    Restablecer.click(function (e) { 
        e.preventDefault();
        console.log(corGuarada);
            if(contasenar.val() == ""){
                alert("Todos los campos son obligatorios");
            }else{
                datos=('correo='+corGuarada+'&contrasena='+contasenar.val());
            $.ajax({
            type: "get",
            url: "../php/actualizarContra.php",
            data: datos,
            success: function (respuestas) {
                if(respuestas == 1){
                    alert("Contraseña restablecisa");
                    window.location.replace('../index/inicioSesion.html');
                }else{
                    alert("Error al actualizar la contraseña");
                }
                
            }
        });
    
     }
    });



});