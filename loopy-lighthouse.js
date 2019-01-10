//Write a program that prints the numbers from 100 to 200 to the console, with three exceptions:

function printNumbers(){

  //print the numbers from 100 to 200 to the console
  for (var i = 100; i <= 200; i++) {

    //If the number is a multiple of 3, but not a multiplier of 4
    if (i % 3 === 0 && i % 4 !== 0) {
      //, print the string "Loopy" instead of the number
      console.log("Loopy");
    }

    //Else If the number is a multiple of 4, but not a multiplier of 3
    else if (i % 4 === 0 && i % 3 !== 0) {
      // print the string "Lighthouse" instead of the number
      console.log("Lighthouse");
    }

    //If the number is a multiple of both 3 and 4,
    else if (i % 3 === 0 && i % 4 === 0) {
      // print the string "LoopyLighthouse" instead of the number.
      console.log("LoopyLighthouse");
    }

    //else just print the number
    else {
      console.log(i);
    }
  }
}

//execute print numbers
printNumbers();
