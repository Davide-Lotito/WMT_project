<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../style/common.css">
    <link rel="stylesheet" href="../style/login.css">
    <link rel="icon" type="image/png" href="../images/chef_white_icon.png">
    <title>login</title>
    <!-- icon libary -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <?php
    include("../php/validate.php");
    ?>
    <!--navigation bar-->
    <nav id="menu">
        <button id="back-on-top" title="back on top"><img class="center"
                src="../images/arrowUp.png" alt="arrow Up"></button>
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="./menu.html">Menu</a></li>
            <li><a href="./book.html">Reserve</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./contacts.html">Contacts</a></li>
            <li class="right " id="login-page"><a class="login-link" href="./login.html">Login</a></li>
        </ul>
    </nav>
    <!--progress bar-->
    <div id="header-progress-bar">
        <div id="progress-bar-container">
            <div id="progress-bar"></div>
        </div>
    </div>
    <!--title box area-->
    <div id="title-area">
        <a href="../index.html"><img src="../images/chef_white_icon.png" alt="restaurant icon" title="icon"></a>
        <h1 id="title-text" class="title-font">Restaurant Pizzeria da Davide</h1>
    </div>
    <!--Login form-->
    <div id="form">
        <form action="../php/validate.php" method="post">
            <fieldset>
                <legend><img src="https://media.giphy.com/media/kAOJ3W2xN5cXqYfEFo/giphy.gif" alt="cook gif"
                        title="cook gif"> Login <img src="https://media.giphy.com/media/fuDNg9Fh84Yqst9Cps/giphy.gif"
                        alt="chef gif" title="chef gif"></legend>
                <input type="text" id="name" name="name" placeholder="Username" required>
                <input type="password" id="pswd" name="pswd" placeholder="Password" required>
                <input type="checkbox" id="show-pswd" name="show-pswd">
                <label for="show-pswd">Show Password</label>
            </fieldset>
            <input type="submit" id="submit-button" value="Enter" />
        </form>
    </div>
    <!--Remider that the login is only for workers-->
    <div id="callout-workers">
        <div class="callout-header">Warning</div>
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <div class="callout-container">
            <p>
                The Login form is only for the restaurant's workers.
            </p>
        </div>
    </div>
    <footer id="footer">
        &copy; Copyright 2022 <br> Da Davide Restaurant
        <br>
        <div class="social-links">
            <a href="https://www.facebook.com/" class="fa fa-facebook" target="_blank"></a>
            <a href="https://www.twitter.com/" class="fa fa-twitter" target="_blank"></a>
            <a href="https://www.instagram.com/" class="fa fa-instagram" target="_blank"></a>
        </div>
    </footer>
    <script src="../script/common.js"></script>
    <script src="../script/login.js"></script>
</body>

</html>