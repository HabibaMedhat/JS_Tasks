// alert('Hi from js file');

// calculator
// var number1 = window.prompt('Enter first number!');

// var number2 = window.prompt('Enter second number!');

// var operator = window.prompt('Enter operator!');

// if(number1 !== Number(number1)){
//     number1 = window.prompt('Enter first number!');
// }

// if(number2 !== Number(number2)){
//     number2 = window.prompt('Enter second number!');
// }


// alert(calculate(number1,number2,operator));



// function calculate(num1, num2, operator) {
// var result;
//     switch(operator) {
//         case '+':
//             result = +num1 + +num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Re-enter info!");
        

//     }
//     return result;

// }

//////////////////////////////

// calc factorial

// var n = window.prompt('Enter n to calculate n!');

// function factorialCalc(n){
//     var result = 1;
//     for(var i = 1; i <= n; i++){
// result *= i;
//     }
//     return result;
// }

// alert(factorialCalc(n));

////////////////////////////////

// FizzBuzz
// var maxNumber = window.prompt('Enter max N');

// function FizzBuzz(n){
// for(var i = 1; i <= n; i++){
//     if(((i%3) == 0) && ((i%5) == 0)){
//         console.log('FizzBuzz');
//     }
//     else if ((i%3) == 0) {
//         console.log('Fizz');
//     }
//     else if((i%5) == 0){
//         console.log('Buzz');
//     }
//     else{
//         console.log(i);
//     }
    
// }
// }

// FizzBuzz(maxNumber);

/////////////////////////////////////

// celsius to fahrenheit convertion

// var temp = window.prompt('Enter temperature');
// var scale = window.prompt('Enter scale');

// celcFahrConversion(temp, scale);

// function celcFahrConversion(temp, scale) {
//     var converted;
//     if(scale === 'c' || scale === 'C')
//     {
//         converted = (temp * (9/5)) + 32;

//         console.log(`Temp in F: ${converted}`);

//     }
//     else if(scale === 'f' || scale === 'F'){
//         converted = (5/9) * (temp - 32);

//         console.log(`Temp in C: ${converted}`);
//     } else {
//         console.log('re-enter info!');
//     }
// }

///////////////////////////////////////

// greeting function

// var hour = window.prompt('Enter hour!');

// function greeting(hour){
//     if(hour >= 5 && hour <= 11){
//         console.log('Good Morning!');
//     } else if(hour >= 12 && hour <= 16){
//         console.log('Good Afternoon!');
//     }
//     else if(hour >= 17 && hour <= 20){
//         console.log('Good Evening!');
//     }
//     else if((hour >= 21 && hour <= 23 ) || (hour >= 0 && hour <= 4)){
//         console.log('Good Night!');
//     }
// }

// greeting(hour);


///////////////////////////////

// simple interest calculator

var input = window.prompt('Enter values of principal, rate and time separated by commas.');

var splitted = input.split(',');
console.log(splitted);
var principal = Number(splitted[0]);
var rate = Number(splitted[1]);
var time = Number(splitted[2]);
// console.log(rate,time);
console.log(interestCalc(principal, rate, time));

alert(interestCalc(principal, rate, time));

// console.log(principal, rate, time);
// console.log(typeof(principal));
// console.log(typeof(rate));
// console.log(typeof(time));

function interestCalc(principal, rate, time){
    var interest = (principal*rate*time) / 100;
    return interest;

}







