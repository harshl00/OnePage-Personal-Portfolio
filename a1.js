Write a php program to check whether given number is palindrome or not. 
<html> 
<body> 
<form action="" method="post"> 
<br><center><h1><u><font color="red">PALINDROME</font></u></h1></center> 
<br><table bgcolor="forestgreen" align="center"> 
<tr><td><br><input type="text" value=" Enter the Input" readonly> 
<input type="text" name="n"></tr></td> 
<tr><td><br><br><center><br><br> 
<input type="submit" value="&nbsp;&nbsp; SUBMIT &nbsp;&nbsp;"> 
<br><br><br></center></tr></td></table> 
</form> 
<?php 
if($_POST) 
{ 
$n1=$_POST["n"]; 
$p=$n1; 
$s=0; 
while($n1>=1) 
{ 
$r=$n1%10; 
$n1=$n1*(10/100); 
$s=$s*10+$r; 
} 
echo '<table align="center" border="2" width="46%"><tr align="center"><td><br>'; 
echo '<font color="forestgreen">'; 
if($p==$s) 
echo"<h2> $p is Palindrome Number</h2>"; 
else 
echo"<h2> $p is not Palindrome Number</h2>"; 
} 
echo'</font>'; 
echo'</td></tr></table>'; 
?> 
</body> 
</html> 
