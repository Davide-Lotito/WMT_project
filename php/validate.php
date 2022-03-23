<?php
    // referece: https://www.w3schools.com/php/php_form_validation.asp
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function connection()
    {
        $servername = "localhost";
        $dbname = "restaurant";
        $username = "root";
        $password = "";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
          return null;
        } else {
            return $conn;
        }
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $conn = connection();
        $adminname = test_input($_POST["name"]);
        $password = test_input($_POST["pswd"]);
        $sql = "SELECT * FROM adminlogin";
        $results = $conn->query($sql);

        foreach ($results as $user) {

            if (($user['adminname'] == $adminname) && ($user['password'] == $password)) {
                header("Location: adminpage.php");
            } else {
                echo "<script language='javascript'>";
                echo "alert('WRONG INFORMATION')";
                echo "</script>";
                // header("Location: ../pages/login.html");
                die();
            }
        }
    }
?>
