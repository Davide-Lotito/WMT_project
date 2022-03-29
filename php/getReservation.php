<!--Script useful to execute query on the DB, get reservations of a specific day-->
<?php
    function getResults($dayName, $conn){
        $d = date("Y-m-d", strtotime($dayName));
        $sql = "SELECT * FROM `reservations` WHERE `date` = '$d' ";
        $result = $conn->query($sql);
        return $result;
    }
?>