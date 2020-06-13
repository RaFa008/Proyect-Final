<?php

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

       $query ="select *from servicios";
      $stmt = $mbd->prepare($query);
      $stmt->execute();
  
    $res=array();
    while ($row=$stmt->fetch(PDO::FETCH_OBJ)){  
      $res[]=array(
            "id"=> $row->idservicio,
            "nombre"=> $row->nombre,
            "informacion"=> $row->informacion,
            "imagen"=> $row->imagen,
        );
      }
        echo json_encode($res);
?>