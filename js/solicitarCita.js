$(document).ready(function () {
    
    var fecha=$('#fecha');
    var hora=$('#hora');
    var asunto=$('#asunto');
    var marcas=$('#marcas');
    var modelo=$('#modelo');
    var ano=$('#ano');
    var RealizarCita=$('#RealizarCita');
    var inicio=$('#inicio');



    RealizarCita.click(function (e) { 
        e.preventDefault();
        if(fecha.val()==""||hora.val()==""||asunto.val()==""||marcas.val()==""||modelo.val()==""||ano.val()==""){
            alert("Todos los campos son obligatorios")
        }else{
            var datos = ('fecha='+fecha.val()+'&hora='+hora.val()+'&asunto='+asunto.val()+'&marcas='+marcas.val()+
                    '&modelo='+modelo.val()+'&ano='+ano.val());
                alert(datos);

            $.ajax({
                type: "get",
                url: "../php/realizarCita.php",
                data: datos,
                success: function (respuesta) {
                    if(respuesta==1){
                        //insercion correcta
                        alert("Cita creada");
                    }if(respuesta==0){
                        //problemas al registrar
                        alert("error al guardar la cita");
                    }if(respuesta==2){
                        //no a iniciado sesion
                        alert("necesitas iniciar sesion generar una cita");
                    }
                    
                }
            });


        }

    });


    inicio.click(function (e) { 
        e.preventDefault();
        window.location.replace('../index/index.html');

        
    });

    
});