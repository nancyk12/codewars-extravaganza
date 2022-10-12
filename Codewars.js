//DIFFICULTY level: medium - CHOOSE 2 (1-4)

/* 1 Description: sum of postive
You get an array of numbers, return the sum of all of the positives ones.
Example: [1,-4,7,12] => 1 + 7 + 12 = 20 
Note: if there is nothing to sum, the sum is default to 0.
*/

function sumOfPositive(array){
    let i = 0;
    let sum = 0;
    while(i < array.length){
        if(array[i] > 0){
            sum += array[i];
        }
        i++;
    }
    return sum;
}
console.log(sumOfPositive([1,-4,7,12]));

/* 2 DESCRIPTION: first and last character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeFirstLast(param){
    let i = 0;
    let string = "";
    while(i < param.length){
       string = param.slice(1,-1);
       i++;
        }
        return string;
    }
    console.log(removeFirstLast("Nancy"));

/* 3 DESCRIPTION: smallest integer
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

function smallestInt(param){
    let i = 0;
    let array = [];    
    let minArray = Math.min(...param); //Math.min(...param) doesn't use a while loop.
    return minArray;
} 
console.log(smallestInt([34, -345, -1, 100]));

//with a wile loop

function findSmallestInt(arr){
    let min = NaN; // assign min val to not a number, wil be updated
    let i = 0; // for the wile loop
    //iterate through each element of the lop 
    //save the smallest one
    while(i < arr.length){
        //compare each element of the array and see if it's
        // greater than the current min 

        //make an exception for the first element
        if(i == 0) {
            min = arr[i];
        } else if (arr[i] < min){ //check if next in list are smaller, 
                                // update min val.
            min = arr[i];
        }
        i++;
        }
        //return our value to the user
        return min;
    }
console.log(findSmallestInt([-346, 35, 6, 8, -7]));


/* 4 DESCRIPTION: vowel count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function vowels(param){

   let vowelCount = 0
   for (let i =0; i < param.length; i++){
    if(param[i] === "a"){
        vowelCount += 1;
    } else if(param[i] === "e"){
        vowelCount += 1;
    } else if(param[i] === "i"){
        vowelCount += 1;
    } else if(param[i] === "o"){
        vowelCount += 1;
    } else if(param[i] === "u"){
        vowelCount += 1;
    }
   } 
return vowelCount;
}
console.log(vowels("Dominic"));



//DIFFICULTY level: hard - CHOOSE 2 (5-9)
/* 5 DESCRIPTION: sum of numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

1. define a function called "sumOfInt" that takes two parameters
2. easy case: if a == b then return a
3.add all the numbers between (a, b) inclusively i.e. (-1, -2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */


function sumOfInt(a, b){
    let i = 0;
    let sum = 0;

    //for case (a == b)
    if (a === b) {
        return a
    } else if (b < a) {
        let tmp = a;
        a = b;
        b = tmp;
    }

    for(let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
} 
console.log(sumOfInt(-1, 2));



/* 6 DESCRIPTION: square every digit
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9squared is 81 and 1squared is 1.

Note: The function accepts an integer and returns an integer
1. make a function squaredDigits(param)
2. How do we square each digit? use Math.pow() on each digit.
3. make loop to square each digit.
4. build a new string and convert squaredDigit to string. 
5. turn the string of numbers into a integer. 

*/

function squaredDigits(param){

    let string = String(param);
    let newString = "";

    for(let i = 0; i < string.length; i++){
        //Math.pow(param[i]);
        //newString += String(Math.pow(param[i]));
        let digit = Number(string[i]);
        newString += String(digit ** 2);
    }
    console.log(newString);
    return Number(newString);

}
console.log(squaredDigits(9119));


/* 7 DESCRIPTION: high and low
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/


function highAndLow (str){
    let newStr = ""; // to hold our new string
    let arr = []; // hold on to the numbers
    let nums = str.split(" ");
    for(let i = 0; i < nums.length; i++){

        //print each character
        //console.log(str[i]);
      
            //if (str[i] !== " "){
              //console.log(str[i]);
              arr.push(Number(nums[i]));
        
    }
    //now that we have an array of intergers (this wouldn't work on strings) we can ge the min 
    // ...arr unpacks the array into 1,2,3
    //convert the min and max back into strings for display
    let min = String(Math.min(...arr));
    let max = String(Math.max(...arr));

    //add the new min/mmax strings to newStr
    newStr = max + " " + min;
    return newStr;
};
console.log(highAndLow("1 2 3 1 4"));
console.log(highAndLow("6 3 -4 2 4"));



/* 8 DESCRIPTION: get middle character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

1. define a function that takes a string and returns the highest and lowest number
2. Make number array out of string
3. find max and min 
4. concat

*/


/* 9 DESCRIPTION: get shortest word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/







//DIFFICULTY level: very hard - CHOOSE 1 (10, 11)


/* 10 DESCRIPTION: mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" 

Programs are about identifying the input and output

For every letter input, output 1 capital letter + (pos of the letter) * letterlower  case

capital letter + (index) * letter lower case, each is separted by a dash. 

algorithm:
1. make a function called accum -done
1. define a new string to hold our result -done
2. process the inputted string character by character 
3. convert the first letter to upper case, add to final string
4. add lowercase letters based on position.
5. return new string to the user

*/

//defined function called accum
function accum(s){

    //let's define a new string to hold our result
    let newStr = "";
    //process the string character by character
    for(let i = 0; i < s.length; i++) {

        //we add the first capital letter
        newStr += s[i].toUpperCase();
 
        //add lower case letters based on position
        for(let j = 0; j < i; j++) {
            /*will run based on the value of i  
            i.e. if i =2 , it will run twice if arg[i] = b, and i = 2 -> we  will add to the new string bb */
            newStr += s[i].toLowerCase();
        }   
        // if(i !== s.length -1){
        //    newStr += "-";
        //}
        newStr += "-";
        //console.log(newStr);
        }
        return newStr.slice(0,-1);
        //return newStr;
    }

// -> "A-Bb-Ccc-Dddd"
console.log(accum("abcd"));
console.log(accum("RqaEzty"));



/* 11 DESCRIPTION: Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

//DIFFICULTY level: impossible - Extra Credit (12)

/* 12 DESCRIPTION: boggle word checker
Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]
Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.

*/