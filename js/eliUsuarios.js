$(document).ready(function () {
    
    var promociones=$('#promociones');

    function cargarUsuario(){
        $.ajax({
            url: "../php/cargarUsuarios.php",
            success: function (respuesta) {
                var js = JSON.parse(respuesta);
                console.log(js);
                var tamarreglo=js.length;
                //console.log(tamarreglo);
                
                for (x=0; x<tamarreglo; x++){ 
                
                var id=js[x].id;
                var nombre = js[x].nombre;
                var apellidos = js[x].apellidos;
                var tipouser=js[x].tipouser;
                var us;
                if(tipouser == 1 ){
                    us="Administradro";
                }
                if(tipouser == 2 ){
                    us="Stock";
                }
                if(tipouser == 3 ){
                    us="Usuario";
                }


                var cont=$('<div></div>').attr('class','actuaProducto');
                var nom=$('<input></input>').attr('id','nombre'+id).attr('class','editActua').attr('type','text').val(nombre+" "+apellidos).attr('readonly','readonly');
                var tipouser=$('<input></input>').attr('class','editActua').attr('type','text').val(us).attr('readonly','readonly');
    var boton2=$('<button></button>').attr('id',id).attr('class','btnActu').text('Eliminar').attr('onclick','selecionEliUser(this)');

                promociones.append(cont);
                cont.append(nom)
                cont.append(tipouser);
                cont.append(boton2);
                }

            }
        });
    }

    cargarUsuario();


});