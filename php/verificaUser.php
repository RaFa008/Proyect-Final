<?php

session_start();
$correo=$_SESSION['correo'];
#echo "$correo";

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

       $query ="select *from usuarios where correo='".$correo."'";
      $stmt = $mbd->prepare($query);
      $stmt->execute();
  
    $res=array();
    while ($row=$stmt->fetch(PDO::FETCH_OBJ)){  
      $res[]=array(
            "nombre"=> $row->nombre,
            "apellidos"=> $row->apllidos,
            "tipouser"=> $row->tipouser,
            "correo"=> $row->correo,
            "contrasena"=> $row->contrasena
        );
      }
        echo json_encode($res);
?>