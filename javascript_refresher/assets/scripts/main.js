// import { key } from "./utils.js"

// console.log(key)


const user = {
    firstname : "John",
    lastname: "Doe",
    age: 10
}


// const firstname = user.firstname
// const lastname = user.lastname

const {firstname, lastname} = user

console.log(firstname)

const array1 = [1,2,3]
const array2 = [4,5,6]

const array3 = [...array1, ...[4,5]]

console.log(array3)


console.log({...user, ...{address: "Saalfelden", age: 22}})
