7. Write a HTML and J Query program to create a webpage to fetch 
the  details of the event and display the invitation.  
<html>  
<head>  
<title>Create Invitation</title>  
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>  
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
<script>  
$(document).ready(function(){  
$("#create").click(function(){  
var b = $("#bride").val();  
var bg =  
$("#bridegroom").val();  
var q =  
$("#quotes").val();  
var v = $("#venue").val();  
var d = $("#date").val();  
$(".input").hide();  
$("*").css("background-color","violet");  
$("h3").css("background-color","blue");  
$("#content,#destination").css("background-color","pink"); 
$("h3").html(b + " &" + bg + " Cordially Invites You");  
$("#content").html(q);  
$("#destination").html("@ " + v + " on " + d);  
});  
});  
</script>  
</head>  
<body>  
<center>  
<div class="input">  
<h2>Create Your Invitation</h2>  
<p>Bride : <input type="text" id="bride" value="" /> </p>  
<p>Bridegroom : <input type="text" id="bridegroom" value="" /> </p>  
<p>Quotes : <input type="text" id="quotes" value="" /> </p>  
<p>Venue : <input type="text" id="venue" value="" /> </p>  
<P>Date : <input type="text" id="date" value="" /> </P>  
<button id="create">Create</button>  
</div>  
<div id="invitation">  
<h3></h3>  
<p id="content"></p>  
<p id="destination"></p>  
</div>  
</center>  
</body> 
</html>