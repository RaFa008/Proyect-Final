<?php

session_start();
$correo=$_SESSION['correo'];
#echo "$correo";

$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

  $query ="select c.fecha,c.hora,idcita from usuarios as us inner join citas as c on us.iduser=c.iduser
   where us.correo='".$correo."' and estado='0'";
      
      $stmt = $mbd->prepare($query);
      $stmt->execute();
  
    $res=array();
    while ($row=$stmt->fetch(PDO::FETCH_OBJ)){  
      $res[]=array(
            "fecha"=> $row->fecha,
            "hora"=> $row->hora,
            "idcita"=> $row->idcita
        );
      }
        echo json_encode($res);
?>