(function(exports) {
  "use strict";

  /*
   1. Write a JavaScript function to check whether an `input` is an array or not.
   Test Data :
   console.log(isArray('w3resource'));
   console.log(isArray([1, 2, 4, 0]));
   false
   true
   */
  function isArray(item) {
    return item instanceof Array;
  }

  /*
   2. Write a JavaScript function to clone an array.
   Test Data :
   console.log(cloneArray([1, 2, 4, 0]));
   console.log(cloneArray([1, 2, [4, 0]]));
   var newArray = cloneArray('Not an Array');
   [1, 2, 4, 0]
   [1, 2, [4, 0]]
   Error: Only Arrays allowed!
   */
  function cloneArray(array) {
    var clone = [];
      for(var i=0; i < array.length; i++){
        clone[i] = array.slice(i,1);
      }
      return clone;
  }

  /*
   3. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
   Sample array : 'Not array'
   Expected result : Error: Only Arrays allowed!
   Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
   Expected result : [15, -22, 47]
   */
  function removeFalse(array) {
    var cleanedArray = [];
    for(var i=0; i < array.length; i++){
        if(array[i]!== 0 && array[i]!== false && array[i]!== "" && array[i]!== undefined && isNaN(array[i])!==true){
            cleanedArray[i] = array[i];
        }
      }
    for(var i=0; i < cleanedArray.length; i++){
        if(cleanedArray[i]==undefined){
          cleanedArray.splice(i, 1);
          i--;
        }
    }
    return cleanedArray;
  }

  exports.arrays = {
    isArray              : isArray,
    cloneArray           : cloneArray,
    removeFalse          : removeFalse
  };
})(this);
