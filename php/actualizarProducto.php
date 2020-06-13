<?php


$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);


  $nombre=$_GET['nombre'];
  $cantidad=$_GET['cantidad'];
  $id=$_GET['id'];

    $queryInsert =" update  producto set nombreProd='".$nombre."',cantidad='".$cantidad."' where idproducto='".$id."'";
    
   if($mbd->exec($queryInsert)==true){
       echo "1";
     }else
         {
           echo"0";
         }
?>