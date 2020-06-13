<?php


$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

 $correo=$_GET['correo'];
 $contrasena=$_GET['contrasena'];


    $queryInsert =" update usuarios set contrasena='".$contrasena."' where correo='".$correo."'";
    
   if($mbd->exec($queryInsert)==true){
       echo "1";
     }else
         {
           echo"0";
         }
?>