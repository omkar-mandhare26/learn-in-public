<?php
$jsonData = file_get_contents('User_position.json');
$data = json_decode($jsonData, true);

if ($data === null) {
    die('Error');
}

echo 'Name: ' . $data['securityID'] . '<br>';
echo 'Price: ' . $data['currentValue'] . '<br>';
?>
