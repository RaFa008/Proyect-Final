$(document).ready(function () {
    
    var nuevoProducto=$('#nuevoProducto');
    var cantidad=$('#cantidad');
    var publiProducto=$('#publiProducto');




    publiProducto.click(function (e) { 
        e.preventDefault();

        if(nuevoProducto.val()=="" || cantidad.val()==""){
            alert("Todos los campos son obligatorios");
        }else{
            var datos = ('nomProdusto='+nuevoProducto.val()+'&cantidad='+cantidad.val());

            $.ajax({
                type: "get",
                url: "../php/nuevoProducto.php",
                data: datos,
                success: function (respuesta) {
                    if(respuesta==1){
                        alert("producto guardado con exito");
                        nuevoProducto.val('');
                        cantidad.val('');
                    }
                    else{
                        alert("Error al registar producto");
                    }
                }
            });
        }
    });
});