<?php
$host = "localhost";
$dbname = "circuit";
$un = "localhost";
$pw = "root";
$json = json_decode(file_get_contents('php://input'), true);
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $un, $pw);
 
    $stmt = $pdo->prepare("UPDATE robot SET variable = '$json[varia]' WHERE id=6");
    $stmt->bindParam(':varia', $json['varia']);

    $stmt->execute();
    $message = 'Success!';

    $sql = "SELECT variable FROM robot WHERE id=6";
    $q = $pdo->query($sql);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
?>
<?php
while ($row = $q->fetch()):
$vari = $row['variable']; 
echo json_encode($vari);
endwhile;
?>