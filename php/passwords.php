<?php 
    include("config.php");

    $sql = "SELECT * FROM adminlogin";
    $result = $conn->query($sql);
    $USERS = array();
    
    while($row = mysqli_fetch_assoc($result)){
        $USERS[$row['adminname']] = $row['password'];
    }

    function wrong($msg) {
        echo '<script type="text/javascript">';
        echo 'alert("'.$msg.'");';
        echo 'window.location = "../pages/login.php"';
        echo '</script>';
    }

    function check_logged(){ 
        global $_SESSION, $USERS; 
        if (!isset($_SESSION["logged"]) || !array_key_exists($_SESSION["logged"],$USERS)) {
            wrong("You cannot reach this page, is necessary to login before!");
        }
    } 
?>