<?php
    require_once("config.php");

    function correctInsert($msg) {
        echo '<script type="text/javascript">';
        echo 'alert("'.$msg.'");';
        echo 'window.location = "../pages/book.html"';
        echo '</script>';
    }

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $name = ($_GET["name"]);
        $phone = ($_GET["phone"]);
        $date = ($_GET["date"]);
        $time = ($_GET["time"]);
        $number = ($_GET["quantity"]);
        $allergies = ($_GET["allergies"]);


        $sql = "INSERT INTO reservations (id, name, phone, date, time, people, allergies) 
        VALUES (NULL, '$name', '$phone', '$date', '$time', '$number', '$allergies')";

        if ($conn->query($sql) === TRUE) {
            correctInsert("Reservation made correctly");
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
    }
?>