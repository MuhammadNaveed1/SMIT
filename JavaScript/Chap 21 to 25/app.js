// Exercise 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);

// Exercise 2
// var mobileModel = prompt("Enter your favourite mobile model");
// document.write("My favourite phone is " + mobileModel + "<br /> Length of string: " + mobileModel.length);

// Exercise 3
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word + "<br /> Index of 'n': " + index);

// // Exercise 4
// var word = "Hello World";
// var index = word.lastIndexOf("l");
// document.write("String: " + word + "<br /> Last index of 'l': " + index);

// // Exercise 5
// var word = "Pakistani";
// var thirdIndex = word.charAt(3);
// document.write("String: " + word + "<br /> Character at index 3: " + thirdIndex);

// // Exercise 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Welcome " + firstName + " " + lastName);

// // // Exercise 7
// var city = "Hyderabad";
// var replacement = city.replace("Hyder", "Islam")
// document.write("City: " + city + "<br /> After replacement: " + replacement);

// // // Exercise 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacement = message.replace(/and/g, "&");
// document.write(replacement);

// // // Exercise 9
// var str = "472";
// var num = str.slice(0);
// document.write("Value: " + str + "<br / > Type: string" + "<br /> Value: " + num + "<br /> Type: number");

// // // Exercise 10
// var color = prompt("Enter your favorite color");
// var uCaseColor = color.toLocaleUpperCase();
// document.write("User input: " + color + "<br /> Upper case: " + uCaseColor);

// // // // Exercise 11
// var lang = prompt("Enter your favorite programming language");
// var capitalize = lang.charAt(0).toLocaleUpperCase();
// var updatedLang = lang.slice(1);
// document.write("User input: " + lang + "<br /> Title case: " + capitalize + updatedLang);

// // // // Exercise 12
// var num = 35.36;
// var arr = [num];
// var str = arr.join("");
// var updatedStr = str.replace(".", "");
// document.write("Number: " + num + "<br /> Result: " + updatedStr);

// // // // Exercise 13
// var Name = prompt("Enter your name?");
// var char33 = "!";
// var char44 = ",";
// var char46 = ".";
// var char64 = "@";
// for (var i = 0; i < Name.length; i++) {
//     if (Name[i] === char33 || Name[i] === char44 || Name[i] === char46 || Name[i] === char64) {
//         alert("Please enter a valid username");
//     }
// }

// // // Exercise 14
// var order = prompt("Welcome to ABC bakery what would you like to order sir/ma'am");
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i < order.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//         if (order === arr[j]) {
//             document.write(order + " is available at index " + [j] + " in our bakery");
//             break;
//         }
//         else {
//             document.write("We are sorry " + order + " is not available in our bakery");
//             break;
//         }
//     }
//     break;
// }

// // // // // Exercise 15
// var pass = prompt("Enter a password");
// var checkForAlpha;
// var checkForNumber;
// var hasAlpha = false;
// var hasNumber = false;
// var hasLength = false;
// var firstCharacter = true;
// for (var i = 0; i < pass.length; i++) {
//     checkForAlpha = pass[i].charCodeAt();
//     checkForNumber = pass[i].charCodeAt();
//     if (pass[0] >= 0) {
//         firstCharacter = false;
//     }
//     if (checkForAlpha >= 65 && checkForAlpha <= 122) {
//         hasAlpha = true;
//     }
//     if (checkForNumber >= 48 && checkForNumber <= 57) {
//         hasNumber = true;
//     }
//     if (pass.length >= 6) {
//         hasLength = true;
//     }
// }
// if (firstCharacter === false) {
//     alert("Password can not begin with a number");
// }
// if ((hasAlpha === false || hasNumber === false) && firstCharacter === true) {
//     alert("Password should contain alphabets and numbers");
// }
// if (hasLength === false) {
//     if (hasAlpha === true && hasNumber === true && firstCharacter === true) {
//         alert("Password must be at least 6 characters long");
//      }
// }
// if (hasAlpha === true && hasNumber === true && hasLength === true && firstCharacter === true) {
//     alert("Correct password");
// }

// // // // // Exercise 16
// var university = "University of Karachi";
// var split = university.split("");
// for (var i = 0; i < split.length; i++) {
//     document.write(split[i] + "<br />");
// }

// // // // // // Exercise 17
// var input = prompt("Enter any thing");
// document.write("User input: " + input + "<br /> Last character of input: " + input.charAt(input.length - 1));

// // // // // // Exercise 18
// var text = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var wordCount = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3).toLocaleLowerCase() === word) {
//         wordCount++;
//     }
// }
// document.write("Text: " + text + "<br /> There are " + wordCount + " occurrences of word '" + word + "'" );
