<?php


$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

  $nombre=$_GET['nombre'];
  $informacio=$_GET['informacio'];
  $id=$_GET['id'];
  

    $queryInsert =" update  servicios set nombre='".$nombre."',informacion='".$informacio."' where idservicio='".$id."'";
    
   if($mbd->exec($queryInsert)==true){
       echo "1";
     }else
         {
           echo"0";
         }
?>