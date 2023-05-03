/**const PI = Math.PI 
console.log(PI) //3.141592

// rounding to the closest number 
// if above .5 up if less 0.5 down rounding 


console.log(Math.round(PI))  // 3 to round values to the nearest number 

console.log(Math.round(9.88)) // 10

console.log(Math.floor(PI)) // 3rounding down

console.log(Math.ceil(PI)) // 4 rounding up

console.log(Math.min(-5, 3,20,4,5,10)) // -5,return the minimum value 

console.log(Math.max(-5, 3,20,4,5,10)) // 20,return the maximum value
 

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// let us create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

// absolute value 
console.log(Math.abs(-10)) // 10

// square root 
console.log(Math.sqrt(100)) //10

//power 
console.log(Math.pow(3, 2)) // 9

console.log(Math.E) // 2.718




//logarithm
//return the natural logarithm with the base E of x, math.log(x)
console.log(Math.log(2))  // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046

// return the natural logarithm of 2 and 10 resoectively
console.log(Math.LN2)  //0.6931471805599453
console.log(Math.LN10) //2.302585092994046

//trigonometry 
console.log(Math.sin(0))      
console.log(Math.sin(60))     

console.log(Math.cos(0))
console.log(Math.cos(60))
*/

//The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...

let random = Math.random() //generates 0 to 0.9999...

//Now, let us see how we can use random() method to generate a random number between 0 and 10:

let randomNum = Math.random()           //generates 0 to 0.999...
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)           //this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)      //this gives between 0 and 10







































