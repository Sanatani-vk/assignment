var prompt = require('prompt-sync')();

////Take a number and check if it's even or odd.
// let n=parseInt(prompt("Enter a number: "));
// if(n%2===0){
//     console.log('Even no');
// }
// else{ console.log('Odd no');}

////Input a number and check if it is positive, negative, or zero.
// let n=parseInt(prompt("Enter a number: "));
// if(n<0){
//     console.log("Number is negaive");
// }
// else if(n>0){
//     console.log("Number is Positive");
// }
// else console.log("Number is zero");


////Take two numbers and print the greater one.
// let n=parseInt(prompt("Enter a first number: "));
// let y=parseInt(prompt("Enter a second number "));
// if(n>y){
//     console.log(n+" is greater");
// }
// else{
//     console.log(y+" is greater");
// }


///Input a number and check if it's divisible by 3 or not.
// let n=parseInt(prompt("Enter a number: "));
// if(n%3===0){console.log("Number is divisible by 3");}
// else console.log("Number is not divisible by 3");


////Input a number and check if it’s a multiple of 7 or not.
// let n=parseInt(prompt("Enter a number: "));
// if(n%7===0){console.log("Number is multiple of 7");}
// else console.log("Number is not multiple of 7");


////// Input a character and check whether it's a vowel or consonant (assume lowercase).
// let ch=prompt("Enter the lower case character: ");
// if(ch.length!==1||ch<'a'||ch>'z'){
//     console.log("Invalid input.Please enter lowercase character ownly");
// }
// else if(ch==='a'|| ch==='e'||ch==='i'||ch==='o'||ch==='u'){
//     console.log("Vowel");
// }
// else console.log("consonant");

//////Input a number and check if it is between 10 and 50.
// let n=parseInt(prompt("Enter the number: "));
// if(n>10&&n<50){
//     console.log("Number lies between 10 and 50");
// }
// else console.log("Number doesnt lies between 10 and 50



////Input a number and check if it is a 3-digit number.
// let n=parseInt(prompt("Enter the number: "));
// if(n>99&& n<1000){
//     console.log("The number is three digit number");
// }
// else console.log("It is not a three digit number");


////Input age and check if the person is eligible for voting (≥18).
// let n=parseInt(prompt("Enter your age: "));
// if(n>=18){
//     console.log("The person is eligible for voting");
// }
// else("The person is not eligible for voting");


////Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).
let n=parseInt(prompt("Enter the temperature: "));
if(n>30){
    console.log("Hot temperature");
}
else if(n>=15 &&n<=30){
    console.log("Moderate Temperature");
}
else console.log("Cold Temperature");