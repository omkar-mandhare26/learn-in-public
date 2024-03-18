<!DOCTYPE html>
<html>
<head>
    <title>Stock Details</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>Stock Details</h2>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>PnL</th>
            <th>Quantity</th>
            <th>Entry</th>
            <th>LTP</th>
            <th>Updated On</th>
            <th>Entry Date</th>
            <th>Status</th>
            <th>Code</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $json_file = 'User_Position.json';
        $json_string = file_get_contents($json_file);
        $data = json_decode($json_string, true);

        if ($data) {
            foreach ($data as $index => $item) {
                echo "<tr>";
                echo "<td>" . $item['Name'] . "</td>";
                echo "<td>" . $item['PnL'] . "</td>";
                echo "<td>" . $item['Quantity'] . "</td>";
                echo "<td>" . $item['Entry'] . "</td>";
                echo "<td>" . $item['LTP'] . "</td>";
                echo "<td>" . $item['Updated_On'] . "</td>";
                echo "<td>" . $item['Entry_Date'] . "</td>";
                echo "<td>" . $item['status'] . "</td>";
                echo "<td>" . $item['Code'] . "</td>";
                echo "<td><form method='post'><input type='hidden' name='stockIndex' value='$index'><button type='submit' name='exitBtn'>Exit Position</button></form></td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='10'>No data available</td></tr>";
        }

        if (isset($_POST['exitBtn'])) {
            $stockIndex = $_POST['stockIndex'];
            if (isset($data[$stockIndex])) {
                $data[$stockIndex]['status'] = 'CLOSED';
                $data[$stockIndex]['Exit_Price'] = $data[$stockIndex]['LTP'];

                // Update JSON file
                file_put_contents($json_file, json_encode($data, JSON_PRETTY_PRINT));

                // Output success message
                echo "<script>alert('Position exited successfully.');</script>";
            } else {
                echo "<script>alert('Invalid stock index.');</script>";
            }
        }
        ?>
    </tbody>
</table>

</body>
</html>
