
// Question1

let name = prompt("what is your name")
console.log(name)
let age = prompt("what is your age")
console.log(name)

//Question 2

//remaining string methods

//concat( objectOfString ) Method
/*This method combines the text of two strings and returns a new combined or joined string*/
let a = 'WFH'
let b = 'has been made optional'
document.write(a.concat(b));
//output: WFH has been made optional

//includes(queryString) Method
/*This method checks whether the string variable contains specific string or not.
 This method returns “true” if the string is present in the variable string variable, else it returns “false”*/
let a = 'WFH'
let b = 'has been made optional'
document.write(a.includes('WFH'));
// returns true

//repeat(number) Method
/* This method returns string with the number of copies of the existing string.*/
let a = 'WFH'
let b = 'has been made optional'
document.write(a.repeat('3'));
// output: WFH WFH WFH

//slice(startIndex, endIndex) Method
/*This method extract a part of string and returns a new string. */
let a = 'WFH'
let b = 'has been made optional'
document.write(b.slice(2,8));

// remaining array methods

//Array.shift() method
/*Removing elements at the beginning of an array */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//Array join() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
//The join() method returns the array as a string.

//Array length method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;
//Return the length of an array.