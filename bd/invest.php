<?php include_once"config.php";?>
<html>
<body>
<?php 
$quantidade = $_POST["quantidade"];
$valor = $_POST["valor"];

$conexao = mysqli_connect($servidor,$bdusuario,$bdsenha,$bdname);
mysqli_select_db($conexao,'$bdname');
$sql = "INSERT INTO investimentos (quantidade,valor) VALUES ('$quantidade','$valor')";
if (mysqli_query($conexao, $sql)) {
echo "<script>alert('Informações salvas com sucesso!'); window.location = 'index.html';</script>";

}else{
 echo "As informações não foram inseridas : " . $sql . "<br>" . mysqli_error($conexao);
}
mysqli_close($conexao);
?>
</body>
</html>