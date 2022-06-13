<?php
    header('Content-Type: text/xml');
    header('Cache-Control: no-cache, must-revalidate');
    include "connect.php";
    echo '<?xml version="1.0" encoding="utf8" ?>';
    echo "<root>";
    $Software= $_POST['Software'];
    try
    {
        $sql = "SELECT c.ID_Computer, c.netname, c.motherboard,
        c.RAM_capacity, c.HDD_capacity, c.monitor,
        c.vendor, c.guarantee from computer_software as a 
        inner join software as b
        on a.FID_Software = b.ID_Software
        inner join computer as c
        on a.FID_computer = c.ID_Computer
        where b.name = '$Software'";
        $i = 0;
        foreach($conn->query($sql) as $result)
        {
            print "<row><id>$result[0]</id><NetName>$result[1]</NetName><Motherboard>$result[2]</Motherboard><RAM>$result[3]</RAM><HDD>$result[4]</HDD><Monitor>$result[5]</Monitor><Vendor>$result[6]</Vendor><Guarantee>$result[7]</Guarantee></row>";
        }
    }
    catch(PDOException $ex)
    {
        print "Error".$ex->getMessage();
        die();
    }
    echo "</root>";
?>