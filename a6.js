Problem Statement: 
Write an XSL style sheet for an XML document consisting of details about the 
shopping cart purchase list with 50gms of Badam, 100gms of Cashew nuts, 150gms of 
coffee powder, 250gms of salt, 500gms of Dhal, 750 liter of oil and 1000gms of sugar 
and displays the document about shopping cart information in an HTML table. 
Online compiler Link: 
https://www.w3schools.com/xml/tryxslt.asp?xmlfile=cdcatalog&xsltfile=cdcatalog 
Solution  
Product.xml  
<?xml version="1.0" encoding="UTF-8"?>  
<?xml-stylesheet type="text/xsl" href=" Displayproduct..xsl"?>  
<class>   
<product id="101">  
<productname>Badam</productname>   
<weight>50 gms</weight>   
</product>   
<product id="102">  
<productname>Cashew nuts</productname>   
<weight>100 gms</weight>   
</product>  
<product id="103">  
<productname>Coffee Powder</productname>   
<weight>150 gms</weight>   
</product>  
<product id="104">  
<productname>Salt</productname>   
<weight>250 gms</weight>   
</product>   
<product id="105">  
<productname>Dhal</productname>   
<weight>500 gms</weight>   
</product>  
<product id="106">  
<productname>Oil</productname>   
<weight>500 liter</weight>   
</product>  
<product id="107">  
<productname>Sugar</productname>   
<weight>1000 gms</weight>   
</product>  
</class>  
Displayproduct.xsl  
<?xml version="1.0" encoding="UTF-8"?>  
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">  
<xsl:template match="/">  
<html>  
<body>  
<h2>Product List</h2>  
<table border="1">  
<tr bgcolor="#9acd32">  
<th>Product ID</th>  
<th>Product Name</th>  
<th>Quantity</th>  
</tr>  
<xsl:for-each select="class/product">  
<tr>  
<td> <xsl:value-of select="@id"/> </td>  
<td> <xsl:value-of select="productname"/> </td>  
<td> <xsl:value-of select="weight"/> </td>  
</tr>  
</xsl:for-each>  
</table>  
</body>  
</html>  
</xsl:template>  
</xsl:stylesheet>