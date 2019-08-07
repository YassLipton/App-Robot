<?php
include('dbinfo.php');
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $un, $pw);

    $sql = 'SELECT variable FROM robot WHERE id=6'; 
 
    $q = $pdo->query($sql);

} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
?>
<?php
while ($row = $q->fetch()):
$vri = $row['variable'];
echo json_encode($vri);
endwhile;
?>
