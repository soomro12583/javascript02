
// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

document.write(`The sum of ${num1} and ${num2} is ${sum}`);


//document.write(`Question 4:`)
const tkt =parseInt(prompt("total price of ticket RS.600/-" ));
document.write(`<center>Total cost of <b>${tkt}</b> tickets is : <b>${tkt*600}</b> PKR.</center>`);

let a = 7;
let b=2;
let sub = a-b;
let Multiplay = a*b;
let divide = a/b;
let modulus = a%b;
document.write(`Question 02<br><br>`);

document.write(`Sum of ${a} and ${b} is: ${sum}<br>`);
document.write(`Subtract of ${a} and ${b} is: ${sub}<br>`);
document.write(`Multiply of ${a} and ${b} is: ${Multiplay}<br>`);
document.write(`Division of ${a} and ${b} is: ${divide}<br>`);
document.write(`Modulus of ${a} and ${b} is: ${modulus}`);


document.write(`<br><br>Question 03<br>`);
document.write(`Value after variable declaration is: Undefine.<br>`);
document.write(`Initial value: is: ${a}.<br>`);
document.write(`Value after increment is: ${b}.<br>`);
document.write(`Value after decrement is: ${sub}.<br>`);
document.write(`The remainder is : ${modulus}.<br><br>`);

document.write(`<center><h2>Table of 4</h2>`)
 for(var i=1;i<11;i++){
    var tablenum=4;
    document.write(`<center><h4>${tablenum} X ${i} = ${tablenum*i}</h4>`)
 }

 

 document.write(`<br><h2>Question 05<h2>`)
 let Celsius=97;
 let f=(Celsius*(9/5))+32;
 document.write(`${Celsius} °C is ${f} °F <br><br>`)
 let forn=30;
 let c=(forn-32)*5/9
 document.write(`${forn} °F is ${c} °C`)

