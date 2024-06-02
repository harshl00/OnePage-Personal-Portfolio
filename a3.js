Write a PHP MYSQL program to collect the student data and store in Server database. 
a. 
Student Name, Roll_no, mail_id, mobile_no, gender, city, state and 
department - Minimum 4 students records to insert. 
b. 
b. 
c. 
Display the student’s details 
Update the student’s details  
Delete the student Record from database.

Step 2: create a new php file filename.php and place the php file in C:/xampp / 
htdocs folder (accommodate required statements to establish connection with 
your database)  
Registaration.html 
<!DOCTYPE html> 
<html lang="en-us"> 
    <head>  <title>Responsive Registaration Form</title></head> 
        
    <body> 
        <h1>Student Registaration Form</h1> 
        <form class="srf" action="http://localhost/insertdb.php" method="post"> 
        <br><br>Roll No:<input type="text" id="rollno" name="rollno" > 
        <br><br>Student Name:<input type="text" id="name" name="name" > 
        <br><br>Email:<input type="email" id="email" name="email" > 
        <br><br>Mobile:<input type="tel" id="mobile" name="mobile" > 
        <br><br>Gender:<input type="radio" id="male" name="gender" value="male"/>Male 
                        <input type="radio" id="female" name="gender" value="female"/>Female 
        <br><br>City:<input type="text" id="city" name="city" maxlength="10"> 
        <br><br>State:<input type="text" id="state" name="state"> 
        <br><br>Specialization:<br><br> 
                    <input type="checkbox" name="specialization" value="Computer Science">Computer 
Science<br/> 
                    <input type="checkbox" name="specialization" value="Information 
Technology">Information Technology<br/> 
                    <input type="checkbox" name="specialization" value="Computer 
Architecture">Computer Architecture<br/> 
                    <input type="checkbox" name="specialization" value="Tele Communication">Tele 
Communication<br/> 
        <br><br><input type="submit" value="Register" onclick="SaveStudentDetails()"> 
        </form> 
    </body> 
</html> 
</body> 
</html> 
 
insertdb.php 
<?php 
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "ls9_srf"; // DB Name 
 
$v1=$_POST["rollno"]; //name attribute value 
$v2=$_POST["name"];//name attribute value 
$v3=$_POST["email"];//name attribute value 
$v4=$_POST["mobile"];//name attribute value 
$v5=$_POST["gender"];//name attribute value 
$v6=$_POST["city"];//name attribute value 
$v7=$_POST["state"];//name attribute value 
$v8=$_POST["specialization"];//name attribute value 
// Create connection 
$conn = mysqli_connect($servername, $username, $password, $dbname); 
// Check connection 
if (!$conn)  
{ 
die("Connection failed: " . mysqli_connect_error()); 
} 
$sql = "INSERT INTO srf VALUES ('$v1','$v2','$v3','$v4','$v5','$v6','$v7','$v8')"; 
//srf table name 
if (mysqli_query($conn, $sql))  
{ 
echo "New record created successfully"; 
}  
else  
{ 
echo "Error: " . $sql . "<br>" . mysqli_error($conn); 
} 
mysqli_close($conn); 
?> 
updatedb.php 
<?php 
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "ls9_srf"; // DB Name 
// Create connection 
$conn = mysqli_connect($servername, $username, $password, $dbname); 
// Check connection 
if (!$conn) { 
die("Connection failed: " . mysqli_connect_error()); 
} 
$sql = "UPDATE srf SET name='Arulan' WHERE Roll_No='20201CSE0004'"; 
if (mysqli_query($conn, $sql)) { 
echo "Record updated successfully"; 
} else { 
echo "Error updating record: " . mysqli_error($conn); 
} 
mysqli_close($conn); 
?> 
Deletedb.php 
<?php 
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "ls9_srf"; // DB Name 
// Create connection 
$conn = mysqli_connect($servername, $username, $password, $dbname); 
// Check connection 
if (!$conn) { 
die("Connection failed: " . mysqli_connect_error()); 
} 
$sql = "DELETE FROM srf WHERE Roll_No='20201CSE0004'"; 
if ($conn->query($sql) === TRUE) { 
echo "Record deleted successfully"; 
} else { 
echo "Error deleting record: " . $conn->error; 
} 
$conn->close(); 
?> 
 

