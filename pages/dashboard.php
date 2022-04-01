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
    include("../php/passwords.php");
    check_logged();

    function expiredTime($msg) {
        echo '<script type="text/javascript">';
        echo 'alert("'.$msg.'");';
        echo 'window.location = "../pages/login.html"';
        echo '</script>';
    }

    //Expiring the session in case the user is inactive for expireAfter minutes
    $expireAfterMinute = 10;

    if (isset($_SESSION['last_reload'])) {

        $secondsInactive = time() - $_SESSION['last_reload'];
        $expireAfterSeconds = $expireAfterMinute * 60;

        if ($secondsInactive >= $expireAfterSeconds) {
            session_unset();
            session_destroy();
            expiredTime("Your time is expired! Login another time");
        }
    } else {
        $_SESSION['last_reload'] = time();
    }

    //reload the page every minute, in order to see the latest bookings
    echo '<script type="text/javascript">
            setTimeout(function (){ location.reload() }, 1000*60*1);
            </script>';
    ?>

    <button id="back-on-top" title="back on top"><img class="center" src="../images/arrowUp.png" alt="arrow Up"></button>
    <!--show reservation of a specific day-->
    <div>
        <form method="get" id="options">
            <input type="submit" name="today" value="Today"/>
            <input type="submit" name="today+1" value="Tomorrow"/>
            <input type="submit" name="today+2" value="After Tomorrow"/>
            <input type="submit" name="all" value="All"/>
            <input type="submit" name="logout" class="logout" value="Logout">
        </form>
    </div>
    <!--reservation counter-->
    <p id="counter">
        <?php
            include("../php/counter.php");
            if(date('H:i:s', time()+7200) > '16:00'){
                $turn = 'dinner';
            } else {
                $turn = 'lunch';
            }
            echo "There are " . "<em class='value'> " . reservations($conn) . "/50" . "</em>" . " people booked for the " . $turn . " shift!";
        ?>
    </p>
    <?php
        require_once("../php/config.php");
        require_once("../php/getReservation.php");
        require_once("../php/deleteOld.php");
        deleteOldReservation($conn);

        if(isset($_GET['all'])) {
            // $sql = "SELECT id, name, phone, date, time, people, allergies FROM reservations";
            $sql = "SELECT * FROM `reservations` ORDER BY `reservations`.`date` ASC ";
            $result = $conn->query($sql);
        }else if(isset($_GET['today'])) {
            $result = getResults("today",$conn);
        }else if(isset($_GET['today+1'])) {
            $result = getResults("+1 day",$conn);
        } else if(isset($_GET['today+2'])) {
            $result = getResults("+2 day",$conn);
        } else {
            //default shows the reservations for today
            $result = getResults("today",$conn);
        }

        if(isset($_GET['logout'])) {
            header("Location: ./logout.html");
            session_unset();
            session_destroy();
        }

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<div id='item'>" . "<em class='id'>id: " . $row["id"]. "</em> - Name: " . $row["name"]. "<br>" .
                "Number people: " . $row["people"]. " - Phone number: " . $row["phone"]. "<br>" .
                "<strong class='date'>Time: " . $row["time"]. " - date: " . $row["date"]. "</strong><br>" .
                "Allergies: " . $row["allergies"] . "</div>";
            }
        } else {
            echo '<p style="text-align:center">0 results</p>';
        }
    ?>
    <footer id="footer">
        &copy; Copyright 2022 <br> Da Davide Restaurant
    </footer>
    <script src="../script/common.js"></script>
    <script src="../script/dashboard.js"></script>
</body>
</html>