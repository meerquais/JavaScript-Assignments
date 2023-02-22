// Chapter #1 Alerts

// Question #1 

// alert("Welcome to Our Site")

// Question #2

// alert("Error! Please enter a valid password.")

// Question #3

// alert("Welcome to Js Land ... \nHappy Coding!")

// Question #4

// alert("Welcome to JS Land..")
// alert("Prevent this page from creating additional dialogs")

// Question #5

// alert("Hello... I can run JS through my web browser's console")

// Chapter #2 Variables for string

// Question #1 

// var userName = 

// Question #2
// var MyName = "Meer Quais"

// Question #3 

// var message = "Hello World"
// alert(message)

// Question #4

// var studentName = "Jhone Doe"
// var studentAge = "15 years old"
// var studentCourse = "Certified Mobile Application Development"
// alert(studentName)
// alert(studentAge)
// alert(studentCourse)

// Question #5

// var js = "PIZZA \nPIZZ \nPIZ \nPI \nP"
// alert(js)

// Question #6 

// var email = "meerquais017@gmail.com"
// alert("My email address is " + email)

// Question #7 

// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book " + book)

// Question #8

// document.write("Yah! I can write HTML content through JavaScript") 

// Question #9 

// var store = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(store)

// Chapter #3 Variables for Numbers

// Question #1 

// var age = 23
// alert("i am " + age + " years old" )

// Question #2

// var visitTrack = 14
// alert("You have visited this site " + visitTrack + " times")


// Question #3

// var birthYear = 1999
// document.write("My birth year is " + birthYear)
// document.write("<p>Data type of my declared variable is number</p>")


// Question #4

// var  visitorName = "John Doe";
// var  productTitle = "T-shirt";
// var  quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// Chapter #4 Variables Names Legal & illegal

// Question #1

// var name = "meer", age = 23 , gender= "male" 

// Question #2

// legal names 

// var myName = ""
// var name_1 = ""
// var _firstName = ""
// var $lastName = ""
// var my_Name = ""

// illegal names 

// var 1name = ""
// var my-name= ""
// var my.name = ""
// var #name = ""
// var @name = ""

// Question #3 

// document.write("<h1>Rules for naming JS Variables</h1>");
// document.write("<p>Varible names can only contain, numbers , $ and _ . For example $my_1stVariable</p>");
// document.write("<p>Varible must begin with a letter, $ or _ . For example: $name, _name or name</p>");
// document.write("</p>Varible names are case sensitive</p>");
// document.write("</p>names should not be JS keywords</p>");

// Chapter #5 Math Experssions

// Question #1

// var value1 = +prompt("add number you want to + ");
// var value2 = +prompt("add another number you want to +");
// var sum = value1 + value2
// document.write("Sum of " + value1 + " and " + value2 + " is " + sum)

// Question #2


// var value1 = +prompt("add number you want to minus");
// var value2 = +prompt("add another number you want to minus");
// var sum = value1 - value2
// document.write("Minus of " + value1 + " and " + value2 + " is " + sum);


// var value1 = +prompt("add number you want to multiplication ");
// var value2 = +prompt("add another number you want to multiplication");
// var sum = value1 * value2
// document.write("<br> multiplication of " + value1 + " and " + value2 + " is " + sum)


// var value1 = +prompt("add number you want to divide ");
// var value2 = +prompt("add another number you want to divide");
// var sum = value1 / value2
// document.write("<br> division of " + value1 + " and " + value2 + " is " + sum)


// var value1 = +prompt("add number for modulus ");
// var value2 = +prompt("add another number for modulus");
// var sum = value1 % value2
// document.write("<br> Modulus of " + value1 + " and " + value2 + " is " + sum)


// Question #3 

// var a = undefined;
// document.write("Value after variable declaration is: " + a);
// a = 5;
// document.write("<br>Initial value:" + a);
// a++;
// document.write("<br>Value after increment is: " + a);
// a +=7;
// document.write("<br>Value after addition is: " + a);
// a--;
// document.write("<br>Value after decrement is: " + a );
// var reminder = a % 3;
// document.write("<br>The reminder is: " + reminder )

// Question #4 

// var ticket = 600;
// var total = ticket * 5 ;
// document.write("Total cost to buy 5 tickets to a movie is " + total +"PKR" )

// Question #5 
 
// for(var i = 1; i <= 10; i++) {
//     document.write("5 X " + i + " = " + (5 * i) + "<br>");
// }


// Question #7

// var item1 = 650;
// var item2 = 100;
// var quanitity1 = 3;
// var quanitity2 = 7;
// var charges = 100;

// var sum = item1 * quanitity1 + item2 * quanitity2 + charges ;

// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + item1 + "<br>" + "Quantity of item 1 is " + quanitity1 + "<br>"
// + "Price of item 2 is " + item2 + "<br>" + "Quantity of item 2 is " + quanitity2 + "<br>" + 
// "Shipping Charges " + charges + "<br>" + "<br>" + "Total Cost of your order is " + sum
// );


// Question #8

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (totalMarks/marksObtained)*100;
// document.write("Total marks: " + totalMarks);
// document.write("<br>Marks obtained: " + marksObtained)
// document.write("<br>Percentage: " + percentage+ "%")

// Question #9

// var usDollar = 10;
// var saudiRiyal = 25;
// var us_to_pak = 104.80;
// var saudi_to_pak = 28;
// var totalCurrencyInPkr = (usDollar*us_to_pak) + (saudiRiyal*saudi_to_pak);
// document.write("<h1>Currency in PKR</h1>")
// document.write("Total Currency in PKR:" + totalCurrencyInPkr)

// Question #10

// var num = 5;
// var results = (num + 5) * 10 / 2 ;
// document.write(results)

// Question #11

// var currentYear = 2023;
// var birthYear = +prompt("Type your birth year")
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1>")
// document.write("Current Year: " + currentYear)
// document.write("<br>Birth Year: " + birthYear)
// document.write("<br>Your Age is: " + age)



// Question #12

// var r = 20;
// var circumference = 2 * 3.142 * r;
// var area = 3.142 * (r * r);
// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of a circle: " + r)
// document.write("<br>The circumference is " + circumference);
// document.write("<br>The area is " + area);


// Question #13

// var snacks = "chocolate chips";
// var age = 24;
// var maxAge = 50;
// var dailySnacks = 3;
// var cal = (maxAge - age) * 365 * dailySnacks;
// document.write("<h1>The Lifetime Supply Calculator</h1>")
// document.write("You will need " +  cal + " to last you until the ripe old age of " +maxAge)

// Chapter #6-9 Math Expressions 

// Question #1

// var a = 10;
// document.write("<h4>Result:</h4>")
// document.write("The Value of a is: " + a)
// document.write("<br><br>The Value of ++a is: "+ ++a)
// document.write("<br>Now the value of a is:" +a)
// document.write("<br><br> The value of a++ is: " + a++)
// document.write("<br>Now the value of a is: " +a)
// document.write("<br><br>The value of --a is: "+ --a)
// document.write("<br>Now the value of a is: " + a)
// document.write("<br><br>The value of a-- is: " + a--)
// document.write("<br>Now the value of a is: " + a)


// Question #2

// var a = 2 ;
// var b = 1 ; 
// var result = --a - --b + ++b + b--; 

// --a; pre-deceremnt a=1
// --a - --b; 1 - 0 = 1 
// --a - --b + ++b; 1 + 1 = 2
// --a - --b + ++b + b--; 2 + 1 = 3 


// document.write("a is: " + a)
// document.write("<br>b is: " + b)
// document.write("<br>Result is: " + result)

// Question #3

// var user = prompt("What is your name?")
// document.write("Welcome to Our Site " + user)

// Question #4 is missing in the pdf 

// Question #5 

// var number = prompt("Please enter a number:", "");
//     if (number == "") {
//       number = 5;
//     }
//     document.write("<table>");
//     for (var i = 1; i <= 10; i++) {
//       document.write("<tr>");
//       document.write("<td>" + number + "</td>");
//       document.write("<td>x</td>");
//       document.write("<td>" + i + "</td>");
//       document.write("<td>=</td>");
//       document.write("<td>" + number * i + "</td>");
//       document.write("</tr>");
//     }
//     document.write("</table>");

// Question #6 


// var subject1 = prompt("Enter the name of first subject: ");
// var subject2 = prompt("Enter the name of second subject: ");
// var subject3 = prompt("Enter the name of third subject: ");
// var totalMarks = 100;
// var obtainedMarks1 = +prompt("Enter the obtained marks for "+subject1+": ");
// var obtainedMarks2 = +prompt("Enter the obtained marks for "+subject2+": ");
// var obtainedMarks3 = +prompt("Enter the obtained marks for "+subject3+": ");
// var totalObtainedMarks = (obtainedMarks1) + (obtainedMarks2) + (obtainedMarks3);
// var percentage = (totalObtainedMarks/300)*100;
// document.write("")



















// Chapter #9-11 USER INPUT & CONDITIONAL STATEMENT

// Question #1

// var city = prompt("Type City Name")
// if(city == "Karachi"){
//     alert("Welcome To The City Where There Is No Light!")
// }else{
//     alert("Welcome")
// }

// Question #2

// var gender = prompt("Type Your Gender")
// if(gender == "male"){
//     alert("Good Morning/Afternoon Sir.")
// }else if(gender == "Female"){
//     alert("Good Morning/Afternoon Ma'am.")
// }else{
//     alert("Good Day!!")
// }

// Question #3 

// var signal = prompt("Write The Signal Color.")
// if(signal == "Red"){
//     alert("Must Stop!")
// }else if(signal == "Yellow"){
//     alert("Ready To Move!")
// }else if(signal == "Green"){
//     alert("Move Now!")
// }else{
//     alert("Please Write the correct color!!!")
// }


// Question #4

// var fuel = +prompt("Type How many liters fuels are remaining in your car!")
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("You are good to go!!")
// }


// Question #5

// var a = 4;
// if(++a ===5){
//     alert("given condition for variable a is true")
// }; // gives output / given condition for variable a is true.
// var b =82;
// if(b++ === 83){
//     alert("given condition for variable b is true")
// };
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// } // gives output / condition 2 is true
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }; // gives output / condition 4 is true.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }// gives output / The Cost equals.
// if (true){
// alert("True");
// } // gives output / true
// if (false){
// alert("False");
// };
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }; // gives output / car is smaller than cat.

// Question #6

// var Subject1 = prompt("Enter marks obtained in Subject1: ");
// var Subject2 = prompt("Enter marks obtained in Subject2: ");
// var Subject3 = prompt("Enter marks obtained in Subject3: ");
// var TotalMarks = prompt("Enter Total Marks: ");
// var ObtainedMarks = parseInt(Subject1) + parseInt(Subject2) + parseInt(Subject3);
// var Percentage = (ObtainedMarks/TotalMarks)*100;
// document.write("Total Marks: " + TotalMarks + "<br>");
// document.write("Marks Obtained: " + ObtainedMarks + "<br>");
// document.write("Percentage: " + Percentage + "%" + "<br>");

// if (Percentage >= 80) {
//     document.write("Grade: A+" + "<br>");
//     document.write("Remarks: Excellent" + "<br>");
// } else if (Percentage >= 70 && Percentage < 80) {
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks: Good" + "<br>");
// } else if (Percentage >= 60 && Percentage < 70) {
//     document.write("Grade: B" + "<br>");
//     document.write("Remarks: Average" + "<br>");
// } else if (Percentage >= 50 && Percentage < 60) {
//     document.write("Grade: C" + "<br>");
// } else if(Percentage >= 50 && Percentage < 40) {
//     document.write("Grade: D" + "<br>");
// }else{
//     document.write("You Failed.")
// }

// Question #7

// let secretNumber = 5;
// let guess = prompt("Guess a number between 1 and 10");

// if (guess == secretNumber) {
//     document.write("Bingo! Correct answer");
// } else if (guess == secretNumber + 1) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Wrong answer!");
// }

// Question #8


// var divisionNumber = +prompt("Enter number");
// if(divisionNumber % 3 == 0){
//     document.write( divisionNumber + " is divisible by 3");
// }else{
//     document.write(divisionNumber + " is not divisible by 3");
// }


// Question #9

// let userInput = +prompt("Please enter a number:");
// if (userInput % 2 === 0) {
//     document.write("The number " + userInput + " is an even number.");
// } else {
//     document.write("The number " + userInput + " is an odd number.");
// }

// Question #10

// var temp = +prompt("Input The Temperature: ")
// if(temp > 40){
//     document.write("It is too hot outside.")
// } else if( temp > 30){
//     document.write("The Weather today is Normal.")
// } else if( temp > 20){
//     document.write("Today's Weather is cool")
// } else if( temp > 10){
//     document.write("OMG! Today's weather is so Cool.")
// }

// Question #11

// var number1 = +prompt("ENTER NUMBER 1")
// var number2 = +prompt("ENTER NUMBER 2")
// var opt = prompt("ENTER opt")


// if (opt === "+") {
//     document.write(number1+ number2)
// } else if (opt === "-") {
//     document.write(number1 - number2)
// } else if (opt === "*") {
//     document.write(number1 * number2)

// } else if (opt === "/") {
//     document.write(number1 / number2)

// } else {
//     document.write("INVALID OpT")
// }

// Chapter #12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS


// Question #1

// var character = prompt("Enter character");
// if((character >= "A" || char >= "65") && (character <= "Z" || character <= "90")){
//     document.write("Upper case letter");
// }else if((character >= "a" || character >= 97) && (character <= "z" || character <= "122")){
//     document.write("Lower case letter");
// }else{
//     document.write("Kya kar raha hai bhai??");
// }


// Question #2

// var number1 = +prompt("Enter larger number", "0");
// var number2 = +prompt("Enter smaller number", "0");
// if(number1 > number2){
//     document.write("The larger of " + number1 + " and " + number2 + " is " + number1 + ".");
// }else if(number1 < number2){
//     document.write("The larger of " + number1 + " and " + number2 + " is " + number2 + ".");
// }else{
//     document.write("Invalid");
// }


// Question #3

// var number = +prompt("Enter Number");
// if(number == 0){
//     document.write("The Number is Zero")
// }else if(number > 0){
//     document.write("The Number is Positive")
// }else if(number < 0){
//     document.write("The Number is Negative")
// }else{
//     document.write("That's the wrong number!!")
// }

// Question #4

// var character = prompt("Type Here!");
// if((character == "a" || character == "e" || character == "i" || character == "o" || character == "u" )){
//     document.write("The Letter is Vowel")
// }else{
//     document.write("The Letter isn't Vowel")
// }

// Question #5

// var pw = prompt("Type Your Password here");
// var confirmPw = prompt("Confirm Your Password");
// var registeredPw = "meerquais";
// if(pw === registeredPw){
//     document.write("Correct! The password you entered matches the original password")
// }else if(pw !== registeredPw){
//     document.write("Incorrect Password.")
// }else if(pw == ""){
//     document.write("Please Input Your Password.")
// }else if(confirmPw === registeredPw){
//     document.write("Correct! The password you entered matches the original password")
// }else if(confirmPw !== registeredPw){
//     document.write("Incorrect Password.")
// }else{
//     document.write("what u expect from this??")
// }


// Question #6 


// var hour = +prompt("Enter time.");
// if (hour < 12) {
// document.write("Good Day")
// }else if(hour > 24){
// document.write("Wrong input!!")
// }else{
// document.write("Good Evening")
// }

// Question #7

// var time = +prompt("Please Input The time.");
// if(time >= 0000 && time < 1200){
//     document.write("Good Morning!!")
// }else if(time >= 1200 && time <1700){
//     document.write("Good Afternoon!!");
// }else if(time >=1700 && time < 2100){
//     document.write("Good Evening!!");
// }else if(time >=2100 && time <=2359){
//     document.write("Good Night!!");
// }else{
//     document.write("Please input correct time.")
// }










