<!--Script useful to execute query on the DB, delete reservations prior to today's-->
<?php
    function getResults($conn){
        $d = date("Y-m-d", strtotime('today'));
        $sql = "DELETE FROM `reservations` WHERE `date` < '$d' ";
        $result = $conn->query($sql);
        return $result;
    }
?>