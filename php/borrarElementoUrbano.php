<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include('conexionBd.php');
$id=$_POST["envio"];
$sql = "DELETE FROM IOT_GeteR WHERE Id = $id";

$resultado = mysqli_query($connect, $sql);
    echo "Registro borrado ".$sql;
    $output = "Se ha borrado el registro";
print(json_encode($output));
$connect->close();
?>