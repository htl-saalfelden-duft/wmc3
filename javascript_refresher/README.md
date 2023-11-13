# Javascript Refresher
### Einführung
* **12_react_complete_guide_js_refresher (S.1-4)**
  
## Adding JavaScript To A Page & How React Projects Differ
  * Adding scripts-folder and app.js in assets 
  * 'defer'-attribute in script tag
  * 'type'-attribute in script tag: module with import
  * No script tags in react because of build process
  
## React Projects Use a Build Process
  * **12_react_complete_guide_js_refresher (S.5-8)**
    * jsx is html-code has to be built
    * public/index.html in first-react-app 
    * After build, there are many script tags (show in index.html of first-react-app)
  
## "import" & "export"
  * type=module
  * export variable (KEY) and import it with ```import { key } from ""```
  * export default "asdd11" and ```import anyname from ""```
  * mix export and export default with ```import * as xy from ""```

## Arrow Functions
  * function to arrow-function
  * Anonymous functions with export default
  
## Revisiting Objects & Classes
  * Grouping two seperate variables into an object
  ```js
  const username = 'Max'
  const age = 10

  //to

  const user = ...
  ```
  * Add function to object
```js
{
    ...,
    greet() {}
}
```
  * Use property in added function with this
```js
    {
        ...
        greet() {`Greetings from ${this.username}`}
    }
```
  * Create user-class with constructor and function and instanciate it
  
  
## Arrays & Array Methods like map()
  * Create string-array
  * push to array
  * findIndex (with return and curly or without curly)
  * map (concatenate or create object)

## Destructuring
  ### Arrays
  ```js
  //Instead of

  const array = ["Dietmar", "Duft"]
  const firstName = array[0]

  //do

  const [firstName, lastName] = ["Dietmar", "Duft"]
  ```
  ### Objects
  ```js
  const user = { name: "Dietmar", age: 48 }
  const { name, age } = user

  //or

  const { name: firstName, age } = user
  ```

## The Spread Operator

### Arrays
```js
//merge to arrays with
const mergedArray = [...array1, ...array2]
```

### Objects
```js
const newObject = {name: "Dietmar", age: 48, ...obj}
```

## Revisiting Control Structures
```js
//normal for loop
for(int i...) {}

//for of
const hobbies = ["Sports", "Cooking"]
for(const hobby of hobbies) {
    console.log(hobby)
}

//for in
const user = { name: "Dietmar", age: 48 }
for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    const attribute = user[key];
  }
}
```

## Using Functions as Values

```js
const handleTimeout() {
    console.log("Timed out ... again!")
}
setTimeout(handleTimeout, 2000)

//or
setTimeout(() => {
    console.log("Timed out ... again!")
}, 2000)

//and
const greeter = (greetFn) => {
    greetFn()
}

greeter(() => console.log("Hi!"))
```
## Defining Functions Inside Of Functions

```js
function init() {
    function greet() {
        console.log("hi")
    }
    greet()
}
init()
//does not work
greet()
```
## Reference vs Primitive Values
```js
//does not work
let myName = "Dietmar"
const add2Primitive = (val1, val2) => {
    val1 += val2
}

add2Primitive(myName, " Duft")
console.log(myName)

//works
const hobbies = ["Sports", "Cooking"]
const add2Ref = (array, val) => {
    array.push(val)
}

add2Ref(hobbies, "Eating")
console.log(hobbies)
```