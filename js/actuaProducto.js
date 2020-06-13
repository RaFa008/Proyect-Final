$(document).ready(function () {
    
    var promociones=$('#promociones');

    function cargarProducto(){   
        $.ajax({
            url: "../php/verProducto.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                console.log(js);
                var tamarreglo=js.length;
                //console.log(tamarreglo);
                
                for (x=0; x<tamarreglo; x++){ 
                
                var id=js[x].id;
                var nombrePro = js[x].nombre;
                var cantidad = js[x].cantidad;

                var cont=$('<div></div>').attr('class','actuaProducto');
                var nom=$('<input></input>').attr('id','nombre'+id).attr('class','editActua').attr('type','text').val(nombrePro);
                var cantidad=$('<input></input>').attr('id','cantidad'+id).attr('class','editActua').attr('type','number').val(cantidad);
var boton=$('<button></button>').attr('id',id).attr('class','btnActu').text('Actualizar').attr('onclick','selecionado(this)');

                promociones.append(cont);
                cont.append(nom)
                cont.append(cantidad);
                cont.append(boton);
                }

            }
        });

    }

      

    cargarProducto();

});