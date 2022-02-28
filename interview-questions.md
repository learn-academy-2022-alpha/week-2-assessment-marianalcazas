# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: The parameter can happen when a Function is created. The parameter goes inside of the parenthesis after the name of the function. The parameter is a placeholder that is declared in the parenthesis. The argument is that the data is passed onto the function upon it's invocation. Unlike the parameter, the arguments do not have names. Each argument is an expression, which can contain zero or more variables, constants, and literals. The argument can be different every time that it is called. 

  Researched answer: While doing my reseach, I found that when a function is created it can have parameters. The parameters goes inside of the parenthesis and only need to be defined in a function once. On the other hand, the argument can be different each time a function is invoked. The argument will get matched up with the parameter. So parameters are the names listed in the function and arguments are the actual values passed onto the function.  



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The javaScript built in method .map() takes the value, index, and array as parameters. Value is always required while using map, while index and array are optional and only used if needed.

  Researched answer: Map is a function that can iterate through an array and return a new array with updated values of the same length. It takes predefined parameters such as value, index, and array. The index and array are optional and only used when the programmer needs it.




3. What is the difference between map and filter?

  Your answer: The difference between map and filter are that map functions do not change the original array, but instead iterate through the array and returns a new array of the same lengtht. The filter function also will not change the original array, as it will iterate through the array, but it will return ONLY the values that are true for the new array and the value that satisfy the past conditions.  

  Researched answer: Looking at the syllabus, I found that even though map and filter contain the same parameters (value, index, array), the outcomes are different. Map is a function that is going to be useful when the programmer wants to iterate through each item in an array and return a new array with updated values with the same length. Filter function, on the other hand, will lopp through an array and will make a decision to bring back only the group that satisfy the stated condition. 



4. What is the difference between a function and a method?

  Your answer: I think the difference between a function and a method is the object. When a function belongs to an object it is called a method.  
  
  Researched answer: After researching this question, I found that a function executes a list of statements, while a method is a function that is applied to an object. A function can be a method if there is an object associated with it, but a method isn't the same as a function, as a function doesn't necessarily have an object associated with it. So functions and methods are both functions, but a method just implies that the function is a property of an object.       


5. What is object destructuring?

  Your answer: Object destructuring creates special types of variables that expose a key inside of an object. 

  Researched answer: Object destructuring in Javascript is a way of nominating a variable. The best thing about it is that it lets you take something like an array or an object and unpack their values into individual variables and manipulates object properties. It is very useful because the programmer can take the properties of an object and break them out into individual, recllable variables.


6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting in JavaScript is moving the declaration of all variables and functions to the top of the code.

  Researched answer: Hoisting is JavaScript's default action of moving declarations to the top. In JavaScript, a variable can be declared after it has been used, meaning that a variable can be used before it has been declared. If a developer doesn't understand hoisting, programs may contain bugs (also known as errors). To avoid bugs, always declare all variables at the beginning of every scope. 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Classes can inherit information from other classes creating a parent-child relationship. Classes define attributes (data) and behaviors (methods). Class inheritance keeps code from being repetitive.

2. React: is an open-source JavaScript library that is used for building user interfaces, specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

3. React state: The state object is where you store property values that belong to the component. When the state object changes, the component re-renders.

4. React lifecycle methods: Lifecycle methods are special methods built into React that are used to operate on components throughout their duration in the DOM. For example, it is used when the component mounts, renders, updates, or unmounts.

5. DOM: The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
