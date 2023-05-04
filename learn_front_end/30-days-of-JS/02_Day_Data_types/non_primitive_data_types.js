let num = [1,2,30]
num[0]=10
console.log(num) // [ 10, 2, 30 ]

let nums = [1,2,3]
let numbers = [1,2,3]
console.log(nums == numbers) //false 

let userone = {
    name: 'mehdi',
    role: 'student' ,
    country : 'morocco' 
}
let usertwo = {
    name : 'badr',
    role : 'brother',
    country :'morocco'
}

console.log(userone == usertwo)

numbers = num
console.log(numbers == num)
console.log(num)
console.log(numbers)

console.log(userone == usertwo)

userone = usertwo

console.log(userone == usertwo)
