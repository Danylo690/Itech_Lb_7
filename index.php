<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LB_1</title>
    <script src="script.js"></script>
</head>
<body>
    <?php
    include "connect.php";
    ?>
    <h3>Get computers by processor name</h3>
    Processor name:
    <select name='Processor' id="Processor">
        <?php
            try
            {
                $sql = 'SELECT * FROM processor';
                foreach($conn->query($sql) as $result)
                {
                    print "<option>$result[1]</option>";
                }
            }
            catch(PDOException $ex)
            {
                print "Error".$ex->getMessage();
                die();
            }
        ?>
    </select>
    <input type="submit" value="Send" onclick="Processor()">

    <h3>Get computers by installed software</h3>
    Software:
    <select name="Software" id="Software">
        <?php
            try
            {
                $sql = 'SELECT * FROM software';
                foreach($conn->query($sql) as $result)
                {
                    print "<option>$result[1]</option>";
                }
            }
            catch(PDOException $ex)
            {
                print "Error".$ex->getMessage();
                die();
            }
        ?>
    </select>
    <input type="submit" value="Send" onclick="Software()">


    <h3> Get computers by expired guarantee</h3>
    Current date: 
    <?php
        echo $current_date = date('Y-m-d');
    ?>
    <input type="submit" value="Send" onclick="Guarantee()">
    <table border="1" id="Result">
    </table>
</body>
</html>