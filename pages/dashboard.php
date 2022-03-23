<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <link rel="stylesheet" href="../style/common.css">
    <link rel="icon" type="image/png" href="../images/chef_white_icon.png">
</head>
<!--A php file is considered as hack file by Gitlab and Github when there is only HTML code in it.
    https://stackoverflow.com/questions/58598113/what-hack-means-in-the-languages-bar-on-gitlab 
-->

<body>
    <?php
    session_start();

    //Expiring the session in case the user is inactive for expireAfter minute
    $expireAfter = 5;

    if (isset($_SESSION['last_action'])) {

        $secondsInactive = time() - $_SESSION['last_action'];

        $expireAfterSeconds = $expireAfter * 60;

        if ($secondsInactive >= $expireAfterSeconds) {
            // The user has not been active for too long -> Killing the session.
            session_unset();
            session_destroy();
            header("Location: ../pages/login.php");
        }
    }

    //Assigning the current timestamp as the user's the latest action
    $_SESSION['last_action'] = time();
    ?>
    <!--navigation bar-->
    <nav id="menu">
        <button id="back-on-top" title="back on top"><img class="center" src="./images/arrowUp.png" alt="arrow Up"></button>
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="./menu.html">Menu</a></li>
            <li><a href="./book.html">Reserve</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./contacts.html">Contacts</a></li>
            <li class="right" id="login-page"><a class="login-link" href="./logout.html">Logout</a></li>
        </ul>
    </nav>
</body>

</html>