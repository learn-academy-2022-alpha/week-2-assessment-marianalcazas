// ASSESSMENT 2: Coding Practical Questions with Jest

const { indexOf } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.
    describe("math",() => {
    it("returns an array with all the numbers multipled by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
      expect(math(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(math(numbersArray2)).toEqual([72, 81, 90, 99, 108])
        })
      })
    
      //math is not defined

// b) Create the function that makes the test pass.

//pseudo code
//create a function
//must take an array as a paramether
//use .map() to iterate through the array
//return all the numbers multiplies by 3

const math = (array) => {
    return array.map(value => {
        return value * 3
    } )
}

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisbile by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("number",() => {
    it("decides if the number is evenly divisible by three or not", () => {
          const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
      expect(math(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(math(numbersArray2)).toEqual([72, 81, 90, 99, 108])
        })
      })

//number is not defined

// b) Create the function that makes the test pass.

//pseudo code
//create a function
// take an number as a paramether
//if statement to check the conditionals 
//return the numbers divisable by 3 if else number not divisible by 3

const number = (divisible) => {
    if(divisible % 3 === 0) {
        return `${divisible} is divisible by three`
    } else {
        return `${divisible} is not divisible by three`
    } 
    
     }

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("words",() => {
    it ("returns an array with the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
      expect(words(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(words(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
        })
      })

//  words is not defined


// b) Create the function that makes the test pass.

//pseudo code
//create a function that takes in an array of words and returns an array with all the words capitalized.
//declare a function that takes in an array
// create a local variable that maps through the array 
//with each value access the first index and capitalize the letter then concatenate the remainder of the word


const words = (array) => { 
    let eachItem = array.map(value => {
        // with each value access the first index and capitalize the letter then concatenate the remainder of the word
        return value[0].toUpperCase() + value.substring(1) 
    })
    return eachItem
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("takeString",() => {
    it("logs the index of the first vowel.", () => {
       const vowelTester1 = "learn"
// Expected output: 1
       const vowelTester2 = "academy"
// Expected output: 0
      const vowelTester3 = "challenges"
// Expected output: 2
      expect(takeString(vowelTester1)).toEqual(1)
      expect(takeString(vowelTester2)).toEqual(0)
      expect(takeString(vowelTester3)).toEqual(2)
        })
      })

      //takeString is not defined

// // b) Create the function that makes the test pass.

//pseudo code
//Create a function takeString
//create a variable that I can use split and filter 
//with each value access the first index of the letter 



const takeString = (string) => {
    let theFirstVowel = string.split("").filter(value => {
        return value === "a" || value === "e" || value === "i" || value === "o" || value === "u"
      })
      return string.indexOf(theFirstVowel[0])
    }

