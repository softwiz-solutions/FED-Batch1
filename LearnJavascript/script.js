// // document.write("<h1>welcome to very first class of js</h1>")
// //variable declaration
// var penHolder = "12", cardHolder = 13

// // varibale initialization
// // penHolder=12;

// function localVariable() {
//     penHolder = "usama";
//     console.log(penHolder)
// }
// localVariable()
// console.log(penHolder)

// a+b -->expression
// a,b operands
//+ operator


//Chapter # 06, OPERATORS

// 1. increment operator
var a = 1;
console.log("simple a ", a)
// a++; //a =a+1
// console.log("inc a ", a)
// a--; //a =a-1
// console.log(" dec a ", a)

// prefix, postfix
// prefix: --a, ++a,
//postfix: a++,a--,


//prefix
// var b;
// b = --a
// console.log("a=", a);
// console.log("b=", b);

//ppost
// var b;
// b = a--
// console.log("a=", a);
// console.log("b=", b);

// a = 1


// a += 5 //a = a + 5
// a *= 5 //a = a * 5

// console.log(a++ + --a + a++ - a--)
// console.log(a)




a = 5
// if (a == 1) {
//     //code
//     return "hello"
// }
// else if () {

// }
// else {
//     //code
// }

// conditional operator (? :)

// a == 1 ? console.log("hello") : console.log("not hello")
// var result = a == 1 ? "<h1>hello</h1>" : (a == 2) ? "hello2 " : "<h1>not hello</h1>"

// // var result = a == 2 ? "hello" : a > 5 ? "hy" : a < 2 ? "not hello" : 'hy ali';

// console.log("result=", result)
// console.log(typeof a)
// var result = (typeof a == "number" ? "a is number" : "a is not number")
// console.log("result", result)

//conditions


// var number = 1

// if (number == 1) {
//     console.log("hello")
// }
// else {
//     console.log("not hello");
// }

// nested if
// number == 6
// if (number > 5) {
//     if (number == 1) {

//         console.log("number is 1");
//     }
//     else {
//         console.log("number is greater than 1");
//     }
// }
// else {
//     console.log("number is less than 5");
// }


// chapter 8 Switch statment
// it is like a if-else statment
var number = prompt("Enter the number");
number = parseInt(number)
console.log("Entered number:", number);
console.log("Type of  number:", typeof (number));
switch (number) {
    case 1:// if(number===1)
        console.log("monday");
        
      
        break;
    case 2:// else if(number===2)
        console.log("Tuesday");
        break;
    case 3:// else if(number===3)
        console.log("Wednesday");
        break;
    case 4://else  if(number===4)
        console.log("Thursday");
        break;
    case 5:// else if(number===5)
        console.log("Friday");
        break;
    case 6://else  if(number===6)
        console.log("Staruday");
        break;
    case 7://else  if(number===7)
        console.log("Sunday");
        break;
    default: //else
        console.log("enter the valid number")
}
