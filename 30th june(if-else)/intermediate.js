var prompt=require('prompt-sync')();

////Input three numbers and find the greatest among them.
// let a=parseInt(prompt("Enter the first number: "));
// let b=parseInt(prompt("Enter the second number: "));
// let c=parseInt(prompt("Enter the third number: "));
// if(a>b){
//     if(a>c){
//         console.log(a+" is greater");
//     }
//     else console.log(c+" is greater");
// }
// if(b>a){
//     if(b>c){
//         console.log(b+" is greater");
//     }
//     else console.log(c+" is greater");
// }


////Input a year and check if it is a leap year.
// let n=parseInt(prompt("Enter the year: "));
//  if((n%4===0 && n%100!==0)||(n%400===0)){
//     console.log(n+" is a leap year");
//  }
//  else console.log(n+" is not a leap year");


////Input a character and check if it's uppercase, lowercase, digit, or special character.
// let n=prompt("Enter a single character: ");
// if(n.length!==1){
//     console.log("Please enter exactly one character")
// }
// else if(n>='A'&&n<='Z'){
//     console.log("It is a upper case charcter");
// }
// else if(n>='a'&&n<='z'){
//     console.log("Its is lower case character");
// }
// else if(n>='0'&&n<='9'){
//     console.log("Its a digit");
// }
// else console.log("Its a special character");


////Input marks of a student (out of 100) and print the grade:  
////A (≥90), B (≥75), C (≥60), D (≥40), F (<40).
// let n=parseInt(prompt("Enter the Marks out of 100: "));
// if(n>100){
//     console.log("Invalid Marks Please enter maeks out of 100");
// }
// if(n>=90 &&n<100){
//  console.log("Grade A");
// }
// if(n>=75 &&n<90){
//  console.log("Grade B");
// }
// if(n>=60 &&n<75){
//  console.log("Grade C");
// }
// if(n>=40 &&n<60){
//  console.log("Grade D");
// }
// if(n<40 && n>0) console.log("Grade F");



//////Input the day number (1–7) and print the corresponding weekday.
// let n=parseInt(prompt("Enter the number (1-7): "));
// if(n>7 || n<1){
//     console.log("Invalid number put number between 1-7");
// }
// else if(n===1) console.log("Monday");
// else if(n===2) console.log("Tuesday");
// else if(n===3) console.log("Wednesday");
// else if(n===4) console.log("Thursday");
// else if(n===5) console.log("Friday");
// else if(n===6) console.log("Saturday");
// else if(n===7) console.log("Sunday");

////Take a number and check whether it is divisible by both 5 and 11.
// let n=parseInt(prompt("Enter the number:"));
// if(n%5===0 && n%11===0){
//     console.log("Number is divisible by 5 and 11 both");
// }
// else console.log("The number is not divisible by 5 and 11 both");


////Input a number and check if it is a prime number (basic logic).
// let n=parseInt(prompt("Enter the number: "));
// let isPrime=true;
// if(n<=1){
//     isPrime=false;
// }
// else{
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             isPrime=false;
//             break;

//         }
//     }
// }
// if(isPrime){
//     console.log(n+" is a prime number");
// }
// else console.log(n+" is not a prime number");

////Input someone's name and age, and check if they can get a driving license (age ≥ 18).
// let name=prompt("Enter your name: ");
// let age=parseInt(prompt("Enter your age: "));
// if(age>=18){
//     console.log(name+ " is eligible fo getting driving license");
// }



//////Take two numbers and check if they are equal, or print which one is greater.
// let x=parseInt(prompt("Enter the first number: "));
// let y=parseInt(prompt("Enter the second number: "));
// if(x===y){
//     console.log("The numbers are equal");
// }
// else if(x>y){
//     console.log(x+" is greater ");
// }
// else console.log(y+" is greater");


///Input a number and print whether it is even, odd, and also whether it's positive or negative.  
let n=parseInt(prompt("Enter the number: "));
if(n%2===0) console.log("Even no ");
    else console.log("Odd no");
    if(n>0) console.log("Number is positive");
    else console.log("Number is negative");