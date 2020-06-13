<?php

session_start();
$correo=$_SESSION['correo'];
#echo "$correo";

if($correo!=""){
$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

        $fecha=$_GET['fecha'];
        $hora=$_GET['hora'];
        $asunto=$_GET['asunto'];
        $marcas=$_GET['marcas'];
        $modelo=$_GET['modelo'];
        $ano=$_GET['ano'];
   
      $queryBusqueda ="select correo,iduser from usuarios where correo='".$correo."'";
      $stmt = $mbd->prepare($queryBusqueda);
      $stmt->execute();

      $row=$stmt->fetch(PDO::FETCH_BOTH);
         $correoR=$row['correo'];
         $iduser=$row{'iduser'};

         if($correo ==$correoR){
            #ejecutar guardar query
        $queryInsert ="insert into citas(fecha,hora,asunto,marca,modelo,ano,iduser)
                        values('$fecha','$hora','$asunto','$marcas','$modelo','$ano','$iduser')";
          if($mbd->exec($queryInsert)==true){
            echo "1";
          }else{
            echo"0";
         }
        }
    }else{
    
        echo "2";
    }


?>