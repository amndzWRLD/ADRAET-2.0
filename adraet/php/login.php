<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="../css/estilomodal.css">
</head>
<body>
    <div class="contenedor_principal">
        <div class="box_afuera">
            <div class="box_afuera_login">
                <h2>¿Ya tienes una cuenta?</h2>
                <button id="btn_login">Iniciar Sesión</button>
            </div>
            <div class="box_afuera_register">
                <h2>¿Aún no tienes una cuenta?</h2>
                <button id="btn_register">Registrate</button>
            </div>
                
        </div>
    <div class="contenedor_formularios">
        <form class="login" action="login_user.php" method="post">
            <h3>Iniciar Sesion</h3>
            <input type="text" placeholder="Nombre de Usuario" name="username">
            <input type="password" placeholder="Contraseña" name="contrasena">
            <button>Ingresar</button>
        </form>
        <form class="register" action="register.php" method="post">
            <h3>Registro</h3>
            <input type="text" placeholder="Nombre" name="nombre">
            <input type="text" placeholder="Apellido" name="apellido">
            <input type="text" placeholder="Nombre de Usuario" name="username">
            <input type="email" placeholder="Correo electrónico" name="correo">
            <input type="number" placeholder="Numero de Teléfono" name="telefono">
            <input type="password" placeholder="Contraseña" name="contrasena">
            <button>Registrar</button>
        </form>
    </div>
</div>
</body>
<script src="../js/login_script.js"></script>
</html>