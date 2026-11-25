var Name = prompt("Enter Your Name ")

var num1 = prompt("Enter Your English Marks")
var num2 = prompt("Enter Your Urdu Marks")
var num3 = prompt("Enter Your Maths Marks")
var num4 = prompt("Enter Your Computer Marks ")
var num5 = prompt("Enter Your Islamiyat Marks")


var ObtainedMarks = num1 + num2 + num3 + num4 +num5
var TotalMarks = 500
var Percentage = ObtainedMarks / TotalMarks * 100 + "%"


document.writeln("<table border='3px'> <tr><th colspan='4' style='text-align:center;'>" + Name + "</th></tr> <tr><th>Subject</th> <th>ObtainedMarks</th> <th>TotalMarks</th> <th>Percentage</th></tr> <tr><th>English</th> <td>" + num1 + "</td> <td>100</td></tr> <tr><th>Urdu</th> <td>" + num2 + "</td> <td>100</td></tr> <tr><th>Maths</th> <td>" + num3 + "</td> <td>100</td></tr> <tr><th>Computer</th> <td>" + num4 + "</td> <td>100</td></tr> <tr><th>Islamiyat</th> <td>" + num5 + "</td> <td>100</td></tr> <tr><td></td> <td></td> <td></td> <th>" + Percentage + "</th></tr></table>");



