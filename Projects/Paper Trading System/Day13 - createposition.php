<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST["stock_name"])) {
        if (!empty($_POST["stock_quantity"])) {
            $stock_name = strtoupper($_POST["stock_name"]);
            $stock_quantity = $_POST["stock_quantity"];
            
            $data = array(
                "Name" => $stock_name,
                "Quantity" => $stock_quantity
            );
            
            $json_data = json_encode($data);            
            file_put_contents('Req.json', $json_data);
            $output = exec("python create_position.py");
        } else {
            echo "Stock quantity is required.";
        }
    } else {
        echo "Stock name is required.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Add Stock</title>
</head>
<body>
    <h2>Add Stock</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="stock_name">Stock Name:</label>
        <br>
        <input type="text" id="stock_name" name="stock_name">
        <br><br>
        <label for="stock_quantity">Enter Quantity:</label>
        <br>
        <input type="text" id="stock_quantity" name="stock_quantity">
        <br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
