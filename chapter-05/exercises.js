// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  //I: function takes an array of arrays as input 
  //O: return an array with all of the input arrays elements as indexes 
  //C: none
  //E: must be in original order
  // return results of reducing over array 
 return arrays.reduce((acc, curr) =>{
    // return acc adding curr at each iteration
    return acc.concat(curr);
    
  },[]);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

  function loop(value, test, update, execute) {
    //I: funtion takes in 4 params, input value, 3 functions, a function to test the value, 
    //function to update the value, function to execute the value
    //O: return changed value
    //C: none
    //E:none
    //base
    //conditional stmt invoking test function on value  
    if (test(value)) {
      // if true invoke execute function on value
      execute(value);
      //recursion
      //recursion begins invoke loop, using invoking update function on value, test, update, execute as params
      return loop(update(value), test, update, execute);
    } // else stop
  }


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
//I: function takes two params, array input value to test, and function holds the test 
//O: return true if every value passes the test  
//C:none
//E: work with empty array 

// iterate over array  
  for(let i = 0; i < array.length; i++){
     // create conditional stmt invoke callback function to see if results are true or false
     if(!func(array[i], i, array)){
      //return false 
        return false
        }   // return true 
      } return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

  function dominantDirection(string) {
    //I: function takes string as input 
    //O: return string 'ltr', 'rtl' based on how many strings read rtl or ltr, return the larger of the two 
    //C: none
    //O: none
    //create a variable ltr and initialize as empty array
    let ltr = [];
    // create a var rtl and initialize as an empty array 
    let rtl = [];
    // iterate thourh input string using for loop
    for(let i = 0; i < string.length; i++){
      // create a variable called script and assign it the result of invoking characterscript on the current characters char code
      // determines the type of script the character is 
      let script = characterScript(string.charCodeAt(i))//access each indiviual character code returns object
      // determine if character is in the array
        if( script !== null){
          if(script.direction === 'ltr'){// if script object has direction key and value of 'ltr'  
            ltr.push(script);// push object into ltr  array
          } else {// else push object into rtl  array
            rtl.push(script); 
          }
        }
    }// determine which array is larger
    if(ltr.length > rtl.length){
      return 'ltr';// return 'ltr' 
    }else{
      return 'rtl'// return 'rtl'
    }  
  }

  
 

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};