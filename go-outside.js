//evaluatiing if "raining" is true or false to determine if unbrella is needed

//var raining = true;

//if (raining) {
//  console.log("Don't forget your unbrella!");
//}



//evaluating t/f of both "raining" and "cold" to determine if "umbrella is needed" and if "scarf is needed"

//var raining = true;
//var cold = false;

//if (raining) {
//  console.log("Don't forget your umbrella!");
//}
//if (cold) {
//  console.log("Make sure you pick out a scarf!");
//}

//console.log("Now you're ready to go outside!");



//if-else statement evaluating for cold (scarf or short sleeves)

//var cold = false;

//if(cold) {
//  console.log("Make sure you pick out a scarf!");
//} else {
//  console.log("Sort sleeves are fine.");
//}



//if-else statement with additional options, depending on temperature range

//var temperature = 12;

//if (temperature < 0) {
//  console.log("Make sure you pick out a scarf!");
//} else if (temperature < 15) {
//  console.log("Short sleeves won't cut it!");
//} else {
//  console.log("Short sleeves are fine.");
//}

//console.log("Now you're ready to go outside!");



//logical operator to determin if you are elegible to vote (must be a citizen AND over 18)

//if (isCitizen && age > 18) {
//  console.log("You are eligible to vote.");
//}



//determining if the temperature is too extreme - below 40 OR above 40)
//if (temperature < -40 || temperature > 40) {
//  console.log("Maybe going outside isn't such a great idea...");
//}



//using ! to evalutate "raining" - ! operator reverses the value of the variable
//if (!raining) {
//  console.log("leave your umbrella at home!");
//}



//PUTTING IT ALL TOGETHER!!

//variables

var raining = true;
var cold = false;
var temperature = 12;


//Is it raining?

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (!raining) {
  console.log("leave your umbrella at home!");
}


//Is it cold?

if(cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Sort sleeves are fine.");
}


//A better recommendation for "cold" based on temperature...

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}


//determining if the temperature is too extreme - below 40 OR above 40)
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}


console.log("Now you're ready to go outside!");











