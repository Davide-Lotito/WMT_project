<!--Script useful to execute query on the DB, delete reservations prior to today's-->
<?php
    function deleteOldReservation($conn){
        $d = date("Y-m-d", strtotime('today'));
        $t = date('H:i:s', time()+7200);
        // if(date('H:i:s', time()+7200) > '16:00'){
        //     $turn = 'af';
        // } else {
        //     $turn = 'mo';
        // }
        $sql = "DELETE FROM `reservations` WHERE `date` < '$d' ";
        $result = $conn->query($sql);
        //$sql = "DELETE FROM `reservations` WHERE `date` = '$d' and `time` < '$t' ";
        //$result = $conn->query($sql);
        return $result;
    }
?>