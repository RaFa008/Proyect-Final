<?php

session_start();
$correo=$_SESSION['correo']=$_GET['correo'];
#echo "$correo";

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

    $correo=$_GET['correo'];
    $password=$_GET['password'];
   
      $queryBusqueda ="select correo,contrasena,tipouser from usuarios where correo='".$correo."'";
      $stmt = $mbd->prepare($queryBusqueda);
      $stmt->execute();

      $row=$stmt->fetch(PDO::FETCH_BOTH);
         $correoR=$row['correo'];
         $contraR=$row['contrasena'];
         $tipo_usuario=$row['tipouser'];

         if($correo ==$correoR  && $password == $contraR){
            echo "$tipo_usuario";
         }else
          {
            echo"0";
         }
?>