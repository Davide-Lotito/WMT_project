<!--Script useful to execute query on the DB, count how many reservations for today-->
<?php
    function reservations($conn){
        $d = date("Y-m-d", strtotime('today'));
        if(date('H:i:s', time()+7200) > '16:00'){
            $turn = 'af';
        } else {
            $turn = 'mo';
        }
        $sql = "SELECT `people` FROM `reservations` WHERE `date` = '$d' and `turn` = '$turn' ";

        $COUNTER=0;

        $result = $conn->query($sql);
        foreach ($result as $elem) {
            $COUNTER = $COUNTER + $elem['people'];
        }

        return $COUNTER;
    }

    function reservationsByDate($date, $conn, $value, $turn){
        $sql = "SELECT `people` FROM `reservations` WHERE `date` = '$date' and `turn` = '$turn' ";

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