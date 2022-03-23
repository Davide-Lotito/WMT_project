<!-- This this script is used to connect with the database -->
<?php
        $servername = "localhost";
        $dbname = "restaurant";
        $username = "root";
        $password = "";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }
?>