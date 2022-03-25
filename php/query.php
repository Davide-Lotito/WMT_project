<!--Script useful to execute query on the DB, get reservations of a specific day-->
<?php
    function getResults($dayName, $conn){
        $d = date("Y-m-d", strtotime($dayName));
        $sql = "SELECT * FROM `reservations` WHERE `date` = '$d' ";
        $result = $conn->query($sql);
        // if ($result->num_rows > 0) {
        //     while($row = $result->fetch_assoc()) {
        //         echo "<div id='item'>" . "<em class='id'>id: " . $row["id"]. "</em> - Name: " . $row["name"]. "<br>" .
        //         "Number people: " . $row["people"]. " - Phone number: " . $row["phone"]. "<br>" .
        //         "<strong class='date'>Time: " . $row["time"]. " - date: " . $row["date"]. "</strong><br>" .
        //         "Allergies: " . $row["allergies"] . "</div>";
        //     }
        // }
        return $result;
    }
?>