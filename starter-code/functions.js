// Question 1
function maxOfTwoNumbers(a,b) {
	if (a > b){
		console.log(a);
	} else {
		console.log(b)
	}
}
maxOfTwoNumbers(5,3)

// Question 2
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

// Question 3
function isCharacterAVowel(letter) {
	var vowels = ["a", "e", "i", "o","u"]; //use array since it needs to go around it
		for (var i = 0; i < vowels.length; i++){ //to loop in vowels
			if (letter === vowels[i]){ //to get value in array
				return true;
			} else {
				return false;
			}
		}
}
isCharacterAVowel("a");
isCharacterAVowel("b");

// Question 4
function sumArray() {
 
}


// Question 4
function multiplyArray() {

}


// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

/*
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

5. Write a function that return the number of arguments passed to the function when called.

6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.

8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long

*/

