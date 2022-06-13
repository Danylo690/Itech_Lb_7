<?php
    header('Content-Type: application/json');   
    header('Cache-Control: no-cache, must-revalidate');
    $current_date = date('Y, m, d');
    include "connect.php";
    try
    {
        $sql = "SELECT a.ID_Computer, a.netname, a.motherboard,
        a.RAM_capacity, a.HDD_capacity, a.monitor,
        a.vendor, a.guarantee from computer as a 
        where TIMESTAMPDIFF(DAY, STR_TO_DATE('$current_date', '%Y, %m, %d'), a.guarantee) < 0";
        $i = 0;
        $array = array();
        foreach($conn->query($sql) as $result)
        {
            $array[$i] = $result;
            $i = $i + 1;
        }
        print json_encode($array);
    }
    catch(PDOException $ex)
    {
        print "Error".$ex->getMessage();
        die();
    }
?>