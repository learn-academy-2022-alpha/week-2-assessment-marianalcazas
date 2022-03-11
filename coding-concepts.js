// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log? ['A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '2']

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: "A l p h a 2 0 2 2"
// b) Verify and explain: the outcome was different from what I expected because I confused the outcome of .join with .split . Split converts string into an array while .join converts all values in an array to string.


// --------------------2) What will this log? undefined

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("matt"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: The outcome came back as undefined because it did not have the statement "return" that ends function execution and specifies a value to be returned to the function caller so the outcome could not be defined.

// --------------------3) What will this log? 8, 10, 12, 14, 16]

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: 8, 10, 12, 14, 16]
// b) Verify and explain: because it is a .map the function iterates through the array and return a new array with updated values, since it was asking to multiply by 2 the outcome was the numbers updated values. 


// --------------------4) What will this log? [11,13,15]

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: The outcome came back only odd numbers because the .filter function loops through the array and returned the value that satisfy the stated conditions.  


// --------------------5) What will this log? "JavaScript"

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: Because it is an array that holds collection of data (JavaScript object) I am able to invoke the object independent of the order that it is and it will bring me back the value that I asked. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Student: George, cohort: "Alpha", year: 2022
// b) Verify and explain: Because classes are dynamic, it's reusable just like functions. It can take arguments and creates objects with unique data and each object created from the class is independent from each other so it can be reassigned. 
