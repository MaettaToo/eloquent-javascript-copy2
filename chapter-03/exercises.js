////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  //I: function takes two params repped as numbers
  //O: returns the smaller of two numbers
  //C: none
  //E: works with negative numbers
  // conditional stmts to determine which value is smaller and return the smaller number
  if(x < y){
    return x;
  }
  if(x > y){
    return y;
  }
  if(x < 0 && y < 0 && x > y){
    return y;
  }
  if( x === y){
    return x
  }


}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num, output = 0) {
  //I:function takes one param repped as number, default param repped as number
  //O: returns boolean true if even and false if odd
  //C: none
  //E: works on negative numbers
  //base
   //create a positive number for num 
   num = Math.abs(num);
   //base
   //conditional stmt num strictly equal to zero
   if(num === 0){
     //return true
     return true;
   }
   //conditional stmt num strictly equals 1
   if(num === 1){
     //return false
     return false;
   }
   //recursion
   //invoke function subtracting 2 from num 
   return isEven(num - 2);


}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) {
  //I: function takes two params repped as strings,  input string(str) and comparison string(char)
  //O: return number that quantifies the number of times char appears in str
  //C: none 
  //E: string as a space ' ', stings with no space''
  // init variable to hold the count
  let count = 0;
  // iterate over string
  for( let i = 0; i < str.length; i++){
    // conditional stmt to detemine how many times char appears
    if(str[i] === char){
      count ++
    }
  } 
  // return results of for loop and if stmt
  return count;

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
   //I: function takes one param repped as strings
  //O: return number that quantifies the number of times 'B' appears in str
  //C: none 
  //E: string as a space ' ', stings with no space''
  // init variable to hold the count
  let count = 0;
  // iterate over string
  for( let i = 0; i < str.length; i++){
    // conditional stmt to detemine how many times 'B' appears
    if(str[i] === 'B'){
      count ++
    }
  } 
  // return results of for loop and if stmt
  return count;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};