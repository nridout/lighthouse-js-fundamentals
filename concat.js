//Define a function concat, which, given two arrays, concatenates the arrays together.
function concat(array1, array2) {

  //create an empty array
  var newArray = [];

  // if both arrays are empty, return an empty array
  if (array1.length === 0 && array2.length === 0) {
    newArray = [];
  }
  //if the first array is empty, only add the values in the second array
  else if (array1.length === 0) {
    for (var i = 0; i < array2.length; i++) {
      newArray.push(array2[i]);
    }
  }
  //if the second array is empty, only add the values in the first array
  else if (array2.length === 0) {
    for (i = 0; i < array1.length; i++) {
      newArray.push(array1[i]);
    }
  }
  //otherwise, add the values from array1 and array2 to the new array
  else {
    for (i = 0; i < array1.length; i++) {
      newArray.push(array1[i]);
    }
    for (i = 0; i < array2.length; i++) {
      newArray.push(array2[i]);
    }
  }
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
console.log(concat([], []), "=?", []);
