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
    //Beginning the session.
    session_start();

    //Expiring the session in case the user is inactive for expireAfter seconds
    $expireAfter = 30;

    //Test to make sure if our "last action" session variable was set.
    if (isset($_SESSION['last_action'])) {

        //Find out how many seconds have already passed
        //since the user was active last time.
        $secondsInactive = time() - $_SESSION['last_action'];

        //Converting the minutes into seconds.
        // $expireAfterSeconds = $expireAfter * 60;
        $expireAfterSeconds = $expireAfter;

        //Test to make sure if they have not been active for too long.
        if ($secondsInactive >= $expireAfterSeconds) {
            // The user has not been active for too long -> Killing the session.
            session_unset();
            session_destroy();
            header("Location: ../pages/login.html");
        }
    }

    //Assigning the current timestamp as the user's the latest action
    $_SESSION['last_action'] = time();
    ?>

    <h1 class="center">Hello Admin</h1>
</body>

</html>