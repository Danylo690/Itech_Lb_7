var ajax = new XMLHttpRequest();
function Processor(){
    ajax.open("POST", "selectByProcessor.php",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                var Table="<tr><td>ID</td><td>Net name</td><td>Motherboard</td><td>RAM capacity</td><td>HDD capacity</td><td>Monitor</td><td>Vendor</td><td>Guarantee</td><td>Processor</td><td>Frequency</td></tr>";
                Table += ajax.responseText;
                document.getElementById("Result").innerHTML = Table;
            }
        }
    }
    var processor = document.getElementById("Processor").value;
    var Processor_text="Processor="+processor;
    ajax.send(Processor_text);
}

function Software(){
    ajax.open("POST", "selectBySoftware.php",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    var Software = document.getElementById("Software").value;
    var Software_text = "Software=" + Software;
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                var Table = "";
                var Data = ajax.responseXML.firstChild.children;
                Table+="<tr><td>ID</td><td>Net name</td><td>Motherboard</td><td>RAM capacity</td><td>HDD capacity</td><td>Monitor</td><td>Vendor</td><td>Guarantee</td></tr>";
                for (var i = 0; i < Data.length; i++) {
                    Table += "<tr>";
                    Table += "<td>" + Data[i].children[0].textContent + "</td>";
                    Table += "<td>" + Data[i].children[1].textContent + "</td>";
                    Table += "<td>" + Data[i].children[2].textContent + "</td>";
                    Table += "<td>" + Data[i].children[3].textContent + "</td>";
                    Table += "<td>" + Data[i].children[4].textContent + "</td>";
                    Table += "<td>" + Data[i].children[5].textContent + "</td>";
                    Table += "<td>" + Data[i].children[6].textContent + "</td>";
                    Table += "<td>" + Data[i].children[7].textContent + "</td>";
                    Table += "</tr>";
                }
                document.getElementById("Result").innerHTML = Table;
            }
        }
    }
    ajax.send(Software_text); 
}

function Guarantee(){
    ajax.open("POST", "selectByGuarantee.php",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                var Data = JSON.parse(ajax.responseText);
                var Table="";
                Table +="<tr><td>ID</td><td>Net name</td><td>Motherboard</td><td>RAM capacity</td><td>HDD capacity</td><td>Monitor</td><td>Vendor</td><td>Guarantee</td></tr>";
                console.log(Data);
                for(var i in Data)
                {
                    Table += "<tr>";
                    Table += "<td>" + Data[i][0] + "</td>";
                    Table += "<td>" + Data[i][1] + "</td>";
                    Table += "<td>" + Data[i][2] + "</td>";
                    Table += "<td>" + Data[i][3] + "</td>";
                    Table += "<td>" + Data[i][4] + "</td>";
                    Table += "<td>" + Data[i][5] + "</td>";
                    Table += "<td>" + Data[i][6] + "</td>";
                    Table += "<td>" + Data[i][7] + "</td>";
                    Table += "</tr>";
                }
                document.getElementById("Result").innerHTML = Table;
            }
        }
    }
    ajax.send();
}