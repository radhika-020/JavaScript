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
  
  
  
