<?php

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

  $query ="select *from usuarios";
      
      $stmt = $mbd->prepare($query);
      $stmt->execute();
  
    $res=array();
    while ($row=$stmt->fetch(PDO::FETCH_OBJ)){  
      $res[]=array(
            "id"=>$row->iduser,
            "nombre"=> $row->nombre,
            "apellidos"=> $row->apllidos,
            "tipouser"=> $row->tipouser
        );
      }
        echo json_encode($res);
?>