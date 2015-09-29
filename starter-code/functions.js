// Question 1: Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(a,b) {
	if (a > b){
		console.log(a);
	} else {
		console.log(b)
	}
}
maxOfTwoNumbers(5,3)

// Question 2: Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a,b,c) {
	if ((a > b) && (a > c)){
		console.log(a);
	} else if ((a < b) && (b > c)){
	    console.log(b)
	} else if ((a < c) && (c > b)){
	    console.log(c)
	} else {
	    console.log("they are leveled")
	}
}

maxOfThree(1,1,1)

// Question 3: Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(letter) {
	var vowels = ["a", "e", "i", "o","u"]; 			//use array since it needs to go around it
		for (var i = 0; i < vowels.length; i++){ 	//to loop in vowels
			if (letter == vowels[i]){ 				//to get value in vowels array
				return true;
			} else {
				return false;
			}
		}
}
isCharacterAVowel("a");
isCharacterAVowel("b");

// Question 4: Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
function sumArray(array) { 							//pass in a parameter array so that numbers can be inserted
 var value=0										//set start value to 0
 for (i = 0; i < array.length; i++){
	value += array[i];								//value = 0 + value of i in the array and will loop around the array until .length
	}	
	return value;									//return back the value to calculate
}

sumArray([1,2,3,4]) 

// Question 4
function multiplyArray(array) { 
	var value = array[0];							//place value in array[0], if set to '0' result will be 0 due to multiply
	for (i = 0; i < array.length: i++){
		value *= array[i];
	}
	return value
}

multiplyArray([1,2,3,4])

// Question 5: Write a function that return the number of arguments passed to the function when called.
var numberOfArguments = function(){
  return arguments.length							//The arguments.length property contains the number of arguments passed to the function.
}


// Question 6: Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function (string){
  return string.split('').reverse().join('');
};
reverseString("jag testar")

// Question 7: Write a function findLongestWord that takes an array of words and returns the length of the longest one.
function findLongestWord (arrOfStr) { 				// a parameter for an array of strings
  var longestWord = "";								// longestWord =  empty string
  for (var i = 0; i < arrOfStr.length; i++){ 		// loop around the array
    if (arrOfStr[i].length > longestWord.length){	// item in the array.length > longestWord.length "" ?????	 
      longestWord = arrOfStr[i];					// assign longest string in an array in longestWord.
    }
  }
  return longestWord;
}
findLongestWord (["hello", "blah blah"]);
}


// Question 8: Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long
function filterLongWords () {
  
}


// Bonus 1: Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString().
//??????


// Bonus 2: Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurences for each letter, regardless of the case
function charactersOccurencesCount() {
  
}

/*
For example, calling the function with the string "General Assembly" will return:

{
  a: 2,
  b: 1,
  e: 3,
  g: 1,
  l: 2,
  m: 1,
  n: 1,
  r: 1,
  s: 2,
  y: 1
}
*/

