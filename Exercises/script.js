//JS STALKER EXERCISE

// var firstName = prompt("What's your first name?");
// var lastName = prompt("What's your last name?");
// var age = prompt("How old are you?");

// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age + " years old");


//AGE CALCULATOR
// var age = prompt("how old are you?");
// var daySpent = age * 365.25 ;
// alert("your age is roughly " + daySpent + " days.");

//CONDITIONAL 

// var age = prompt("how old are you?");

// if(age < 18) {
//     alert("SORRY, YOU ARE NOT OLD ENOUGH TO ENTER THE VENUE");
// } else if(age < 21) {
//     alert("YOU CAN ENTER BUT CANNOT DRINK");
// } else {
//     alert("COME ON IN. YOU CAN DRINK!!!");
// }
 
//CONDITIONAL EXERCISE

// var age = prompt("how old are you?");

// if(age < 0) {
//     console.error("ERROR"); 
// } else if(age === 21) {
//     console.log("happy 21st birthday");
// } else if(age % 2 !== 0) {
//     console.log("your age is odd");
// } else {
//     console.log("okay");
// }

// var num = 1;

// while(num <= 10) {
//     console.log(num);
//     num += 2;
// }

// var num = -10;
// while(num <= 19) {
//     console.log(num);
//     num++;
// }

// var num = 10;
// while(num <= 40) {
//     console.log(num);
//     num+=2;
// }

// var num =300;
// while(num <= 333) {
//     if(num % 2 !== 0) {
//         console.log(num);
//     }
//     num+=1;
// }

// var num =5;
// while(num <= 50) {
//     if(num % 5 === 0 && num % 3 === 0) {
//         console.log(num);
//     }
//     num+=1;
// }



// var answer = prompt("Are We There Yet?");

// while(answer != "yes" && answer !== "yeah"){
//     var answer = prompt("Are We There Yet?");
// }
// alert("YAY, We made it!");

// var answer = prompt("Are We There Yet?");

// while(answer.indexOf("yes") === -1){
//     var answer = prompt("Are We There Yet?");
// }
// alert("YAY, We made it!");

// var str = "ahceclwlxo";

// for(var i = 1; i < str.length; i+=2) {
//     console.log(str[i]);
// }

// for(var num = -10; num <=19; num++) {
//     console.log(num);
// }
// for(var num = 10; num <=40; num+=2) {
//     console.log(num);
// }
// for(var num = 300; num <=333; num+=1) {
//     if(num % 2 !== 0) {
//         console.log(num);
//     }
// }
// for(var num = 5; num <=50; num+=1){
//     if(num % 5 === 0 && num % 3 === 0) {
//         console.log(num);
//     }
// }

// function area(length, width) {
//     console.log(length / width);
// }
// area(21,3);

// function greet(person1, person2, person3) {
//     console.log("hi", person1);
//     console.log("hi", person2);
//     console.log("hi", person3);
// }
// greet("tomi", "buki", "dami"); 

// function capitalize(str) {
//     if(typeof str === "number"){
//         return "thats not a string!"
//     }
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "lagos";
// var capital = capitalize(city);

// var num = 29;
// var capital = capitalize(num);

// // function declaration 
// // function capitalize(str) {
// //     return str.charAt(0).toUpperCase() + str.slice(1);
// // }

// // function expression 
// // var capitalize = function(str) {
// //     return str.charAt(0).toUpperCase() + str.slice(1);  
// // }

// function test(x, y) {
//     return y - x;
// }
// test(10, 40);

// function math(x) {
//     return x * 2;
//     console.log(x);
//     return x / 2;
// }
// math();

// function isEven(x) {
//     if(x % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// isEven();

// // function factorial(n) {
// //     return (n !=1) ? n * factorial(n - 1) : 1;
// // }
// // factorial(5);

// function factorial(num) {
//     var result = 1;

//     for(var i = 2; i <= num; i++) {
//         result = result * i; //result *= i;
//     }
//     return result;
// }

// function kebabToSnake(a) {
//     //var mystring = "this,is,a,test";
//     var newStr = a.replace(/-/g , "_");

//     return newStr;
// }

// var num = 8;
// function doMath() {
//     num += 1;
//     if(num % 5 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// num += 1;
// doMath();

// function printReverse(arr) { 
//     for(var i = arr.length - 1; i>= 0; i--){ 
//         console.log(arr[i]);
//     }
// }
// printReverse([3,6,2,5])

// function isUniform(arr) {
//     var first = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] !== first){
//             return false;
//         }
//     }
//     return true;
// }

// function sumArray(arr) {
//     var total = 0;
//     arr.forEach(function(element){
//         total += element;
//     });
//     return total;
// }

// function max(arr) {
//     var max = arr[0];
//     for(var i = 1; i < arr.length; i++) {
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

var person = {
    name: "tomi",
    age: 19,
    city: "lagos",
};
var person = {}
person.name = "tomi";
person.age = 19;
person.city = "lagos";

var person = new Object();
person.name = "tomi";
person.age = 19;
person.city = "lagos";

var movies = [
    {
        title: "everyday",
        hasWatched: true,
        rating: 5
    },
    {
        title: "frozen",
        hasWatched: false,
        rating: 4.5
    }
];

movies.forEach(function(movie) {
    var result = "you have "; 
    if(movie.hasWatched){
        result += "watched ";
    } else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars"
    console.log(result)
})