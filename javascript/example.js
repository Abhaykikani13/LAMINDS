// Print number from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print number from 10 to 1 using while loop
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// Print even numbers from 1 to 20 using for loop 
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Print odd numbers from 1 to 15 using while loop 
// let i = 1;
// while (i <= 15) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// Print the multiplication table of 5 
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }


// Find the sum of numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// Print numbers between 1 to 50 divisible by 3
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// Ask the user for a number and print whether each number from 1 to that number is even or odd.

let num = prompt("Give a number");

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

