<!--Script useful to execute query on the DB, count how many reservations for today-->
<?php
    function reservations($conn){
        $d = date("Y-m-d", strtotime('today'));
        $sql = "SELECT `people` FROM `reservations` WHERE `date` = '$d' ";

        $COUNTER=0;

        $result = $conn->query($sql);
        foreach ($result as $elem) {
            $COUNTER = $COUNTER + $elem['people'];
        }

        return $COUNTER;
    }

    function reservationsByDate($date, $conn, $value){
        // $d = date("Y-m-d", strtotime($dayName));
        $sql = "SELECT `people` FROM `reservations` WHERE `date` = '$date' ";

        $COUNTER=$value;
        $COUNTERMAX=50;
        $result = $conn->query($sql);
        foreach ($result as $elem) {
            $COUNTER = $COUNTER + $elem['people'];
        }
        
        if($COUNTER <= $COUNTERMAX){
            return true;
        } else {
            return false;
        }
    }
?>