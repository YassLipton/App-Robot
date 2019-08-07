<?php
include('dbinfo.php');
$json = json_decode(file_get_contents('php://input'), true);
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $un, $pw);
 
    $stmt = $pdo->prepare("INSERT INTO robot (variable) VALUES ('$json[varia]')");
    $stmt->bindParam(':varia', $json['varia']);

    $stmt->execute();
    $message = 'Success!';
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
?>
<?php
echo json_encode($message);
 
$connection->close();
?>
