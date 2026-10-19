<?php
  session_start();
  require("conexion.php");
  $conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);
  if(mysqli_connect_errno()){
      echo "Error en la conexion";
      exit();
  }
  mysqli_set_charset($conexion,"utf8");

  $username=$_POST['username'];
  $contrasena=$_POST['contrasena'];

  $validar=mysqli_query($conexion, "SELECT * FROM users WHERE username='$username' AND contrasena='$contrasena'");

  if(mysqli_num_rows($validar) > 0){
    $_SESSION['usuario']= $username;
    header("location: ../prueba/ADRAET Dashboard Panel.html");
    exit();
  }else{
    echo 'Usuario o contraseña incorrectos.';
    exit();
  }