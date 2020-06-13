<?php

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

  $query ="select c.fecha,c.hora,us.nombre,us.apllidos,c.idcita from citas as c inner join usuarios as us on c.iduser=us.iduser;";
      
      $stmt = $mbd->prepare($query);
      $stmt->execute();
  
    $res=array();
    while ($row=$stmt->fetch(PDO::FETCH_OBJ)){  
      
      $res[]=array(
            "nombre"=> $row->nombre,
            "apellidos"=> $row->apllidos,
            "fecha"=> $row->fecha,
            "hora"=> $row->hora,
            "idcita"=> $row->idcita
        );
      }
        echo json_encode($res);
?>