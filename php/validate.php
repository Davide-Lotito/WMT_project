<!--Script useful to check username and password-->
<?php
    include("./config.php");
    session_start();
    
    // referece: https://www.w3schools.com/php/php_form_validation.asp
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function wrongLogin($msg) {
        echo '<script type="text/javascript">';
        echo 'alert("'.$msg.'");';
        echo 'window.location = "../pages/login.html"';
        echo '</script>';
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $adminname = test_input($_POST["name"]);
        $password = test_input($_POST["pswd"]);
        $sql = "SELECT * FROM adminlogin";
        $results = $conn->query($sql);

        foreach ($results as $user) {
            if (($user['adminname'] == $adminname) && ($user['password'] == $password)) {
                $_SESSION["logged"] = $adminname; 
                header("Location: ../pages/dashboard.php");
            }
        }
        wrongLogin("Wrong username or password!");
        die();
    }
?>