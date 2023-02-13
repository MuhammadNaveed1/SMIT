// Exercise 1
// var studentNames = [ , , , , , ];
// console.log(studentNames);

// Exercise 2
// var studentNames = new Array();
// console.log(studentNames);

// Exercise 3
// var cities = ["Karachi", "Lahore", "Peshawar", "Hyderabad", "Multan"];
// console.log(cities);

// Exercise 4
// var indexNumber = [0, 1, 2, 3, 4, 5];
// console.log(indexNumber);

// // Exercise 5
// var booleanArray = [true, false];
// console.log(booleanArray);

// // Exercise 6
// var mixedArray = [1, "two", false];
// console.log(mixedArray);

// // // Exercise 7
// var qualitfications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("1) " + qualitfications[0] + "<br /> 2) " + qualitfications[1] + "<br /> 3) " + qualitfications[2] + "<br /> 4) " + qualitfications[3] + "<br /> 5) " + qualitfications[4] + "<br /> 6) " + qualitfications[5] + "<br /> 7) " + qualitfications[6] + "<br /> 8) " + qualitfications[7]);

// // // Exercise 8
// var studentNames = ["Ali", "Ahmed", "Athar"];
// var studentMarks = ["322", "377", "479"];
// var totalMarks = 500;
// document.write("Score of " + studentNames[0] + " is " + studentMarks[0] + ". Percentage: " + studentMarks[0] / totalMarks * 100);
// document.write("<br /> Score of " + studentNames[1] + " is " + studentMarks[1] + ". Percentage: " + studentMarks[1] / totalMarks * 100);
// document.write("<br /> Score of " + studentNames[2] + " is " + studentMarks[2] + ". Percentage: " + studentMarks[2] / totalMarks * 100);

// Exercise 9
// var colors = ["pink", "brown", "green", "white", "purple"];
// document.write("<h1>" + "Colors" + "</h1>" +colors);
// var addColor1 = prompt("What color you want in the beginning?");
// colors.unshift(addColor1);
// document.write("<br />" + colors);
// var addColor2 = prompt("What color you want to add to the end?");
// colors.push(addColor2);
// document.write("<br />" + colors);
// var addColor3 = prompt("Add one more color in the beginning");
// var addColor4 = prompt("Add one more :)");
// colors.unshift(addColor3, addColor4);
// document.write("<br />" + colors);
// colors.shift();
// document.write("<br />" + colors);
// colors.pop();
// document.write("<br />" + colors);
// var askIndexForAdd = prompt("Enter index number at which you want to add color");
// var askForColor = prompt("Enter color name");
// colors.splice(askIndexForAdd, 0, askForColor);
// document.write("<br />" + colors);
// var askForDel = prompt("Enter index number at which you want to del color");
// var askForHowManyColors = prompt("How many colors do you want to delete");
// colors.splice(askForDel, askForHowManyColors);
// document.write("<br />" + colors);

// Exercise 10
// var studentScores = [450, 120, 222, 600, 398, 288];
// document.write("Scores of students : " + studentScores);
// document.write("<br /> Ordered scores of student : " + studentScores.sort());

// Exercise 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list: <br />" + cities);
// document.write("<br /> Selected cities list: <br />" + cities.slice(0, 3));

// Exercise 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br />" + arr);
// document.write("<br /> String: <br />" + arr.join(" "));

// // // // Exercise 13
// var devices = [];
// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");
// document.write("Devices: <br />" + devices);
// document.write("<br /> <br /> Out: <br />" + devices.shift() + "<br /> Out: <br />" + devices.shift() + "<br /> Out: <br />" + devices.shift() + "<br /> Out: <br />" + devices.shift());

// // // Exercise 14
// var devices = [];
// devices.push("Keybaord");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");
// document.write("Devices: <br />" + devices);
// document.write("<br > <br / > Out: <br />" + devices.pop() + "<br / > Out: <br />" + devices.pop() + "<br / > Out: <br />" + devices.pop() + "<br / > Out: <br />" + devices.pop());

// // Exercise 15
// var companyName = ["Apple", "Samsung", "Oppo", "Huawei", "Nokia", "LG", "Xiaomi"];
// document.write("<h1>" + "Select" + "</h1>");
// document.write("<select> name='Phone manufacturers' ");
// document.write("<option>" + companyName[0] + "</option>");
// document.write("<option>" + companyName[1] + "</option>");
// document.write("<option>" + companyName[2] + "</option>");
// document.write("<option>" + companyName[3] + "</option>");
// document.write("<option>" + companyName[4] + "</option>");
// document.write("<option>" + companyName[5] + "</option>");
// document.write("<option>" + companyName[6] + "</option>");
// document.write("</select>");