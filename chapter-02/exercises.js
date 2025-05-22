
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
//I: function that takes one param repped as number
//O: log hashtags, that form triangle, the length and width based on input number
//C:none
//E: none

function triangles(num) {
  //init var as empty string to contain results of addding to the string 
  let tri = '';
  
  //init for loop to add to string 
  for(let i = 1; i <= num; i++){
   // add the pound sign to the string 
    tri += '#';
    //console.log the variable 
    console.log(tri);
  }
};
  



////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
    //I: function that takes in  two params , start and end, repped as numbers 
    //O: prints numbers betweeen start and end, for numbers divisible by 3 fizz prints, 
    //   numbers divisible by five buzz prints,divisible by  3 & 5 FizzBuzz prints, all else the number prints
    //C: none
    //E: none
    //init loop that counts between start and end
    for(let i = start; i <= end; i++){
    //create conditional statements to print 1-100
        if(i % 3 !== 0 && i % 5 !== 0){
            console.log(i);
        }
        // create independent conditional stmts for multiples of three print “Fizz”
         if(i % 3 === 0 && i % 5 !== 0){ 
            console.log('fizz');
        }
        // create independent conditional stmts for multiples of five print “Buzz”
         if(i % 5 === 0 && i % 3 !== 0){ 
            console.log('buzz');
        }
        // create independent conditional stmts for multiples of three and five print “FizzBuzz”
        if(i % 5 === 0 && i % 3 === 0){ 
                        console.log('fizzbuzz');
        }
    
    } 

  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
    //I: function takes in one param x, repped as number that represents the size of the chessboard 
    //O: return strings that alternates spaces and #s  that is the length and with of x 
    //C: none
    //E: must start with space 
    //init var chess as empty string to contain results 
    let chess = ''
    // init two for loops, the first loop for the outer for loop to add the new line  
        for(let i = 0; i < x; i++){
          //the second for loop to alternate between evens and odds for hashtag and space placement 
          for(let j = 0; j < x; j++){
            // conditional stmt to determine when to add space or # to the string based on even and odss 
          if((i + j) % 2 === 0){
            chess += ' ';
          } else {
            chess += '#';
             }
         
        }// add new line  
          chess += "\n"
        }
      
   console.log(chess);
  };




////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}