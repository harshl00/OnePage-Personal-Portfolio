8. Write a HTML and JQuery program to design a webpage to accept 
event organizer name from the user and display it on the webpage.  
Program:  
<!DOCTYPE html>  
<html>  
<head>  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>  
<script>  
$(document).ready(function 
(){  
$("#display").click(function( 
){  
var name = $("#eventOrganizer").val();  
$("#result").html("Organizer Name :" + name);  
});  
});  
</script>  
</head>  
<body style="background-color:pink">  
<center>  
<h2>Event Organization</h2>  
<p>Event Organizer : <input id="eventOrganizer" type="text" value=""/></p>  
<button id="display">Display</button>  
<div id="result"></div>  
</center>  
</body>  
</html> 