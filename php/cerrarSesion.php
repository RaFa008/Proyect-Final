<?php

session_start();
$correo=$_SESSION['correo']="";

if($correo==""){
    echo "1";
}else{
    echo "2";
}

?>
