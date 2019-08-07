<?php
include('dbinfo.php');
$json = json_decode(file_get_contents('php://input'), true);
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $un, $pw);
 
    $stmt = $pdo->prepare("UPDATE test SET doigt = '$json[varia]' WHERE id=1");
    $stmt->bindParam(':varia', $json['varia']);

    $stmt->execute();
    $message = 'Success!';

    $sql = "SELECT doigt FROM test WHERE id=1";
    $q = $pdo->query($sql);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
?>
<?php
$vari = $json['varia'];
echo json_encode($vari);
?>
