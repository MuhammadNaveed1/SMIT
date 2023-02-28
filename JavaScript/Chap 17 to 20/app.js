// // Exercise 1
// var arr = [[],[],[]];

// Exercise 2
// var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write("<h1>" + arr[0].join(" ") + "<br />" + arr[1].join(" ") + "<br />" + arr[2].join(" ") + "</h1>");

// // Exercise 3
// for (var i = 1; i <= 10; i++) {
//     document.write( i + "<br />");
// }

// Exercise 4
// var num = prompt("Enter number");
// var loopLength = prompt("Enter loop length");
// document.write("Multiplication table of " + num + " length " + loopLength + "<br />");
// for (var i = 1; i <= loopLength; i++) {
//     document.write(num + " x " + i + " = " + num * i + "<br />");
// }

// Exercise 5
// var fruits = ["apple", "banana", "orange", "strawberry"];
// // document.write(fruits[0] + "<br />" + fruits[1] + "<br />" + fruits[2] + "<br />" + fruits[3] + "<br /> <br />");
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br />");
// }
// document.write("<br />")
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br />");
// }

// // // Exercise 6
// document.write("<h1>" + "Counting <br />" + "</h1>")
// for (var i = 0; i <= 15; i++) {
//     document.write(i + ",");
// }
// document.write("<h1>" + "<br /> Reverse counting <br />" + "</h1>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",");
// }
// document.write("<h1>" + "<br /> Even <br />" + "</h1>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + ",");
//     }
// }
// document.write("<h1>" + "Odd" + "</h1>")
// for (var i = 1; i <= 19; i++) {
//     if (i % 2 == 1) {
//         document.write(i + ",");
//     }
// }
// document.write("<h1>" + "Series <br />" + "</h1>")
// for (var i = 2; i <= 20; i+=2) {
//     document.write(i + "k,")
// }

// Exercise 7
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC bakery. What do you want to order?");
// var itemFound = false;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === order) {
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         itemFound = true;
//         break;
//     }
// }
// if (itemFound === false) {
//     document.write("We are sorry. " + order + " is not available in our bakery");
// }

// Exercise 8
// var arr = [22, 33, 55, 33, 90];
// var largestNum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (largestNum < arr[i]) {
//         largestNum = arr[i];
//     }
// }
// document.write("Array numbers: " + arr);
// document.write("<br /> The largest number is " + largestNum);

// Exercise 9
// var arr = [22, 43, 34, 21, 17, 50];
// var smallestNum = 43;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < smallestNum) {
//         smallestNum = arr[i]
//     }
// }
// document.write("Array numbers: " + arr);
// document.write("<br /> The smallest number is " + smallestNum);

// // Exercise 10
// for (var i = 1; i <= 20; i++) {
//     document.write(i * 5 + ",");
// }
