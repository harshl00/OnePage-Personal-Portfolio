Course Code: CSA2009  
Course Title: Web 2.0 
Lab sheet 9 - Module 3 
Problem Statement: 
You are tasked with developing a Student Marks Management System using AngularJS. The system should 
allow teachers to enter, view, edit, and delete student marks details stored in a table format.  
 
StudentsMarks.html 
<!DOCTYPE html> 
<html lang="en" ng-app="studentMarksApp"> 
<head> 
    <meta charset="UTF-8"> 
    <title>Student Marks Management System</title> 
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script> 
    <script src="StudentMarks.js"></script> 
</head> 
<body ng-app="studentMarksApp" ng-controller="StudentMarksController as vm"> 
    <h1>Student Marks Management System</h1> 
 
    <!-- Form for adding new student marks --> 
    <form ng-submit="vm.addStudentMark()"> 
        <label for="studentId">Student ID:</label> 
        <input type="text" id="studentId" ng-model="vm.newMark.studentId" required><br> 
 
        <label for="name">Name:</label> 
        <input type="text" id="name" ng-model="vm.newMark.name" required><br> 
 
        <label for="subject">Subject:</label> 
        <input type="text" id="subject" ng-model="vm.newMark.subject" required><br> 
 
        <label for="marks">Marks Obtained:</label> 
        <input type="number" id="marks" ng-model="vm.newMark.marks" required><br> 
 
        <button type="submit">Add Student Mark</button> 
    </form> 
 
    <!-- Table to display student marks --> 
    <table border="1"> 
        <thead> 
            <tr> 
                <th>Student ID</th> 
                <th>Name</th> 
                <th>Subject</th> 
                <th>Marks Obtained</th> 
                <th>Action</th> 
            </tr> 
        </thead> 
        <tbody> 
            <tr ng-repeat="mark in vm.studentMarks"> 
                <td>{{ mark.studentId }}</td> 
                <td>{{ mark.name }}</td> 
                <td>{{ mark.subject }}</td> 
                <td>{{ mark.marks }}</td> 
                <td> 
                    <button ng-click="vm.editStudentMark(mark)">Edit</button> 
                    <button ng-click="vm.deleteStudentMark(mark)">Delete</button> 
                </td> 
            </tr> 
        </tbody> 
    </table> 
</body> 
</html> 
StudentsMarks.js 
 
angular.module('studentMarksApp', []) 
    .controller('StudentMarksController', function() { 
        var vm = this; 
        vm.studentMarks = [ 
            { studentId: '1', name: 'John', subject: 'Math', marks: 90 }, 
            { studentId: '2', name: 'Alice', subject: 'Science', marks: 85 }, 
            { studentId: '3', name: 'Bob', subject: 'English', marks: 75 } 
        ]; 
 
        vm.newMark = {}; 
        vm.addStudentMark = function() { 
            vm.studentMarks.push(vm.newMark); 
            vm.newMark = {}; 
        }; 
 
        vm.editStudentMark = function(mark) { 
            vm.newMark = angular.copy(mark); 
        }; 
 
        vm.deleteStudentMark = function(mark) { 
            var index = vm.studentMarks.indexOf(mark); 
            vm.studentMarks.splice(index, 1); 
        }; 
    }); 
 