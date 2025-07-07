// 🔁 Loop Basics
// 1)Print numbers from 1 to 10 using a for loop.

// 2)Print numbers from 10 down to 1 using a while loop.

// 3)Print numbers from 1 to 5 using a do...while loop.
//1)
console.log("The first Question: ");
for(let i=1;i<=10;i++){
    console.log(i);
}
//2) 
console.log("The second Question:");
let n=10;
while(n>0){
    console.log(n);
    n--;
}
//3)
console.log("The third Question: ");
let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

//🔁  Even, Odd, Multiples
// 4)Print all even numbers from 1 to 50.

// 5)Print all odd numbers between 20 and 50.

// 6)Print all numbers divisible by 3 from 1 to 30.
 console.log("Fourth Question: ");
 console.log("All the even numbers from 1 to 50: ");
 for(let i=1;i<=50;i++){
    if(i%2===0){
        console.log(i);
    }
 }
 console.log("Fifth Question: ");
 console.log("All the odd numbers from 20 to 50");
 for(let i=20;i<=50;i++){
    if(i%2!==0){
        console.log(i);
    }
 }
 console.log("Sixth Question: ");
 console.log("All numbers divisible by 3 from 1 to 30: ");
 for(let i=1;i<=30;i++){
    if(i%3===0){
        console.log(i);
    }
 }

 //➕ 3. Summation & Product
//7) Find the sum of numbers from 1 to 100.

//8) Find the product of numbers from 1 to 10.

//9) Find the sum of all even numbers between 1 and 50.

//10) Find the sum of squares of numbers from 1 to 10.
// (i.e., 1² + 2² + ... + 10²)
console.log("Seventh Question: Sum of numbers from 1 to 100 ");
let sum=0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);
  
console.log("Eight Question: Product of numbers from 1 to 10: ");
let pro=1;
for(let i=1;i<=10;i++){
    pro*=i;
}
console.log(pro);
console.log("Ninth Question: Sum of all even numbers between 1 and 50: ");
let sum2=0;
for(let i=1;i<=50;i++){
    if(i%2===0){
  sum2+=i;
    }
}
console.log(sum2);

console.log("Tenth Question:Sum of squares from 1 to 10: ");
let sum3=0;
let pro2=1;
for(let i=1;i<=10;i++){
    pro2=i*i;
    sum3+=pro2;
}
console.log(sum3);

// 🧠 4. Conditionals Inside Loops
//11) Print numbers from 1 to 20, skip multiples of 4 using continue.

//12) Print numbers from 1 to 10, stop at 7 using break.

//13) Count how many numbers between 1 and 100 are divisible by both 3 and 5.
console.log("11th question: ");
for(let i=1;i<=20;i++){
    if(i%4===0){
        continue;
    }
    console.log(i);
}


console.log("12th question: ");
for(let i=1;i<=10;i++){
    console.log(i);
    if(i===7){
        break;
    }
}

console.log("13th question: ");
let count=0;
for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        count++;
    }
}
console.log("numbers between 1 and 100 are divisible by both 3 and 5:",count);


// 🔂 Nested Loops (Without Patterns)
// 14) Print all pairs (i, j) where i and j go from 1 to 3.

//15) Find all combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4).

console.log("14th question");
console.log("All possible pairs (i,j) where i and j go from 1 to 3");

for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(`(${i},${j})`);
    }
}


console.log("15th question");
console.log("All combinations (a,b) such that a+b=5 and 1<=a,b<=4:");
for(let a=1;a<=4;a++){
    for(let b=1;b<=4;b++){
        if(a+b===5){
            console.log(`(${a},${b})`);
        }
    }
}