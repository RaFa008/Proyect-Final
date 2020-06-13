<?php
$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);


                $nombre=$_POST['nombre'];
                $apellidos=$_POST['apellidos'];
                $correo=$_POST['correo'];
                $password=$_POST['password'];
                $pregunta=$_POST['pregunta'];
                $respuesta=$_POST['respuesta'];

    $queryBusqueda ="select correo from usuarios where correo='".$correo."'";
      $stmt = $mbd->prepare($queryBusqueda);
      $stmt->execute();

      $row=$stmt->fetch(PDO::FETCH_BOTH);
      $correoR=$row['correo'];
      
      if($correo!=$correoR){
        $queryInsert ="insert into usuarios(nombre,apllidos,correo,contrasena,tipouser,pregunta,respuesta)
        values('$nombre','$apellidos','$correo','$password','3','$pregunta','$respuesta')";
          if($mbd->exec($queryInsert)==true){
            echo "1";
          }else
              {
                echo"0";
              }
        }else{
        echo"2";
        }
?>