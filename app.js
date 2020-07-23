// //chapter 1
// //Alert
// //question 1
// alert("Hello user!Welcome to our website!");
// //question 2
// alert("Error!Please enter a valid password.");
// //question 3
// alert("Welcome to JS Land...\nHappy Coding!");
// //question 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this message from creating additional additional dialogs.");
// //question 5
// alert("Hello..I can run JS through my web brower's console");

// //chapter 2
// //Variable for strings
// //question 1
// var username = "USER";
// //question 2
// var myName   =  "Kashish Fatima ";
// //question 3
// var message = "Hello World";
// alert(message)
// //question 4
// var studentname = "Jhone Doe";
// alert(studentname);
// var studentage = "15 years old";
// alert(studentage);
// var studentcourse = "Certified Mobile Application Development";
// alert(studentcourse);
// //question 5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
// //question 6 
// var email = "kashishfatima691@gmail.com";
// var statement = "My email address is ";
// alert(statement + email);
// //question 7
// var book = "A smarter way to learn JavaScript";
// var message = "I am trying to learn from the Book ";
// alert(message + book);
// //question 8
// document.write("Yah!I can write HTML content through JavaScript")
// //question 9
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// //Chapter 3
// //Variable for numbers
// var age = 18;
// //question 1
// alert("I am " + age + " years old");
// //question 2
// var num = +prompt("How many times you visited here?","Enter number")
// alert("You have visited this site" + " " + num +" " + "times")
// //question 3
// var birthyear=2002
// document.write("my birthYear is"+" "+birthyear)
// document.write("Data type of my declared variable is"+ typeof(birthYear))
// //question 4
// var visitorname = "John Doe "
// var producttitle = " T-shirt"
// var quantity = 5 ;
// document.write(visitorname + "ordered " + quantity + producttitle + "(s) on XYZ Clothing store")

// //chapter 4
// //Variable Names:Legal and Illegal
// //question 1
// var a = 10, b = 25, c = 30
// //question 2
// //legal variable names
// var n = 5;
// var camelCase = "Camelcase";
// var $4 = "4 dollars";
// var _name_ = "kashish";
// var gameprompt = 123; 
// //illegal variable names
// var 123 = "hello";
// var full name = "Kashish Fatima";
// var #id = 01;
// var 1name = "ALI";
// var "members" = 9;
// //question 3
// document.write("<h1> Rules for naming JS variables </h1><br>")
// document.write("Variable names can only contain letters, numbers, $ and _"+"<br>")
// document.write("Variables must begin with a letter, $ or_"+"<br>")
// document.write("Variable names are case sensitive"+"<br>")
// document.write("Variable names should not be JS keywords")

// //Chapter 5
// //Math Expressions 
// //question 1
// var num1 = +prompt("First Number:","Enter first number");
// var num2 = +prompt("Second Number:","Enter second number");
// var num = num1 + num2
// document.write("Sum of"+" "+num1+" and "+num2+" is "+num);
// //question 2
// //subtraction
// var num1 = +prompt("First Number:","Enter first number");
// var num2 = +prompt("Second Number:","Enter second number");
// var num = num1 - num2
// document.write("Difference of"+" "+num1+" and "+num2+" is "+num);
// //multiplication
// var num1 = +prompt("First Number:","Enter first number");
// var num2 = +prompt("Second Number:","Enter second number");
// var num = num1 * num2
// document.write("Product of"+" "+num1+" and "+num2+" is "+num);
// //division
// var num1 = +prompt("First Number:","Enter first number");
// var num2 = +prompt("Second Number:","Enter second number");
// var num = num1 / num2
// document.write("Quotient of"+" "+num1+" and "+num2+" is "+num);
// //modulus
// var num1 = +prompt("First Number:","Enter first number");
// var num2 = +prompt("Second Number:","Enter second number");
// var num = num1 % num2
// document.write("Remainder of"+" "+num1+" and "+num2+" is "+num);
// //question 3
// var a;
// document.write("Value after variable declaration is undefined" + "<br>")
// a = 5;
// document.write("Initial value: 5" + "<br>")
// a = ++a;
// document.write("Value after increment is: 6" + "<br>")
// a = a + 7;
// document.write("Value after addition is: 13" + "<br>")
// a = --a;
// document.write("Value after decrement is: 12" + "<br>")
// a = a % 3;
// document.write("The remainder is: 0")
// //question 4
// var price = 600;
// var num = 5;
// var total = price * num
// document.write("Total cost to buy" + " " + num + " " + "tickets to a movie is " + total +"PKR")
// //question 5
// var num = +prompt("Number:","Enter number");
// document.write("Table of" + " " + num + "<br>")
// document.write(num + "x" + "1" + "=" + num*1 + "<br>")
// document.write(num + "x" + "2" + "=" + num*2 + "<br>")
// document.write(num + "x" + "3" + "=" + num*3 + "<br>")
// document.write(num + "x" + "4" + "=" + num*4 + "<br>")
// document.write(num + "x" + "5" + "=" + num*5 + "<br>")
// document.write(num + "x" + "6" + "=" + num*6 + "<br>")
// document.write(num + "x" + "7" + "=" + num*7 + "<br>")
// document.write(num + "x" + "8" + "=" + num*8 + "<br>")
// document.write(num + "x" + "9" + "=" + num*9 + "<br>")
// document.write(num  + "x" + "10" + "=" + num*10)
// //question 6
// var celsius = +prompt("Enter the temperature in Celsius:")
// var fahrenheit = (celsius * 9 / 5) + 32
// document.write(celsius + "°C is " +  fahrenheit + "°F"+"<br>")
// var f = +prompt("Enter the temperature in Farhenheit:")
// var c =  (f - 32) * (5 / 9)
// document.write(f + "°F is " + c + "°C")
// //question 7
// var price1 = 650;
// var quan1 = 3;
// var price2 = 100;
// var quan2 = 7;
// var shipping = 100;
// item1 = price1 * quan1
// item2 = price2 * quan2
// var totalcost = item1 + item2 + shipping
// document.write("<h1> Shopping Cart </h1><br>")
// document.write("Price of item 1 is " + price1 + "<br>")
// document.write("Quantity of item 1 is " + quan1 + "<br>")
// document.write("Price of item 2 is " + price2 + "<br>")
// document.write("Quantity of item 2 is " + quan2 + "<br>")
// document.write("Shipping Charges "+shipping + "<br>")
// document.write("Total cost of your order is " + totalcost)
// //question 8
// var totalmarks = 1100;
// var marksobtained = 850;
// var percentage = marksobtained/totalmarks* 100;
// document.write("<h1> Marks Sheet </h1><br>")
// document.write("Total Marks: " + totalmarks + "<br>")
// document.write("Marks Obtained: " + marksobtained+ "<br>" )
// document.write("Percentage: " + percentage + "%"+ "<br>")
// //question 9
// var usdollars = 10;
// var saudiriyals = 25;
// var pkr = (usdollars * 104.80) + (28 * saudiriyals)
// document.write("<h1> Currency in PKR </h1><br>")
// document.write("Total Currency in PKR: " + pkr)
// //question 10
// var digit = +prompt("Write digit here:")
// var calculation = +( (digit+5) * (10)) / 2
// alert(calculation)
// //question 11
// var currentYear = +prompt("Write current year:")
// var birthYear = +prompt("Write your birth year:")
// var age = (currentYear - birthYear)
// document.write("<h1> Age Calculator </h1><br>")
// document.write("Current Year: " + currentYear + " <br> ")
// document.write("Birth Year: " + birthYear + " <br> ")
// document.write("Your Age is: " + age + "<br>")
// document.write("They are either " + age + " or " + (++age) + " years old")
// //question 12
// var radius = 20;
// var circumference = 2 * 3.142 * radius
// var area = 3.142 * radius * radius
// document.write("<h1> The Geometrizer </h1><br>")
// document.write("Radius of a circle: "+radius + " <br> ")
// document.write("The circumference is: "+circumference + " <br> ")
// document.write("The area is: "+area)
// //question 13
// var favouritesnack = "chocolate chip";
// var currentage = 15;
// var maxage = 65;
// var snackamount = 3;
// var total = (maxage - currentage)*snackamount
// document.write("<h1> The Lifetime Supply Calculator </h1><br>")
// document.write("Favourite Snack: " + favouritesnack + " <br> ")
// document.write("Current age: " + currentage + " <br> ")
// document.write("Estimated Maximum Age: " + maxage + " <br> ")
// document.write("Amount of snacks per day: " + snackamount + " <br> ")
// document.write("You will need " + total +" " + favouritesnack +" " + "to last you until the ripe old age of " + maxage)


// //Chapter 6-9
// //Math Expressions
// //question 1
// var a = 10;
// a = ++a;
// a = a++;
// a = --a;
// a = a--;
// document.write("Result:"+"<br>")
// document.write("The value of a is: 10"+"<br>"+"<br>")
// document.write("<hr>"+"<br>")
// document.write("The value of ++a is: 11"+"<br>")
// document.write("Now the value of a is: 11"+"<br>" + "<br>")
// document.write("The value of a++ is: 11"+"<br>")
// document.write("Now the value of a is: 12"+"<br>" +"<br>")
// document.write("The value of --a is: 11"+"<br>")
// document.write("Now the value of a is: 11"+"<br>" + "<br>")
// document.write("The value of a-- is: 11"+"<br>")
// document.write("Now the value of a is: 10")
// //question 2
// var a = 2,b=1;
// var result = --a - --b + ++b + b--;
// document.write("a is 1" + "<br>")
// document.write("b is 2" + "<br>")
// document.write("Result is "+ result + "<br>")
// document.write("--a;1" + "<br>")
// document.write("--a - --b;1" + "<br>")
// document.write("--a - --b + ++b;2" + "<br>")
// document.write("--a - --b + ++b + b--;3" + "<br>")
// //question 3
// var name = prompt("Name:","Enter your name");
// alert("Hello,"+ name + "!")
// //question 4
// //question is not written
// //question 5
// var num = +prompt("Number:","Enter number");
// if (!num) {
//     num = 5
// }
// document.write("Table of" + " " + num + "<br>")
// document.write(num + "x" + "1" + "=" + num*1 + "<br>")
// document.write(num + "x" + "2" + "=" + num*2 + "<br>")
// document.write(num + "x" + "3" + "=" + num*3 + "<br>")
// document.write(num + "x" + "4" + "=" + num*4 + "<br>")
// document.write(num + "x" + "5" + "=" + num*5 + "<br>")
// document.write(num + "x" + "6" + "=" + num*6 + "<br>")
// document.write(num + "x" + "7" + "=" + num*7 + "<br>")
// document.write(num + "x" + "8" + "=" + num*8 + "<br>")
// document.write(num + "x" + "9" + "=" + num*9 + "<br>")
// document.write(num  + "x" + "10" + "=" + num*10)
// //question 6
// var sub1 = prompt("Subject 1:","Enter first subject");
// var sub2 = prompt("Subject 2:","Enter second subject");
// var sub3 = prompt("Subject 3:","Enter third subject");
// var marks1 = +prompt("Marks 1:","Enter first subject marks out of 100");
// var marks2 = +prompt("Marks 2:","Enter second subject marks out of 100");
// var marks3 = +prompt("Marks 3:","Enter third subject marks out of 100");
// var total1 = 100;
// var total2 = 100;
// var total3 = 100;
// var percentage1 = marks1/total1 * 100;
// var percentage2 = marks2/total2 * 100;
// var percentage3 = marks3/total3 * 100;
// var total = total1 + total2 + total3;
// var totalmarks = marks1 + marks2 + marks3;
// var percentage = totalmarks/total * 100;
// document.write("<table> <tr> <th>Subject</th> <th>Total Marks </th> <th> Obtained Marks </th>  <th>Percentage</th> </tr> <tr> <td>" + sub1 + "</td> <td>" + total1 + "</td> <td>" + marks1 + "</td>  <td>" + percentage1 + "%" + "</td> </tr> <tr> <td>" + sub2 + "</td> <td>" + total2 + "</td> <td>" + marks2 + "</td>  <td>" + percentage2 + "%" + "</td> </tr> <tr> <td>" + sub3 + "</td> <td>" + total3 + "</td> <td>" + marks3 + "</td>  <td>" + percentage3 + "%" + "</td> </tr>              <tr> <td> Total marks of all subjects </td> <td>" + 300 + "</td> <td> " + totalmarks + "</td>  <td>" + percentage + "%" + "</td> </tr> </table>")


// //Chapter 9-11
// //User Input & Conditional Statement
// //question 1
// var city = prompt("City:","Enter your city");
// if(city == "Karachi"){
//     alert("Welcome to city of lights")
// }
// //question 2
// var gender = prompt("Gender:","Enter your gender");
// if(gender == "Male"){
//     alert("Good Morning Sir.")
// }
// else if(gender == "Female"){
//     alert("Good Morning Ma'am.")
// }
// //question 3
// var colour = prompt("Colour:","Enter colour");
// colour = colour.toLowerCase()
// if(colour == "red"){
//     alert("Must Stop")
// }
// else if(colour == "yellow"){
//     alert("Ready to move")
// }
// else if(colour == "green"){
//     alert("Move now")
// }


// //question 4
// var carFuel = prompt("Fuel:","Enter your remaining fuel in car in litres");
// if(carFuel < 0.25){
//     alert("Please refill the fuel in your car")
// }
// //question 5
// //a
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }
// //output
// //given condition for variable a is true
// //b
// var b = 82; 
// if (b++ === 83){
//      alert("given condition for variable b is true"); 
// }
// //output
// //condition is not true 
// //c
// var c = 12;
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
//     alert("condition 3 is true");
// } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
// } 
// //output
// //condition 2 is true
// //condition 4 is true
// //d
// var materialCost = 20000;
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }
// //output
// //the cost equals

// //e
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// } 
// //output
// //True
// //f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// } 
// //output
// //car is smaller than cat



// //question 6
// var marksObtained = +prompt("Marks Obtained:","Enter marks obtained in 3 subjects");
// var totalmarks = +prompt("Total Marks:","Enter your total marks");
// var percentage = marksObtained/totalmarks * 100;
// document.write("<h1> Marks Sheet </h1><br>")
// document.write("Total marks: " + totalmarks + "<br>")
// document.write("Marks obtained: " + marksObtained + "<br>")
// document.write("Percentage: " + percentage + "%" + "<br>")
// if(percentage >= 80){
//     document.write("Grade: A-one" + "<br>")
//     document.write("Remarks: Excellent" + "<br>")
// }
// else if(percentage >= 70){
//     document.write("Grade: A" + "<br>")
//     document.write("Remarks: Good" + "<br>")
// }
// else if(percentage >= 60){
//     document.write("Grade: B" + "<br>")
//     document.write("Remarks: You need to improve" + "<br>")
// }
// else if(percentage < 60) {
//     document.write("Grade: Fail" + "<br>")
//     document.write("Remarks: Sorry" + "<br>")
// }
// //question 7
// var num = 5;
// var askUser = +prompt("Guess Number:","Guess the secret number");
// if(askUser == 5){
//     alert("Bingo! Correct answer.")
// }
// else if(askUser == 4){
//     alert("Close enough to the correct answer.")
// }

// //question 8
// var num = +prompt("Number:","Enter number");
// if(num % 3 == 0){
//     alert("The given number is divisible by 3.")
// }

// if(num % 3 == 0){
//     alert("The given number is divisible by 3.")
// }

// //question 9
// var num = +prompt("Number:","Enter number");
// if(num % 2 == 0){
//     alert("It is an even number.")
// }
// else if(num % 2 == 1){
//     alert("It is an odd number.")
// }
// //question 10
// var temp = +prompt("Temperature:","Enter temperature");
// if(temp > 40){
//     alert("It is too hot outside.")
// }
// else if(temp > 30){
//     alert("The Weather today is normal.")
// }
// else if(temp > 20){
//     alert("Today's Weather is cool.")
// }
// else if(temp > 10){
//     alert("OMG! Today's Weather is so cool.")
// }
// //question 11
// var num1 = prompt("First Number:","Enter first number");
// var operator = prompt("Operator:","Enter operator");
// var num2 = prompt("Second Number:","Enter second number");

// alert(num1 + operator + num2)
// if(operator === "+"){
//     alert((+num1)+(+num2))
// }
// else if(operator === "-"){
//     alert(num1 - num2)
// }
// else if(operator === "*"){
//     alert(num1 * num2)
// }
// else if(operator === "/"){
//     alert(num1 / num2)
// }
// else if(operator === "%"){
//     alert(num1 % num2)
// }


// //chapter 12-13
// //IF ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS
// //question 1
// //not able to attempt it
// //question 2
// var num1 = +prompt("Number:","Enter first number");
// var num2 = +prompt("Number:","Enter second number");
// if(num1 > num2){
//     alert(num1)
// }
// else if(num2 > num1){
//     alert(num2)
// }
// else{
//     alert("Both numbers are equal.")
// }
// //question 3 
// var num = +prompt("Number:","Enter number");
// if(num > 0){
//     alert("It is a positive number.")
// }
// else if(num < 0){
//     alert("It is a negative number.")
// }
// else if(num == 0){
//     alert("This number is zero.")
// }
// //question 4
// var input = prompt("Character:","Enter a string of length 1");
// if (input == "a" || input == "A" || input == "e" || input == "E" || input == "i" || input == "I" || input == "o" || input == "O"  || input == "u" || input == "U" ){
//    alert("True")
// }
// else{
//     alert("False");
// }
// //question 5
// var password = "kashish@123";
// var askUser = prompt("Password:","Enter your password");
// if(askUser == password){
//     alert("Correct!The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password")
// }
// //question 6
// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }
// //question 7
// var time= prompt("Time:","Enter time ike this 1900 = 7pm");
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!")
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon!")
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening!")
// }
// else if(time >= 2100 && time <= 2359){
//     alert("Good Night!")
// }



// //Chapter 14-16
// //Arrays
// //question 1
// var studentnames = []
// //question 2
// var studentnames = new Array();
// //question 3
// var strings = ["kashish","fatima","123"]
// console.log(strings)
// //question 4
// var numbers = [1000,256,343,890]
// console.log(numbers)
// //question 5
// var boolean = [true,false]
// console.log(boolean)
// //question 6
// var mixarray = ["Maria",4007,false]
// console.log(mixarray)
// //question 7
// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
// document.write("<b>Qualifications:<b><br>")
// document.write("1)"+qualifications[0]+"<br>")
// document.write("2)"+qualifications[1]+"<br>")
// document.write("3)"+qualifications[2]+"<br>")
// document.write("4)"+qualifications[3]+"<br>")
// document.write("5)"+qualifications[4]+"<br>")
// document.write("6)"+qualifications[5]+"<br>")
// document.write("7)"+qualifications[6]+"<br>")
// document.write("8)"+qualifications[7]+"<br>")


// //question 8
// var studentNames = ["Fahad","Mahrukh","Salman"]
// for (i = 0;i<studentNames.length;i++){
//     var studentMarks = [320,230,480]
//     for (var j=0;j<studentMarks.length;j++){
//         var percentage = studentMarks[i] *100 / 500
//         }
//         document.write("Score of "+studentNames[i]+" is "+ studentMarks[i]+"."+"Percentage: " + percentage + "%"+"<br>")
    
//     }
// //question 9
// var colornames = ["Orange","Green","Yellow","Blue","Pink"];
// document.write(colornames + "<br>");
// //a
// var colorBeginning = prompt("What color you want to add to the beginning?","Enter color here")
// colornames.unshift(colorBeginning)
// document.write(colornames + "<br>");
// //b
// var colorEnd = prompt("What color you want to add to the end?","Enter color here")
// colornames.push(colorEnd)
// document.write(colornames + "<br>");
// //c
// colornames.unshift("Brown","Purple")
// document.write(colornames + "<br>")
// //d
// colornames.shift()
// document.write(colornames + "<br>")
// //e
// colornames.pop()
// document.write(colornames + "<br>")
// //f
// //not able to attempt
// //g
// //not able to attempt

// //question 10
// var studentScores = [320,230,480,120]
// document.write("Scores of Students:" + studentScores + "<br>")
// var ascendingOrder = studentScores.sort()
// document.write("Ordered Scores of Students:" + ascendingOrder + "<br>")
// //question 11
// var cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var selectedCities = cityNames.slice(2,4)
// document.write("Cities List:" + "<br>" + cityNames +"<br>")
// document.write("Selected Cities List:"+ "<br>" + selectedCities)
// //question 12
// var arr = ["This","is","my","cat"];
// string = arr.join(" ")
// document.write("Array:"+"<br>"+arr+"<br>")
// document.write("String:"+"<br>"+string)


// //question 13
// var devices = []
// devices.push("Keyboard")
// devices.push("Mouse")
// devices.push("Printer")
// devices.push("Monitor")



// //question 14
// var devices = []
// devices.unshift("Monitor")
// devices.unshift("Printer")
// devices.unshift("Mouse")
// devices.unshift("Keyboard")


// //question 15 
// var mobManufactureres = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write("<select><option>" + mobManufactureres[0] + "</option><option>" + mobManufactureres[1]+"</option><option>"+mobManufactureres[2]
// +"</option><option>"+mobManufactureres[3]+"</option><option>"+mobManufactureres[4]+"</option><option>"+mobManufactureres[5]+"</option> </select> ")


// //chapter 17-20
// //Arrays and Loops
// //question 1
// var multiArray = [
//     [],
//     [],
//     []
// ]
// //question 2
// var multiArray = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// //question 3
// for (var i=1;i<=10;i++){
//     document.write(i + "<br>")
// }
// //question 4
// var tablenum = +prompt("Enter a number to show its multiplication table")
// var tablelength = +prompt("Enter length of multiplication table")
// document.write("Multiplication table of " + tablenum + "<br>")
// document.write("Length " + tablelength + "<br>" + "<br>")
// for(var i = 1;i<=tablelength;i++){
//     document.write(tablenum + "x" + i + "=" + tablenum*i +"<br>")
// }
// //question 5
// var fruits = ["apple","banana","mango","orange","strawberry"]
// for (var i=0;i<fruits.length;i++){
//     document.write(fruits[i] + "<br>")
// }
// for (var i = 0;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " +fruits[i] + "<br>")
// }
// //question 6
// //a

// document.write(" <h2>Counting: </h2>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",")

// }


// //b

// document.write(" <h2>Reverse Counting: </h2> ")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",")
// }


// //c
// document.write(" <h2> Even: </h2>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ",")
// }


// //d

// document.write(" <h2> Odd: </h2>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i +",")
// }


// //e

// document.write("<h2> Series: </h2>")
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i + "K,")
// }


// //question 7
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// var askUser = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
// var isFound = false
// for (i = 0; i < bakeryItems.length; i++) {
//     if (askUser === bakeryItems[i]) {
//         alert(askUser + " is available at index " + i + " in our bakery")
//         isFound = true
//         break
//     }
// }
// if (isFound === false) {
//     alert("We are sorry. " + askUser + " is not available in our bakery")
// }
// //question 8
// var A = [24,53,78,91,12]
// document.write("Array items: " + A + "<br>")
// A = A.sort()
// document.write("The largest number is " + A[A.length - 1])
// //question 9
// var A = [24,53,78,91,12]
// document.write("Array items: " + A + "<br>" )
// A = A.sort().reverse()
// document.write("The smallest number is " + A[A.length - 1])
// //question 10
// for (var i = 5;i <= 100;i = i + 5){
//     document.write(i + ",")
// }









//chapter 21-25
//String Methods
//question 1
// var firstName = prompt("First Name:","Enter your first name")
// var lastName = prompt("Last Name:","Enter your last name")
// var fullName = firstName + " " + lastName
// alert("Hello" + " " + fullName + "!")
//question 2
// var mobModel = prompt("Favourite Mobile phone Model:","What's your favourite mobile phone model?")
// document.write("My favourite phone is: " + mobModel + "<br>")
// document.write("Length of string: " + mobModel.length)
//question 3
// var string = "Pakistani"
// var indexStr = string.indexOf('n');
// document.write("String: " + string + "<br>")
// document.write("Index of 'n': " + indexStr)
//question 4
// var string = "Hello World"
// var indexStr = string.lastIndexOf('l');
// document.write("String: " + string + "<br>")
// document.write("Last index of 'l': " + indexStr)
//question 5
// var string = "Pakistani"
// var indexStr = string.charAt(3);
// document.write("String: " + string + "<br>")
// document.write("Character at index 3: " + indexStr)
//question 6
// var firstName = prompt("First Name:","Enter your first name")
// var lastName = prompt("Last Name:","Enter your last name")
// var fullName = firstName.concat(' '+lastName)
// alert("Hello" + " " + fullName + "!")
// //question 7
// var city = "Hyderabad"
// var city1 = city.replace("Hyder","Islam")
// document.write("City: " + city + "<br>")
// document.write("After replacement: " + city1)
// //question 8
// var message = "Ali and Sami are best friends.They play cricket and football together."
// var message1 = message.replace(/and/g,"&")
// document.write("Before replacement: " + message + "<br>")
// document.write("After replacement: " + message1)
// //question 9
// var string = "472"
// string1 = parseInt(string)
// document.write("Value: " + string + "<br>")
// document.write("Type: " + typeof(string) + "<br>")
// document.write("Value: " + string1 + "<br>")
// document.write("Type: " + typeof(string1) + "<br>")
// //question 10
// var askUser = prompt("User Input:","Enter your input")
// var askUser1 = askUser.toUpperCase()
// document.write("User input: " + askUser + "<br>")
// document.write("Upper case: " + askUser1)
// //question 11
// var askUser = prompt("User Input:","Enter your input")
// var firstChar = askUser.slice(0,1);
// firstChar = firstChar.toUpperCase()
// var otherChar = askUser.slice(1)
// otherChar = otherChar.toLowerCase()
// document.write("User input: " + askUser + "<br>")
// document.write("Title case: " + firstChar + otherChar)
// //question 12
// var num = 35.36;
// num1 = num.toString()
// var result = num1.replace(".","")
// document.write("Number: " + num + "<br>")
// document.write("Result: " + result + "<br>")
// //question 13
// var userName = prompt("User Name:","Enter your username")
// userName = userName.toLocaleLowerCase()
// var check = false

// for (i=0;i<userName.length;i++){
//     if(userName.slice(i,i+1).charCodeAt()== 33 ||userName.slice(i,i+1).charCodeAt()== 44 ||userName.slice(i,i+1).charCodeAt()== 46 || userName.slice(i,i+1).charCodeAt()== 64 ){
//         check = true;
//     }else{
//         check = false
//     }
// }
// if (check == true){
//     alert("Please enter a valid username")
// }else{
//     userName
// }
// //question 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var askUser = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
// askUser = askUser.toLocaleLowerCase()
// var isFound = false
// for (i = 0; i < A.length; i++) {
//     if (askUser === A[i]) {
//         alert(askUser + " is available at index " + i + " in our bakery")
//         isFound = true
//         break
//     }
// }
// if (isFound === false) {
//     alert("We are sorry. " + askUser + " is not available in our bakery")
// }
// //question 15
// var askUser = prompt("Password:","Enter your password");
// var flag = 0
// var count = 0
// var check = +askUser.slice(0,1)
// if (check.toString()!= "NaN"){
//     flag++
// }else{
//     for (i = 0 ;i < askUser.length;i++){
//         var checker = +askUser.slice(i,i+1)
//         if (checker.toString() == "NaN"){
//             count++
//         }
//     }
// }
// if (flag == 1 ||count == askUser.length){
//     alert("Please enter a valid password")
// }
// //question 16
// var university = "University of Karachi"
// var uniSplit = university.split("")

// for (i=0;i<university.length; i++) {
//     document.write(uniSplit[i]+"<br>");
// }
// //question 17
// var askUser = prompt("User Input:","Enter your input")
// var lastChar = askUser.charAt(askUser.length - 1)
// document.write("User input: " + askUser + "<br>")
// document.write("Last character of input: " + lastChar)
// //question 18
// var string = "The quick brown fox jumps over the lazy dog"
// var count = 0
// var word = "the"
// var wordCheck = string.toLocaleLowerCase()
// for (i = 0;i < wordCheck.length;i++){
//     checker = wordCheck.slice(i,(word.length) + i)

//     if (word == checker){
//         count++
//     }
// }
// console.log("Text: " + string)
// console.log("There are " + count + " occurrence(s) of word 'the'")



// //Chapter 26-30
// //Math Methods
// //question 1
// var num = +prompt("Positive Integer:","Enter a positive integer")
// var numRound = Math.round(num)
// var numFloor = Math.floor(num)
// var numCeil= Math.ceil(num)
// if (num > 0){
// document.write("Number: " + num + "<br>")
// document.write("Round off Value: " + numRound + "<br>")
// document.write("Floor Value: " + numFloor + "<br>")
// document.write("Ceil Value: " + numCeil + "<br>")
// }
// else{
//     alert("Please enter valid input!")
// }
// //question 2
// var num = +prompt("Negative Floating Point Number:","Enter a negative floating point number")
// var numRound = Math.round(num)
// var numFloor = Math.floor(num)
// var numCeil= Math.ceil(num)

// document.write("Number: " + num + "<br>")
// document.write("Round off Value: " + numRound + "<br>")
// document.write("Floor Value: " + numFloor + "<br>")
// document.write("Ceil Value: " + numCeil + "<br>")
// //question 3
// var num = +prompt("Number:","Enter a number")
// var absoluteNum = Math.abs(num)
// document.write("The absolute value of " + num + " is " + absoluteNum)
// //question 4
// var dice = Math.random() * 6 + 1
// var diceFloor = Math.floor(dice)
// document.write("Random dice value: " + diceFloor)
// //question 5
// var coinToss =  Math.random() * 2 + 1
// var tossFloor = Math.floor(coinToss)
// document.write(tossFloor + "<br>")
// if (tossFloor === 2){
//  document.write("Random coin value: Heads")
// } 
// else if (tossFloor === 1) {
//     document.write("Random coin value: Tails")
// }
// //question 6
// var num = Math.random() * 100 + 1
// var numFloor = Math.floor(num)
// document.write("Random number between 1 and 100: " + numFloor)
// //question 7
// var askUser = prompt("Weight in kilograms:","Enter your weight in kilograms")
// askUser = askUser.toLowerCase()
// var weight = askUser.split("k")
// document.write("The weight of user is" + " " + weight[0] + " " + "kilograms")
// //question 8
// var num = Math.random() * 10 + 1
// var numFloor = Math.floor(num)
// var askUser = +prompt("Guess the number:","Enter a number between 1 and 10")
// if (askUser === numFloor){
//     alert("Congratulations!You guessed correctly")
// }
// else{
//     alert("Try again")
// }
// //Chapter 31-34
// //Date Methods
// //question 1
// var today = new Date();
// document.write(today)
// //question 2
// var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var today = new Date();
// var monthNow = today.getMonth();
// var currentMonth = monthNames[monthNow];
// alert("Current Month: " + currentMonth)
// //question 3
// var dayNames = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
// var today = new Date();
// var dayNow = today.getDay();
// var currentDay = dayNames[dayNow];
// alert("Today is " + currentDay)
// //question 4
// var dayNames = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
// var today = new Date();
// var dayNow = today.getDay();
// if (dayNow === 0 || dayNow === 6){
//     alert("It's Fun day")
// }
// //question  5
// var wholeDate = new Date();
// var dateonly = wholeDate.getDate();
// if (dateonly < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }
// //question 6
// var today = new Date();
// var todayMilli = today.getTime()
// var oldDate = new Date("Jan 1,1970")
// var oldMilli = oldDate.getTime()
// var diffMilli = todayMilli - oldMilli
// var minsElapse = Math.floor(diffMilli/(1000*60))
// document.write("Current Date: " + today + "<br>")
// document.write("Elapsed milliseconds since January 1,1970: " + diffMilli + "<br>" )
// document.write("Elapsed minutes since January 1,1970: " + minsElapse)
// //question 7
// var today = new Date();
// var currentHour = today.getHours();
// if (currentHour <= 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }
// //question 8
// var laterDate = new Date("Dec 31,2020");
// document.write("Later Date: " + laterDate)
// //question 9
// var ramzanDate = new Date("June 18,2015");
// var today = new Date();
// var todayMilli = today.getTime()
// var ramzanMilli = ramzanDate.getTime()
// var diffMilli = todayMilli - ramzanMilli
// var daysElapse = Math.floor(diffMilli/(1000*60*60*24))
// alert(daysElapse +" days have passed since 1st Ramadan, 2015")
// //question 10
// var refDate = new Date("Dec 05,2015");
// var refMilli = refDate.getTime()
// var startDate = new Date("Jan 01,2015");
// var startMilli = startDate.getTime()
// var diffMilli = refMilli - startMilli
// var secsElapse = Math.floor(diffMilli/(1000*60))
// document.write("On reference date " + refDate + "," + secsElapse + " seconds had passed since beginning of 2015")
// //question 11
// var today = new Date();
// var oneHourBehind = new Date();
// var changeHour = oneHourBehind.setHours(oneHourBehind.getHours() - 1);
// var oldHour = new Date(changeHour)
// document.write("Current Date: " + today + "<br>")
// document.write("1 hour ago, it was " + oldHour)
// //question 12
// var today = new Date();
// var oneCenturyBehind = new Date();
// var changeYear = oneCenturyBehind.setYear(oneCenturyBehind.getFullYear() - 100);
// var oldYear = new Date(changeYear)
// alert("Current Date: " + today + "\n100 years back, it was " + oldYear)
// //question 13
// var today = new Date();
// var askUser = +prompt("Age:","Enter your age in number")
// var dobAge = new Date(askUser);
// var currentYear = today.getFullYear();
// var dobYear = dobAge.setYear(currentYear - askUser)
// var dobDate = new Date(dobYear)
// var onlyDobYear = dobDate.getUTCFullYear();
// document.write("Your age is " + askUser + "<br>")
// document.write("Your birthyear is " + onlyDobYear)
// //question 14
// document.write("<h1>K-Electric Bill</h1>" + "<br>")
// //a
// var askUser = prompt("Customer Name:","Enter your name")
// document.write("Customer Name: " + askUser + " Customer" + "<br>")
// //b
// var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var today = new Date();
// var monthNow = today.getMonth();
// var currentMonth = monthNames[monthNow];
// document.write("Month: " + currentMonth + "<br>")
// //c
// var unitInNumbers = prompt("Number of units:","Enter your number of units")
// document.write("Number of Units: " + unitInNumbers + "<br>")
// //d
// var chargePerUnit = prompt("Charge per Unit:","Enter your charges per unit")
// document.write("Charges per Unit: " + chargePerUnit + "<br>" + "<br>")
// //e
// var netAmount= unitInNumbers * chargePerUnit
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>")
// //f
// var dueDateCharge = 350
// document.write("Late Payment Surcharge: " + dueDateCharge + "<br>")
// //g
// var grossAmount = netAmount + dueDateCharge
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>")
// //Chapter 35-38
// //Function
// //question 1
// function todayDate() {
//     var dateToday = new Date();
//     document.write(dateToday)
// }
// todayDate()
// //question 2
// function username(firstname,lastname) {
//         alert("Hello " + firstname + " " + lastname + "!")
// }
// username("Kashish","Fatima")
// //question 3
// function addNum(num1,num2){
//          num = num1 + num2
//          document.write(num)
// }
// addNum(3,8)
// //question 4
// function calc(num1,oper,num2){
//     if(oper === "+"){
//         return num1 + num2
//     }
//     else if (oper === "-"){
//         return num1 - num2
//     }
//     else if (oper === "*"){
//         return num1 * num2
//     }
//     else if (oper === "/"){
//         return num1 / num2
//     }
//     else{
//         return "Incorrect Operator"
//     }
// }
// var result1 = calc(3,"+",7)
// var result2 = calc(5,"-",9)
// var result3 = calc(8,"*",6)
// var result4 = calc(2,"/",2)
// document.write(result1 + "<br>")
// document.write(result2 + "<br>")
// document.write(result3 + "<br>")
// document.write(result4 + "<br>")
// //question 5
// function numSquare(num){
//     return num * num
// }
// numSquare(2)
// //question 6
// function numFactorial(num){
//   if(num === 0){
//       return 1
//   }
//   else{
//       return (num * numFactorial(num-1))
//   }
// }
// numFactorial(4)
// //question 7
// function numCounting(){
//     var startNum = +prompt("Enter counting start number")
//     var endNum = +prompt("Enter counting end number")
//     for (var i = startNum;i<=endNum;i++){
//         document.write(i + "<br>")
//      }
// }
// numCounting()
// //question 8
// function calculateHypotnuse(base,perpendicular){
//     var base = +prompt("Enter base of right angle triangle")
//     var perpendicular = +prompt("Enter perpendicular of right angle triangle")
//     function calculateSquare(num){
//         return num * num
//     }
//     var hypotnuse = calculateSquare(base) + calculateSquare(perpendicular)
//     return Math.sqrt(hypotnuse)
// }
// calculateHypotnuse()
// //question 9
// //arguments as value
// function rectangleArea(width,height){
//     return width * height
// }
// rectangleArea(4,5)
// //arguments as variables
// var width = 4;
// var height = 5;
// function rectangleArea(){
//     return width * height
// }
// rectangleArea(width,height)
// //question 10
// function checkPalindrome(string){
//     var reg = /[\W _]/g;
//     var lowRegString = string.toLowerCase().replace(reg,'');
//     var reverseString = lowRegString.split('').reverse().join('')
//     return reverseString === lowRegString;
// }
// checkPalindrome("madam")
// //question 11
// var exampleStr = "the quick brown fox"
// function upperCase(string){
//     string = string.split(" ")
//     var array = []
//     for (var i = 0;i<string.length;i++){
//         array.push(string[i].charAt(0).toUpperCase()+string[i].slice(1))
//     }
//     return array.join(" ")
// }
// console.log("Example String was: " + exampleStr)
// console.log("Output now is: " + upperCase(exampleStr))
// //question 12
// function long_word(string){
//     var array1 = string.match(/\w[a-z]{0,}/gi)
//     var result = array1[0];

//     for (var i = 1;i < array1.length; i++){
//         if(result.length < array1[i].length){
//             result = array1[i];
//         }
//     }
//     return result;
// }
// console.log("Example String: 'Web Development Tutorial'")
// console.log("Output is: "+  long_word("Web Development Tutorial"));
// //question 13
// function letterCount(string,letter){
//     var count = 0;
//     for(var i = 0; i < string.length ;i++ ){
//         if (string.charAt(i) == letter){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(letterCount('JSResourceS.com','o'))
// //question 14
// function calcCircumference(radius){
//     var calc = 2 * Math.PI * radius
//     alert("The circumference is: " + calc)
// }
// calcCircumference(2)
// function calcArea(radius){
//     var calc = Math.PI * (radius * radius)
//     alert("The area is: "+ calc)
// }
// calcArea(2)










//Functions,switch statements,while,do-while loops
//Chapter 38-44
//question 1
// function power(a,b) {
//     var value = 1;
// 	for(var i=1; i<=b; i++) {
// 		value = value * a;
// 	}
// 	return value;
// }
// alert(power(2,5));
//question 2
// var year = +prompt("Enter an year:","Enter an year like this: 2000")
// function isLeapYear(){
//     if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){  
//         alert(year +  " is a leap year")
//     }
//     else{
//         alert(year +  " is not a leap year")
//     }
// }
// isLeapYear()
//question 3
// var a = 5;
// var b = 6;
// var c = 7;
// var perimeter = (a + b + c) / 2;
// var areaOfTriangle = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
// console.log(areaOfTriangle);
//question 4
// var marks1 = +prompt("Enter your marks in first subject out of 100");
// var marks2 = +prompt("Enter your marks in second subject out of 100");
// var marks3 = +prompt("Enter your marks in third subject out of 100");
// var totalMarks = marks1 + marks2 + marks3
// function average() {
//     return totalMarks / 3
// }

// function percentage() {
//     return totalMarks / 300 * 100
// }
// function main() {
//     document.write("Your average is" + " " + average() + "<br>")
//     document.write("Your percentage Is" + " " + percentage() + " %")
// }
// main()
//question 5
//sometimes error
// const str = "This is a string";
// const char = "r";

// function findCharIndex(str, char) {
//     for (let [index, val] of [...str].entries()) {
//         if (val === char) {
//             return index;
//         }
//     }
// }

// console.log(findCharIndex(str, char));
// question 6
// var string = ["The quick brown fox jumps"];

// string = string.map(function (str) {
//     return str.replace(/[aeiou]/g, '');
// });
// console.log(string);

// question 7
//not working
function findOccurrences() {
var str = "Pleases read this application and give me gratuity";
var count = 0;
let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}
document.write(findOccurrences())
// question 8
// var distance = +prompt("Enter the distance b/w two cities", "Enter the distance in kilometers")
// var distanceInMeters = distance * 1000;        
// var distanceInFeet = distance * 3280.84;    
// var distanceInInches = distance * 39370.1      
// var distanceInCentimeters = distance * 100000       
// document.write("The distance between 2 cities in meters is " + distanceInMeters+ "<br>")
// document.write("The distance between 2 cities in feet is " + distanceInFeet+ "<br>") 
// document.write("The distance between 2 cities in inches is " + distanceInInches+ "<br>")
// document.write("The distance between 2 cities in centimeters is " + distanceInCentimeters+ "<br>") 
// question 9
//couldnot  understand the question
// question 10
//couldnot  understand the question

// Events
// Chapter 43-48
//question 1
// function clickBtn(){
//     alert("You have clicked me!")
// }
// question 2
// function clickMob(){
//     alert("Thanks for purchasing a phone from us!")
// }
// question 3
// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }
// question 4
//Done in index.html
// question 5
// var button = document.getElementById("counter"),
//   count = 0;
// function increment() {
//   count += 1;
//   button.innerHTML = " " + count;
// }
// var button = document.getElementById("counter"),
//   count = 0;
// function decrement() {
//   count -= 1;
//   button.innerHTML = " " + count;
// }

 
//Events
//Chapter 49-52
//question 1
//not working
// function submitForm() {
//     var firstName = document.getElementById("firstname")
//     document.write(firstName.value)
//     var lastName = document.getElementById("lastname")
//     document.write(lastName.value)
//     var email = document.getElementById("emailid")
//     document.write(email.value) 
//  }


//question 2
//old sentence disappearing
// function readFunction(){
//     var text ="making it easier to read and understand."
//     var para = document.getElementById("para")
//     para.innerHTML = text
// }
//question 3
