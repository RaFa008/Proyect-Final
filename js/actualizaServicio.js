$(document).ready(function () {
    
    var promociones=$('#promociones');

    function cargarservicio(){   
        $.ajax({
            url: "../php/cargarServicio.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                console.log(js);
                var tamarreglo=js.length;
                //console.log(tamarreglo);
                
                for (x=0; x<tamarreglo; x++){ 
                
                var id=js[x].id;
                var nombreSer = js[x].nombre;
                var informacion = js[x].informacion;

                var cont=$('<div></div>').attr('class','actuaProducto');
                var nom=$('<input></input>').attr('id','nombre'+id).attr('class','editActua').attr('type','text').val(nombreSer);
    var info=$('<textarea ></textarea >').attr('id','info'+id).attr('class','editActua').attr('type','text').val(informacion).attr('cols','30').attr('rows','3');
    var boton=$('<button></button>').attr('id',id).attr('class','btnActu').text('Actualizar').attr('onclick','selecionAct(this)');
    var boton2=$('<button></button>').attr('id',id).attr('class','btnActu').text('Eliminar').attr('onclick','selecionEli(this)');

                promociones.append(cont);
                cont.append(nom)
                cont.append(info);
                cont.append(boton);
                cont.append(boton2);
                }

            }
        });

    }
    cargarservicio();

});