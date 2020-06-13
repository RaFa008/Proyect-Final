<?php
    $usuario = 'root';
    #$pass = "1234";
    $pass = "";

    $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);


    $imagen=$_GET['imagen'];
    $nomServicio=$_GET['nomServicio'];
    $contenido=$_GET['contenido'];

        $queryInsert ="insert into servicios(nombre,informacion,imagen)
        values('$nomServicio','$contenido','$imagen')";
          if($mbd->exec($queryInsert)==true)
            {
                echo "1";
            }else
              {
                echo"0";
              }
         
?>