var prompt=require('prompt-sync')();
// ////Input marks in 5 subjects, calculate the average and print grade using if-else.  A (≥90), B (≥75), C (≥60), D (≥40), F (<40).
// let eng=parseInt(prompt("Enter the  marks of English: "));
// let maths=parseInt(prompt("Enter the marks of maths: "));
// let Phy=parseInt(prompt("Enter the marks of Physics: "));
// let Chem=parseInt(prompt("Enter the narks of Chemistry: "));
// let Bio=parseInt(prompt("Enter the marks of Bio: "));

// let sum=eng+maths+Phy+Chem+Bio;
// let avg;
// avg=sum/5;
// console.log("Average marks: ",avg);
// if(avg>=90 && avg<=100){
//     console.log("Grade A");
// }
// if(avg>=75 && avg<90){
//     console.log("Grade B");
// }
// if(avg>=60&& avg<75){
//     console.log("Grade C");
// }
// if(avg>=40 && avg<60){
//     console.log("Grade D");
// }
// if (avg<40 && avg>0){
//     console.log("Grade F");
// }

////Take a number and check if it's divisible by either 3 or 5 but not both.
// let n =parseInt(prompt("Enter the number: "));
// if((n%3===0 || n%5===0) &&(n%15!==0)){
//     console.log("The number is either divisible by 3 or 5");
// }
// else if(n%3===0 && n%5===0){
//     console.log("The number is divisible by 3 and 5 both");
// }
// else console.log("Number is not divisible by 3 or 5");

//////Input a number and check if it is a palindrome number (e.g., 121).
// let n=parseInt(prompt("Enter the number: "));
// let t=n;
//  let rev=0;
// while(n>0){
//     let ld=n%10;
//     rev=rev*10+ld;
//     n=parseInt(n/10);
// }
// if(rev==t){
// console.log("The number is palindrome");
// }
// else console.log("The number is not palidrome");


//////Input a number and check if the sum of its digits is even or odd.
// let n=parseInt(prompt("Enter the number: "));
// let sum=0;
// while(n>0){
//      let ld=n%10;
//     sum+=ld;
//    n=parseInt(n/10);
// }
// console.log("The sum of digit is: "+sum);


////Input hours worked and calculate overtime pay. Overtime is paid for >40 hours at Rs. 12/hr.
// let n=parseInt(prompt("Enter the hours worked: "));
// if(n>40){
//     let OverTimeHours=n-40;
//     let OverTimePayment=OverTimeHours*12;
//     console.log("Ovetime hours is:",OverTimeHours);
//     console.log("Overtime payement is:",OverTimePayment);
// }
// else{
//     console.log("No Overtime hours worked is under 40 hours");
// }

////Create a mini login system: input username and password, and check if both match stored values.
    // const storedUsername="dark" ;
    // const storedPassword="7742";

    // let username=prompt("Enter the username:");
    // let userpass=prompt("Enter the password:");
    // if(username==storedUsername && userpass==storedPassword){
    //     console.log("✅ Login Successful!");
    // }
    // else{
    //     console.log("❌Invalid username or password");
    // }

    //////Input month number and print number of days in that month.
    // let n=parseInt(prompt("Enter the month: "));
    // if(n===1||n===3||n===5||n===7||n===8||n===10||n===12){
    //     console.log("31 days");
    // }
    // else if(n===4||n===6||n===9||n===11 ){
    //     console.log("30 days");
    // }
    // else if(n===2){
    //     console.log("Either 28 days or 29 days ");
    // }
    // else {
    //     console.log("❌ Invalid month number");
    // }


    //////Take a password as input and check if it is strong (length ≥8, includes digit and special character).
    // let n=prompt("Enter the password: ");
    // let x=/[0-9]/.test(n)
    // let y=/[!@#$%^&*(),.?":{}|<>]/.test(n);
    // if(n.length>=8 && x && y){
    //     console.log("Password is strong");
    // }
    // else console.log("Password is weak ");

//////Input the side lengths of a triangle and check if it is valid, isosceles, equilateral, or scalene.
// let a=parseInt(prompt("Enter the first side of triangle: "));
// let b=parseInt(prompt("Enter the second side of triangle: "));
// let c=parseInt(prompt("Enter the third side of triangle: "));
  
// if((a+b+c)===180){
//     console.log("Valid triangle");
//    if(a===b &&b===c){
//     console.log("Equilateral Triangle");
//    }
//    else if(a===b ||b===c||a===c){
//     console.log("Isosceles Triangle");
//    }
//    else{
//     console.log("Its is Scalene triangle");
//    }

// }
// else {
//     console.log("Invalid triangle");
// }


//////Input basic salary and calculate net salary based on conditions:
// HRA = 20%, DA = 50% if basic < 10000; else HRA = 30%, DA = 80%.

let n=parseInt(prompt("Enter the basic salary: "));
let hra,da,netSalary;
if(n<10000){
    hra=0.20*n;
    da=0.50*n;
}
else{
    hra=0.30*n;
    da=0.80*n;

}
netSalary=n+hra+da;
console.log("NetSalary: "+netSalary);