<?php


$usuario = 'root';
#$pass = "1234";
$pass = "";

$mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

  $id=$_GET['id'];
  

  $queryInsert ="DELETE FROM servicios WHERE  idservicio='".$id."'";
    
   if($mbd->exec($queryInsert)==true){
       echo "1";
     }else
         {
           echo"0";
         }
?>