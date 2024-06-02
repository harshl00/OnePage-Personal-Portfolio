Problem Statement: 
Develop a XML program to store book details like title, author, publication, year, price 
etc. using CSS. 
Solution  
Books.xml  
<?xml version="1.0" encoding="UTF-8"?> 
<?xml-stylesheet type="text/css" href="Rule.css"?> 
<books> 
<heading>Welcome To NCET Book Store </heading> 
<book> 
<title>Title -: Web Programming</title> 
<author>Author -: Chrisbates</author> 
<publisher>Publisher -: Wiley</publisher> 
<edition>Edition -: 3</edition> 
<price> Price -: 300</price> 
</book> 
<book> 
<title>Title -: Internet world-wide-web</title> 
<author>Author -: Ditel</author> 
<publisher>Publisher -: Pearson</publisher> 
<edition>Edition -: 3</edition> 
<price>Price -: 400</price> 
</book> 
<book> 
<title>Title -: Computer Networks</title> 
<author>Author -: Foruouzan</author> 
<publisher>Publisher -: Mc Graw Hill</publisher> 
<edition>Edition -: 5</edition> 
<price>Price -: 700</price> 
</book> 
<book> 
<title>Title -: DBMS Concepts</title> 
<author>Author -: Navath</author> 
<publisher>Publisher -: Oxford</publisher> 
<edition>Edition -: 5</edition> 
<price>Price -: 600</price> 
</book> 
<book> 
<title>Title -: Linux Programming</title> 
<author>Author -: Subhitab Das</author> 
<publisher>Publisher -: Oxford</publisher> 
<edition>Edition -: 8</edition> 
<price>Price -: 300</price> 
</book> 
</books> 
Rule.css 
books { 
color: white; 
background-color : gray; 
width: 100%; 
} 
heading { 
color: green; 
font-size : 40px; 
background-color : powderblue; 
} 
heading, title, author, publisher, edition, price { 
display : block; 
} 
title { 
} 
font-size : 25px; 
font-weight : bold;