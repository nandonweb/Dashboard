<?php

$servidor = "localhost"; // localhost
$bdname = "investimentos"; // banco de dados
$bdusuario = "root"; //usuario do bd
$bdsenha = ""; //senha do bd
$conexao = mysqli_connect($servidor, $bdusuario, $bdsenha, $bdname);

if ("!$conexao") {
    die("Sem Conexao com o Banco de Dados" . mysqli_connect_error()); 
}

?>
