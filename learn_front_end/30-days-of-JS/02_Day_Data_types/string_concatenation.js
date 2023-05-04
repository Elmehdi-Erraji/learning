// Declaring diffrent variables of diffrent data types
let space = ' '
let firstname = 'mehdi'
let lastname = 'raji'
let age = 20
let country = 'morocco'
let city ='agadir'
let language ='JavaScript'
let job = 'student'
//concatenation using addition operator
let fullname = firstname + space + lastname //concatination, merging two string together
console.log(fullname)

let personInfo1 = fullname + '.I am' + age +'. I live in ' +country
console.log(personInfo1)

//concatenation: template literals (template strings)
let personInfoTwo = 'I am ${fullName}. I am ${age}. I live in ${country}.' //ES6 - String interpolation method
let personInfoThree = 'I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.'
console.log(personInfoTwo)
console.log(personInfoThree)