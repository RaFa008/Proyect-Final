$(document).ready(function () {
    
    
    var imagen =$('#imagen');
    var nomServicio =$('#nomServicio');
    var contenido =$('#contenido');

    //BOTON
    var publiServicio =$('#publiServicio');


    publiServicio.click(function (e) { 
        e.preventDefault();

        if(imagen.val() == "" || nomServicio.val() == "" || contenido.val() == ""){
            alert("todo los campos son obligatorios");
        }else{

            var datos = ('imagen='+imagen.val().replace("C:\\fakepath\\","")+
            '&nomServicio='+nomServicio.val()+'&contenido='+contenido.val());
            //alert(datos);
            //return 0;
            $.ajax({
                type: "get",
                url: "../php/nuevoServicio.php",
                data: datos,
                success: function (respuesta) {
                    if(respuesta == 1){
                        alert("Insercion correcta");
                        imagen.val(" ");
                        nomServicio.val(" ");
                        contenido.val(" ");
                    }else{
                        alert("Error al registrar");
                    }
                    
                }
            });


        }
        
    });
});