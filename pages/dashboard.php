<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <link rel="stylesheet" href="../style/common.css">
    <link rel="stylesheet" href="../style/dashboard.css">
    <link rel="icon" type="image/png" href="../images/chef_white_icon.png">
</head>
<body>
    <?php
    session_start();
    
    function expiredTime($msg) {
        echo '<script type="text/javascript">';
        echo 'alert("'.$msg.'");';
        echo 'window.location = "../pages/login.php"';
        echo '</script>';
    }

    //Expiring the session in case the user is inactive for expireAfter minutes
    $expireAfterMinute = 5;

    if (isset($_SESSION['last_reload'])) {

        $secondsInactive = time() - $_SESSION['last_reload'];
        $expireAfterSeconds = $expireAfterMinute * 60;

        if ($secondsInactive >= $expireAfterSeconds) {
            // killing the session
            session_unset();
            session_destroy();
            expiredTime("Your time is expired! Login another time");
        }
    } else {
        $_SESSION['last_reload'] = time();
    }

    //reload the page every minute, to see to see the latest bookings
    echo '<script type="text/javascript">
            setTimeout(function (){ location.reload() }, 1000*60*1);
            </script>';
    ?>

    <button id="back-on-top" title="back on top"><img class="center" src="../images/arrowUp.png" alt="arrow Up"></button>
    <!--show reservation of a specific day-->
    <nav id="days">
        <ul>
            <li><a href="#">Today</a></li>
            <li><a href="#">Tomorrow</a></li>
            <li><a href="#">After Tomorrow</a></li>
            <li class="right" id="login-page"><a class="logout-link" href="./logout.html">Logout</a></li>
        </ul>
    </nav>

    <?php
        require_once("../php/config.php");

        $sql = "SELECT id, name, phone, date, time, people, allergies FROM reservations";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<div id='item'>" . "<em class='id'>id: " . $row["id"]. "</em> - Name: " . $row["name"]. "<br>" .
                "Number people: " . $row["people"]. " - Phone number: " . $row["phone"]. "<br>" .
                "<strong class='date'>Time: " . $row["time"]. " - date: " . $row["date"]. "</strong><br>" .
                "Allergies: " . $row["allergies"] . "</div>";
            }
        } else {
            echo "0 results";
        }
    ?>
    <footer id="footer">
        &copy; Copyright 2022 <br> Da Davide Restaurant
    </footer>
    <script src="../script/common.js"></script>
    <script src="../script/dashboard.js"></script>
</body>
</html>