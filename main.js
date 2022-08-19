var number = 5; //inline comment
/* Radhika Arora, 
multi line comment */


/* Data types and variables
NULL, undefined, string, boolean, symbol, number, object
An oject can store a lot of key value pairs.
A variable is a label to point to the data.*/
var number = 5;
const pi = 3.14
let myName= "Radhika Arora"
// var is used in the full program.
// let is used within a scope.
// const remains constant for the whole program and it cannot be changed later unlike var and let. Doing this, will get you with an error.


// Storing variables with an assignment operator.
var a;
var b = 2;
console.log(a) // null on console
a = 7;
b = a;
console.log(a) // 7 on console


var myStr = "My name is\" Radhika Arora; // This is how you can use double quotes inside your sring(with a backslash\) if you want them in the console.
var myStr = `'<a href = "https://google.com"'.` // Using a backtick, we can use single and double quotes inside our string.


/* Code Output:-
\' single quote
\" double quote
\\ backslash
\n newline
\r carraige return:- A carriage return, sometimes known as a cartridge return and often shortened to CR, <CR> or return, is a control character or mechanism used to reset a device's position to the beginning of a line of text
\t tab
\b backspace
\f form feed
*/


// Concatenating string using += operator along with the + opearor.
var ourStr = "I come first. ";
ourStr = "I come second."
console.log(ourStr) // I come first. I come second.


// Concatenating two strings using variables.
var myName = "Radhika Arora";
var myStr = "Hello, my name is " + myName + ", how can I help you..?";


var anAdjective = "amazing"
var myStr = "Radhika Arora is"
myStr += anAdjective;


// Finding the length of a string.
var firstNameLength = 0;
var firstName = "Radhika";
firstNameLength = firstName.length;
console.log(firstNameLength) // 7


// Finding the letter at a specific index.
var firstLetterOfFirstName = 0;
var firstName = "Radhika";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);


// Note that strings are immutable that means they cannot be altered once created, but they can be modified or changed in one or the other way.
var myStr = "Jello World";
myStr[0] = "H"; // cannot chyange like this, this will give an error.
// else do this
myStr = "Hello World";


// Finding the last letter of the name or letters from the end with a specified index from the end.
var myName = "Radhika";
var lastLetterOfName = myName[myName.length - 1];


// Creating madlibs using a function, a game in which you can provide your own set of words as the arguments of the function to make it funny or appealing to the user.
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = "";
result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + quickly.";
return result;

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(result); // The big dog ran to the store quickly.
  
  
  var arr = ['Radihika', 20];
  
  
  // Multidimensional or Nested Array :- In this, each element is an array itself.
  var arr = [['Radhika', 20], ['Arora', 20]]
  
  
  var arr = [50, 60, 70]
  var arrIndex = arr[0];
  console.log(arrIndex); // will print 50 on the console.
  
  
  var arr = [50, 60, 70];
  arr[0] = 40;
  console.log(arr); // will print [40, 60, 70] on the console.
  
  
  var arr = [[1, 2, 3], [4, 5, 6], [[7, 8, 9], [10, 11, 12]]];
  var myIndex = arr[0][0];
  console.log(myIndex); // will print 1 on the console as [1, 2, 3] is the 0th index for the first 0, and 1 is the 0th index for the second 0.
  
  
  // Adding elements at the end of the array.
  var arr = ['Radhika', 20];
  arr.push(['Arora', 20]);
  console.log(arr); // will print [['Radhiika', 20], ['Arora', 20]]
  
  
  // Removing elements from the array
  // Pop function removes the end element from the array.
  var arr = [1, 2, 3];
  var removeItem = arr.pop();
  console.log(arr); // will print [1, 2] on the console.
  
  
  // Removing elements from the starting of the array
  var arr = [1, 2, 3];
  var removeFirst = arr.shift();
  console.log(arr); // will print [2, 3] on the console.
  
  
  // Adding elements at the beginning of the array
  var arr = [1, 2, 3];
  arr.unshift(0);
  console.log(var); // will print [0, 1, 2, 3] on the console.
  
  
  // Functions allow us to create reusable code in JavaScript.
  function reusableCode() {
    console.log("Hello world");
  }
  reusableCode(); // will print Hello World on the console.
  
  // function with arguments/ parameters
  function add(a, b) {
    console.log(a+b);
  }
  add(2, 3); // will print 5 on the console.
  
  
  // Scope refers to the visibility of variables.
  // Variables which are defined outsite the function have global scope which can be seen from everywhere from the JavaScript.
  var global = 10;
  function a1(){
    global_1 = 5; // if we use var keyword here, then global_1 will be scoped to this function, but since we haven't used var keyword here, then this is global variable for all the other functions and this can be then used inside the other function as a global variable.
  }
  
  function a2(){
    var output = "";
    if (typeof global != "undefined"){
      output + = global
    }
    if (typeof global_1 != "undefined"){
      output + = global_1
    }
    console.log(output);
    a1();
    a2();
    
    
    // Variables which are declared inside the function as well as the function parameters, are considered as local variables.
    function fun1() {
      var myVar = 10;
      console.log(myVar);
    }
    fun1(); // will print 10 on the console
    console.log(myVar); // will give you an error saying that myVar is undefined.
    
    //Data types in JavaScript
    /* Boolean :- For true and false values
       Null :- For empty or unknownn values
       Undefined :- For variables that are only declared and not defined or initialised.
       Number :- For integer and floating-point values
       String :- For characters and alphanumeric values
       Object :- For collections or complex values
       Symbols :- For unique identifiers or objects. */
    
    
    //Callback in JavaScript
    /* A callback is a JavaScript function that is passed to another function as an argument or a parameter.
    This function is to be executed whenever the function that it is passed to get executed.*/
    const higherOrderFunction = (callback) -> {
      return callback();
    }  
    //A higher order function takes a function as a parameter.
    const getBlogs = (cb) => {
      setTimeout(() => {
        cb({
          title: "Welcome to JavaScript"
        })
      }, 2000);
    }
    getBlogs((bp) => {
      console.log(bp.title)
    })
  
  
    //Function declaration and Expression
    //Function Declaration :- Declared as a sepearte statement within the main JavaScript code.
    //Can be called before the function is defined and offers better code readability and organisation.
    function abc() {
      return 5;
    }
    
    //Function Expression :- Created inside an expression or some other construct.
    //Created when the execution point reaches it, can be used only after that.
    //Used when there is a need for a conditional declaration of a function.
    var a = function abc() {
      return 5;
    }
    
    
    //Cookies in JavaScript
    //A cookie is generally a small data that is from a website and stored on the user's machine by a web browser that was used to aceess the website. It is stored in the form of a text file.
    //Cookies are used to remember information for later use and also to record the browsing activity on a website.
    //The simplest way of cheating a cookie using JavaScript is as below :-
    document.cookie = "key1 = value; key2 = value2; expires = date;"
    

    //Closures in JavaScript
    //Closures in JavaScript is a feature where an inner function has acess to the outer function's variables.
    //It has three scopes :-
      //a) Has access to its own scope, i.e., the variable defined within its curly braces.
      //b) Has access to the variables of the outer functions.
      //c) Has access to the global variables.
      //For example,
        function outer_func() {
          var b = 10;
          function inner_func() {
            var a = 20;
            console.log(a + B0; }
          return inner;
        }
        //The inner function inner_func() can access its variable 'a' and the outer variable 'b'.
  
  
     //Imports and Exports in JavaScript
     //In javaScript, we cannot import anything unless we have exported it in the another file. For example,
     export const sqrt = Math.sqrt;
     export function square(x) {
       return x * x;
     }
     export function diag(x, y) {
       return sqrt (square(x) + square(y));
     }//Save this file with the name of calc.
  
     import { square, diag } from "calc";
     console.log(square(4)); // 16
     console.log(diag(4, 3)); // 5
  
  
     //Undefined variable :- The variable which is declared but has not been assigned any value yet. For example,
     var x;
     console.log(x);
  
     //Null :- NULL is an assignment value that we can assign to any variable that is meant to contain no value. For example,
     var y = NULL;
     console.log(y);
  
     //Umdeclared :- Variables that are not declared or that do not exist in a program or application. For example,
     console.log(z);
  
  
     //Remove Duplicates from an array in JavaScript
     /* There can be two ways for doing this :-
        a) By using filter method, in order to call the filter() method, three arguments are required. These are array, current element, and index of the current element.
        b) By using for loop, an ampty array is used for storing all the repeating elements.*/
     //For example,
     var data = ['a', 'b', 'c', 'a'];
     var unique = data.filter((c, index) ==> {
                              return data.indexOf(c) === index
                              )}
     console.log(unique);


//JavaScript is a dynamic language because the datatypes of the variables can chnage at runtime. For example,
<script>
  var x = 0; // x is a number
  x++;
  x = "String"; // x is a string
  x = true; // x is a boolean value.
</script>


// To determine the data type of the variable in the JavaScript, typeOf(variable name) function is used.


// JS hoisting :- It is a function mechanism in which the declaration of variables and function are moved to the top of the scope.


// When a variable is decalared without the var keyword, then it is termed as a global variable.


// use strict keyword stricty checks if the variable is defined using the var keyword. And if not, it throws up an exception. 


// IIFE :- Immediately Invoked Function Expression, it does not have a name, is anonymous, and gets immediately invoked, is self imnvoking.
// For example :-
(function() {
  var y = 10; // This variable is local in IIFE and it cannot be accessed outside the IIFE function.
  alert("I am IIFE");
})(); // These two parenthesis says that the function is invoked immediately.
alert(y);


// Name collision occurs when same name of function and variables are declared in the program. This wll throw an error.
// IIFE solves Name Collision problem because IIFE is an anonymous function.
// A function with a name can have name collision but IIFE can never have name collision. This is the main difference between Normal function and IIFE function.


// Design patterns are time tested architecture solutions. So, to create a single instance we can use singleton pattern, if the object creational process is complex, we can use factory pattern and so.
// Module design pattern or the module revealing problem is the most used design pattern.


// Module pattern or revealing module pattern has 2 big advantages :-
// Self-contained independent components, logical grouping, better structure code. because of IIFE
// Provides Encapsulation and Abstraction.


// Module design pattern is a combination of IIFE(namespace) and Closures(Encapsulation).


// Different ways to create a JavaScript object :-  
  // a) Using Literal
        var pat = {"name":"", "address":""};
        pat.Admit = function() {
          alert("I am admitted");
        }
  // b) Using object.create
        var patnew = Object.create(pat); // creating instance from a current object.
        patnew.age = 10;
  // c) Using Constructor/Funcion 
         function patient(){
           this.name = "";
           this.address = "";
           this.Admit = function(){
           }
         }
         var pat1 = new patient();
  // d) ES6 instances or classes :-
         class PatientClass{
           constructor(name, addresss){
             this.name = "";
             this.address = "";
           }
         }
         var p = new PatientClass(); // instance of the class


// Inheritance 
// In JS, there is an object inheritance. Done by using prototype inheritance. 
// Every JS Object has a prototype object. It's an inbuilt object provided by JavaScript.
// Prototype chaining is a process where the property/methods are first checked in the current object, ifnot found, then it checks in the prototype object, if it again does not find in that, it tries checking the prototypes prototype object, until it get the prototype object NULL. It is like a linked list.


// Let keyword was introduced in the ES6 JS, and it helps to create immediate block level local scope.


// Let keywords are hoisted but they are not initialised with any value beore the declaration of the variable unlike var keyword wich initialises the variable with an undefined value at the first. Let keyword gives us an uninitialised error.
// For example,
    console.log(y); // y = undefined
    console.log(x); // x = referenceError : Cannot access 'x' before initialisation.
    let x = 10;
    var y = 10;
    
    
// Temporal Dead zone 
// TDZ is a period or it's a state of a variable where variables are named in memory but they are not initialised with any value. Just like the let keyword.


// Let VS Var 
// Let is more strict in terms of scoping and initialisation.
// Let only allows the access of variables in its immediate enclosing block or scope, but var allows the access of the variable in the full function body.
// Value in ley keyword is initialised with nothing and it provides hoisting.
// For example,
function Test(){
  if(1==1){
    console.log(x);
    console.log(y);
    let y = 10; // y is accessible only inside the if block.
    var x = 10; // x is accessible anywhere inside the function.
  }
  console.log(x);
  console.log(y);
}
// Var keyword is a function scope. Initialises the value of the variable by undefined and provides hoisting.
