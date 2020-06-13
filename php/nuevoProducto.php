<?php
$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);

    $nomProdusto=$_GET['nomProdusto'];
    $cantidad=$_GET['cantidad'];

        $queryInsert ="insert into producto(nombreProd,cantidad)
        values('$nomProdusto','$cantidad')";
          if($mbd->exec($queryInsert)==true){
            echo "1";
          }else
              {
                echo"0";
              }
?>