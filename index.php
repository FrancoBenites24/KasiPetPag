<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
  <title>WASIPET - Productos</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <h1>Productos</h1>

  <form method="post" action="carrito.php">
    <input type="hidden" name="producto" value="Croquetas para Perro">
    <input type="hidden" name="precio" value="30">
    <button type="submit">Agregar al carrito</button>
  </form>

  <form method="post" action="carrito.php">
    <input type="hidden" name="producto" value="Comedero Gato">
    <input type="hidden" name="precio" value="15">
    <button type="submit">Agregar al carrito</button>
  </form>

  <a href="carrito.php">Ir al carrito</a>
</body>
</html>
