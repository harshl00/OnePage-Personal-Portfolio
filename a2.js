Write a PHP script to perform following file handling operation. 
1. To open a file 
2. To read a file line by line 
3. To read a file character by character 
4. To write a file 
5. To append a file and close file. 
Program 
To open a file 
<!DOCTYPE html> 
<html> 
<body> 
<?php 
$myfile=fopen("webdictionary.txt", "r") or die("Unable to open file!"); 
echo fread($myfile,filesize("webdictionary.txt")); 
fclose($myfile); 
?> 
</body> 
</html> 
To read a file line by line 
<?php 
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!"); 
while(!feof($myfile)) {    
echo fgets($myfile) . "<br>"; 
} 
fclose($myfile); 
?> 
To read a file character by character 
<?php 
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!"); 
// Output one character until end-of-file 
while(!feof($myfile)) { 
echo fgetc($myfile); 
} 
fclose($myfile); 
?> 
To write a file 
<?php 
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!"); 
$txt = "John William\n"; 
fwrite($myfile, $txt); 
$txt = "John Smith\n"; 
fwrite($myfile, $txt); 
fclose($myfile); 
?> 
To append a file and close file. 
<?php 
$myfile = fopen("newfile.txt", "a") or die("Unable to open file!"); 
$txt = "Donald Duck\n"; 
fwrite($myfile, $txt); 
$txt = “Harshith\n"; 
fwrite($myfile, $txt); 
fclose($myfile); 
?> 