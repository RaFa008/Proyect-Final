<?php
$usuario = 'root';
#$pass = "1234";
$pass = "";

  $mbd = new PDO('mysql:host=localhost;dbname=mecanico', $usuario, $pass);


$Nombre=$_GET['Nombre'];
$Apellidos=$_GET['Apellidos'];
$correo=$_GET['correo'];
$password=$_GET['password'];
$selectUser=$_GET['selectUser'];

$queryBusqueda ="select correo from usuarios where correo='".$correo."'";
$stmt = $mbd->prepare($queryBusqueda);
$stmt->execute();

$row=$stmt->fetch(PDO::FETCH_BOTH);
$correoR=$row['correo'];

        if($correo!=$correoR){
        $queryInsert ="insert into usuarios(nombre,apllidos,correo,contrasena,tipouser,pregunta,respuesta)
        values('$Nombre','$Apellidos','$correo','$password','$selectUser','1','1')";
          if($mbd->exec($queryInsert)==true){
                echo "1";
            }else
              {
                echo"2";
            }
            }else{
            
                echo"0";
            }
?>