// // Control Flow Statements in JavaScript

// // If-Else Statement (if, if else, if else-if else)
// // if (condition) {} --> condition true hoy to {} code run

// if (12 < 13) {
//     console.log(true);
// }

// if (15 < 13) {
//     console.log(true);
// } // condition is false that why if statement not run

// if (!12) { // 12 --> true, !12 --> false
//     console.log("number");
// }

// if (!0) {
//     console.log("number");
// }

// // If-else Statement

// if (12 < 13) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (15 < 13) {
//     console.log(true);
// } 
// // condition is false that why if statement not run
// else {
//     console.log(false); // if if statement condition is false then run this code
// }

// if (!12) {
//     console.log("number");
// } else {
//     console.log("Not A Number");
// }

// // if-else if-else Statement
// /*
// if (condition) {
// } else if (condition) {
// } else {
// }
// */

// let loggedin = false;
// let admin = false;

// if (loggedin && admin) {
//     console.log("welcome admin");
// } else if (loggedin) {
//     console.log("welcome user");
// } else {
//     console.log("go to login page");
// }

// let marks = 75;

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 60) {
//     console.log("Grade B");
// } else {
//     console.log("Grade C");
// }

// Switch case Statement
// switch ("BOGO") // value --> Case value sathe match karshe ane code run thase
// {
//     case "First50":
//         console.log("50% Off on First Order");
//         break;

//     case "BOGO":
//         console.log("Buy one get one");
//         break;

//     case "BlackFriday":
//         console.log("It's Black Friday Sale - get at Rs. 50");
//         break;

//     default:
//         console.log("Offer Not Vaild");
// }

// let ticketType = "VIP";

// switch (ticketType) {
//     case "Normal":
//         console.log("Normal Seat - Price: Rs. 150");
//         break;

//     case "Premium":
//         console.log("Premium Seat - Price: Rs. 250");
//         break;

//     case "VIP":
//         console.log("VIP Seat - Price: Rs. 400");
//         break;

//     default:
//         console.log("Invalid Ticket Type");
// }


// Early Return Pattern
function score(value) {
    if (value > 90) {
        return "Value is more than 90";
    } else if (value >= 80) {
        return "Value is less than 90";
    } else if (value >= 70) {
        return "Value is less than 80";
    } else if (value >= 60) {
        return "Value is less than 70";
    } else {
        return "Value is less than 60";
    }
}

console.log(score(65)); 


