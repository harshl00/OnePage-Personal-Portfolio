Course Code: CSA2009  
Course Title: Web 2.0 
Lab sheet 10 - Module 3 
Problem Statement: 
You are tasked with building an Employee Management System using AngularJS. The system 
should allow administrators to view, add, edit, and delete employee records stored in a table 
format. 
Employeedetails.html 
<!DOCTYPE html> 
<html lang="en" ng-app="employeeManagementApp"> 
<head> 
<meta charset="UTF-8"> 
<title>Employee Management System</title> 
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script> 
<script src="Employeedetails.js"></script> 
</head> 
<body ng-controller="EmployeeController as vm"> 
<h1>Employee Management System</h1> 
<!-- Form for adding new employee --> 
<form ng-submit="vm.addEmployee()"> 
<label for="employeeId">Employee ID:</label> 
<input type="text" id="employeeId" ng-model="vm.newEmployee.employeeId" required><br> 
<label for="name">Name:</label> 
<input type="text" id="name" ng-model="vm.newEmployee.name" required><br> 
<label for="department">Department:</label> 
<input type="text" id="department" ng-model="vm.newEmployee.department" required><br> 
<label for="position">Position:</label> 
<input type="text" id="position" ng-model="vm.newEmployee.position" required><br> 
<button type="submit">Add Employee</button> 
</form> 
<!-- Table to display employee records --> 
<table border="1"> 
<thead> 
<tr> 
<th>Employee ID</th> 
<th>Name</th> 
<th>Department</th> 
<th>Position</th> 
<th>Action</th> 
</tr> 
</thead> 
<tbody> 
<tr ng-repeat="employee in vm.employees"> 
<td>{{ employee.employeeId }}</td> 
<td>{{ employee.name }}</td> 
<td>{{ employee.department }}</td> 
<td>{{ employee.position }}</td> 
<td> 
<button ng-click="vm.editEmployee(employee)">Edit</button> 
<button ng-click="vm.deleteEmployee(employee)">Delete</button> 
</td> 
</tr> 
</tbody> 
</table> 
</body> 
</html> 
Employeedetails.js 
angular.module('employeeManagementApp', []) 
.controller('EmployeeController', function() { 
var vm = this; 
vm.employees = [ 
{ employeeId: '1', name: 'John Doe', department: 'HR', position: 'Manager' }, 
{ employeeId: '2', name: 'Alice Smith', department: 'Finance', position: 'Accountant' }, 
{ employeeId: '3', name: 'Bob Johnson', department: 'IT', position: 'Developer' } 
]; 
vm.newEmployee = {}; 
vm.addEmployee = function() { 
vm.employees.push(vm.newEmployee); 
vm.newEmployee = {}; 
}; 
vm.editEmployee = function(employee) { 
vm.newEmployee = angular.copy(employee); 
}; 
vm.deleteEmployee = function(employee) { 
var index = vm.employees.indexOf(employee); 
vm.employees.splice(index, 1); 
}; 
}); 