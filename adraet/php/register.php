<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    require("conexion.php");
    $conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);
    if(mysqli_connect_errno()){
        echo "Error en la conexion";
        exit();
    }
    mysqli_set_charset($conexion,"utf8");




    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $username=$_POST['username'];
    $correo=$_POST['correo'];
    $telefono=$_POST['telefono'];
    $contrasena=$_POST['contrasena'];

    $insertar="INSERT INTO users(nombre,apellido,username,correo,telefono,contrasena) VALUES('$nombre','$apellido','$username','$correo','$telefono','$contrasena')";
    

    $verificar=mysqli_query($conexion,"SELECT * FROM users WHERE correo='$correo'");
    $verificar_user=mysqli_query($conexion,"SELECT * FROM users WHERE username='$username'"); 

    if(mysqli_num_rows($verificar) > 0){
        echo '
            <script>
                alert("Este correo ya fue registrado");
                window.location="login.php";
            </script>
        ';
        exit();
    }

    if(mysqli_num_rows($verificar_user) > 0){
        echo '
            <script>
                alert("Este usuario ya fue registrado");
                window.location="login.php";
            </script>
        ';
        exit();
    }

    $ejecutar=mysqli_query($conexion,$insertar);

    if($ejecutar){
        echo '
            <script>
                alert("Usuario registrado exitosamente. Inicie sesión para continuar!")
                window.location="login.php";
            </script>
        ';
    }else{
        echo '
            <script>
                alert("Hubo un error, intentelo de nuevo");
                window.location="login.php";
            </script>
        ';
    }
?>  
</body>
</html>
