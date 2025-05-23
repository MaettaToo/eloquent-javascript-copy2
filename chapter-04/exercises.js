////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  
    //I: function takes in 3 numbers, the first 2 numbers indicates the range the third number indicates the steps between the numbers
    //O: return an array of numbers  between the first two input numbers, with steps if step number is given 
    //C: none
    //E: should work with negative steps, same numbers in the range
    // init var as empty array to hold results
    let output = [];
    // conditional stmt if start and end are strictly equal return empty array
    if(start === end){
      return output;
    }
    // create stmt if  function  is called with two params
  if(step === undefined){
       //init loop to itertate over randge and push integers into ouput array
      for(var i = start; i <= end; i++){
           // push integers into output array
          output.push(i);
      }
      // conditional stmt to increment by step if step is present and positive
  } if(step > 0){
        for(let i = start; i <= end; i += step){
          output.push(i);
        }
      }
      // return output 
      return output;
   
  };

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //I: function takes an input array of numbers
  //O: return number that totals the sum of the integers in the array
  //C: none
  //E: works with negaive integers, if array is empty 
  // init variable to contain results
  let sum = 0;
  if (array.length === 0){
    return 0;
  } else{
    for(let i = 0; i < array.length; i++){
      sum += array[i]
    }
    return sum;
  }


}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function reverseArray(array) {
  //I: function takes an array 
  //O: return a new array with the indices in reverse order
  //C: none
  //E: must work with large arrays, input array is empty
  // init var as empty array for results
  let output = [];
  // determine if in put array is empty
  if(array.length === 0){
    return [];
  }
     for(let j = 0; j < array.length; j++){
         console.log(j);
         output.unshift(array[j]);
       }
    
return output;

}
//console.log(reverseArray([2, 4, 6]));
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));



////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //I: function take an array as param
  //O: function returns input array with indices in the reverse order
  //C:none
  //E:needs to work on large array 
  // init for loop
for (let i = 0; i < array.length; i++) {
  // use splice to remove the index at i, delete count is zero, add the last index to the begginging of the array
    array.splice(i, 0, array.pop());
}
//return array
  return array
}
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //I: function takes an array 
  //O: returns an object with the indices of the array as values 
  //C: none
  //E: none 
  // init var rest assigned to value of null
  let rest = null;
  // init for that iterates in the reverse 
  for( let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest };// reassign rest to an object 
  }
  return rest
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
  //I: function takes one param repped as list, default param as array 
  //O: return an array with the values of the list as indices
  //C: none
  //E: none 
  // use recursion to create array
  //base
  if(list.rest === null){
    array.push(list.value);
    return array 
  }
  // recursion
    // how to update array 
    array.push(list.value);
  return listToArray( list.rest, array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(unknown, func) { 
    //I: function takes an unknown value to be inserted at the first position, and the array to list function as params   
    //O: returns arrayTolist function with unknown added to the front of the input array 
    //C: none
    //E: none
    
    return func(array.unshift(unknown));
  };
  console.log(prepend(12, arrayToList([1, 2, 7])));/// arrayToList[12, 1, ,7]
  



  



////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};