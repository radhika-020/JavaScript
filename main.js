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
