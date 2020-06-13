$(document).ready(function () {
    var promociones=$('#promociones');

    function cargarCitas(){
    $.ajax({
        url: "../php/citasUser.php",
        success: function (respuesta) {
            var js = JSON.parse(respuesta);
            //console.log(js);
            var tamarreglo=js.length;
            //console.log(tamarreglo);
            
            for (x=0; x<tamarreglo; x++){ 
            var fechaUser= js[x].fecha;1
            var HoraUser = js[x].hora;
            var idCita =js[x].idcita;

            
            var div=$('<div></div>').attr('id',idCita).attr('class','citaUser');//.attr('onclick','selecionado(this)');
            var fech=$('<span></span>').text('Fecha: '+ fechaUser);
            var espacio=$('<br/>');
            var time=$('<span></span>').text('Hora: '+HoraUser);

            promociones.append(div);
            div.append(fech);
            div.append(espacio);
            div.append(time);
    
              }
            
           }
        });
    
    }
cargarCitas();

});