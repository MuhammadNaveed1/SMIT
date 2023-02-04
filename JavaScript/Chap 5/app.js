// // Exercise 1
// var num1 = 20;
// var num2 = 30;
// var total = num1 + num2;
// // document.write("Sum of " + num1 + " and " + num2 + " is " + total);

// // Exercise 2
// var num1 = 30;
// var num2 = 20;
// var subtotal = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtotal);
// var multitotal = num1 * num2;
// document.write(" </br > Multiplication of " + num1 + " and " + num2 + " is " + multitotal);
// var divtotal = num1 / num2;
// document.write(" </br > Division of " + num1 + " and " + num2 + " is " + divtotal);
// var modtotal = num1 % num2;
// document.write(" </br > Modulo of " + num1 + " and " + num2 + " is " + modtotal);

// // Exercise 3
// var num;
// document.write("Value after variable declaration is " + num);
// num = 50;
// document.write(" </br > Initial value: " + num);
// num++;
// document.write(" </br> Value after increment is: " + num);
// num = num + 7;
// document.write(" </br > Value after addition is: " + num);
// num--;
// document.write(" </br > Value after decrement is: " + num);
// num = num % 3;
// document.write(" </br > The remainder is : " + num);

// Exercise 4
// var ticketPrice = 350;
// var fiveTicketPrice = 350 * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + fiveTicketPrice + "PKR");

// Exercise 5
// document.write("Table of 9 </br >" + "9x1=" + 9 * 1 + "</br > 9x2=" + 9 * 2 + "</br > 9x3=" + 9 * 3 + "</br > 9x4=" + 9 *4 + "</br > 9x5=" + 9 * 5 + "</br > 9x6=" + 9 * 6 + "</br > 9x7=" + 9 * 7 + "</br > 9x8=" + 9 * 8 + "</br > 9x9=" + 9 * 9 + "</br > 9x10=" + 9 * 10);

// Exercise 6
// var celsius = 15;
// var fahrenheit = 59;
// document.write("15°C is " + ((celsius * 9 / 5) + 32) + "°F");
// document.write("</br > 59°F is " + ((fahrenheit - 32) * 5 / 9) + "°C");

// Exercise 7
// var item1 = 175;
// var item2 = 260;
// var ordQItem1 = 3;
// var ordQItem2 = 6;
// var shippingCharges = 270;
// document.write("Price of item 1 is " + item1);
// document.write("</br > Quantity of item 1 is " + ordQItem1);
// document.write("</br > Price of item 2 is " + item2);
// document.write("</br > Quantity of item 2 is " + ordQItem2);
// document.write("</br > Shipping Charges " + shippingCharges);
// document.write("</br > Total cost of your order is " + (item1 + item1 + item1 + item2 + item2 + item2 + item2 + item2 + item2 + shippingCharges));

// // OR

// var item1Cost = item1 * ordQItem1;
// var item2Cost = item2 * ordQItem2;
// document.write("</br > Total cost of your order is " + (item1Cost + item2Cost + shippingCharges));

// Exercise 8
// var totalMarks = 950;
// var obtainedByStudents = 825;
// document.write("Total marks: " + totalMarks);
// document.write("</br > Marks obtained: " + obtainedByStudents);
// document.write("</br > Percentage: " + obtainedByStudents / totalMarks * 100);

// Exercise 9
// var usdIntoPkr = 277;
// var riyalIntoPkr = 74;
// var usdAmount = 10;
// var riyalAmount = 25;
// var totalCurrency = usdIntoPkr * usdAmount + riyalIntoPkr * riyalAmount;
// document.write("Total Currency in PKR: " + totalCurrency);

// Exercise 10
// var num = 77;
// num = ((num + 5) * 10) / 2;
// alert(num);

// Exercise 11
// var currentYear = 2023;
// var birthYear = 1995;
// document.write("<h1>" + " Age Calculator " + "</h1>");
// document.write("<br /> Current Year: " + currentYear);
// document.write("<br /> Birth Year: " + birthYear);
// document.write("<br /> Your Age is: " + (currentYear - birthYear));

// Exercise 12
// var radius = 20;
// var payee = 3.142;
// document.write("<h1>" + " The Geometrizer " + "</h1>");
// document.write("Radius of a circle: " + radius);
// document.write("<br /> The circumference is: " + 2 * payee * radius );
// document.write("<br /> The area is: " + payee * radius * radius);

// // Exercise 13
// var snack = "Lays";
// var currentAge = 16;
// var maximumAge = 80;
// var perDaySnack = 2;
// var total = (maximumAge - currentAge) * perDaySnack;
// document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>");
// document.write("Favourtie Snack: " + snack);
// document.write("<br /> Current Age: " + currentAge);
// document.write("<br /> Estimated Maximum Age: " + maximumAge);
// document.write("<br /> Amount of snacks per day: " + perDaySnack);
// document.write("<br /> You will need " + total + " " + snack + " " + "to last you until the ripe old age of " + maximumAge);