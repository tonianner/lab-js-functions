/*
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

5. Write a function that return the number of arguments passed to the function when called.

6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.

8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long

*/
//TIP: write down the steps in plain english first to understand what you need (arrays? return? ...) > write/research down the methods
//To know  what you need to do

// Question 1
function maxOfTwoNumbers(x,y) { //2 arguments
  if (x < y) {	//place condition
    return y;
  } else if (x > y) { 
    return x;
  } else {
  	return "same";
  }
}

// Question 2
function maxOfThree(x,y,z) { //3 argumennts
  if (y > x && y > z) {
    return y;
  } else if (z > x && z > y) {
    return z;
  } else if (z < x && x > y{
  	return x;
  } else {
  	return "same";
  }
}

// Question 3
function isCharacterAVowel(c) { //one parameter
  var vowels = ['a','e','i','o','u']; 
  if (vowels.indexOf(c) !== -1) {	//given this array vowel, look for c // !== -1 (location in array) if not -1 then you won't find it
  									//.indexOf(c) gives location of what you are looking for in array
    return true;
  } 
  return false;
}
	//or
	if (c === 'a' || c === 'e' || ...){
		return true;
	} else {
		return false;
	}
	//or
	switch


// Question 4
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) { 
    sum += arr[i];
  }
  return sum;
}

sumArray([1,2,3,4]) //"sum" of the array

// Question 4
function multiplyArray(arr) {
var product = arr[0];
for (var i = 1; i < arr.length; i++) {
product *= arr[i];
}
return product;
}



// Question 5
var numberOfArguments = function(){
  return args.length
}

or

console.log(arguments.length)



// Question 6
//
var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};

// Question 6 alternative answer

reverseString = function(){ 
  return this.split('').reverse().join('');
}; //split every characters on the array "I"," ", "A"
⁄


// Question 7
function findLongestWord (arr) {
  longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

// Question 7 EXPLANATION
function findLongestWord (arrOfStr) {
  var longestWord = "";
  for (var i = 0; i < arrOfStr.length; i++){
    if (arrOfStr[i].length > longestWord.length){
      longestWord = arrOfStr[i];
    }
  }
  return longestWord;
}
​
// I need to pass in an array
// my function need parameter to take in array
​
// i need var longestWord = "";
// for loop to loop the array
  // I know i can find the length by using .length
  // if to check the word in array[i] > longestWOrd;
// end of loop
// return the longest string


// Question 8
function filterLongWords (arr,num) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

filterLongWords(["",""], )

// Bonus 1
String.prototype.reverse = function(){ 
  return this.split('').reverse().join('');
};


// Bonus 2 (use regexr)
function charactersOccurencesCount(stringToCount) {
  var characters = {}; //creat new hash
  // replacing all Capitals by Lowercase letters and removing spaces
  var stringToCount = stringToCount.toLowerCase().replace(/\s/g, ''); // replace /\s/g to '' <nothing 
  stringToCount.split("").forEach(function(l){ //split each letter to an array ["t","o","n","i"], each element on the arraay l, do this function
    characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1); //first loop in array, if true 1, if false whatever the number was +1
    				//isNan("d") = true since not a number
    				//1 to count the number of letters
    				//+1 (false) since if it already had a number before (counthing the letters) it will add +1
  });
  return characters;
}