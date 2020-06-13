<?php

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

  $query ="select *from producto";
      
      $stmt = $mbd->prepare($query);
      $stmt->execute();
  
    $res=array();
    while ($row=$stmt->fetch(PDO::FETCH_OBJ)){  
      $res[]=array(
            "id"=>$row->idproducto,
            "nombre"=> $row->nombreProd,
            "cantidad"=> $row->cantidad
        );
      }
        echo json_encode($res);
?>