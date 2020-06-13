$(document).ready(function () {
    
    var productos=$('#productos');

    function cargarProductos(){
        $.ajax({
            url: "../php/verProducto.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                //console.log(js);
                var tamarreglo=js.length;
                //console.log(tamarreglo);
                
                for (x=0; x<tamarreglo; x++){ 
                var nombrePro = js[x].nombre;
                var cantidad = js[x].cantidad;

                var conte=$('<tr></tr>');
                var nom=$('<td></td>').text(nombrePro);
                var cant=$('<td></td>').text(cantidad);

                productos.append(conte);
                conte.append(nom);
                conte.append(cant);
        
                }
                
            }
        });
    }

    cargarProductos();


});