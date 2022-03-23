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
                header("Location: ../pages/dashboard.php");
            } else {
                echo'
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Wrong Login</title>
                    <link rel="stylesheet" href="../style/common.css">
                    <link rel="icon" type="image/png" href="../images/chef_white_icon.png">
                </head>
                    <body>
                        <div class="center">
                            <h1 class="title-font">Username/password incorrect.</h3><br><br><h2>Click here to <a href="../pages/login.php">Login</a></h2>
                        </div>
                    </body>
                </html>
                ';
                die();
            }
        }
    }
?>