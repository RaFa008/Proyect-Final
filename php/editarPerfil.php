<?php

session_start();
$correo=$_SESSION['correo'];
#echo "$correo";

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

  $nombre=$_GET['nombre'];
  $apellidos=$_GET['apellidos'];
  $password=$_GET['password'];


    $queryInsert =" update usuarios set nombre='".$nombre."', apllidos='".$apellidos."',
    contrasena='".$password."' where correo='".$correo."'";
       
      if($mbd->exec($queryInsert)==true){
          echo "1";
        }else
            {
              echo"0";
            }

?>