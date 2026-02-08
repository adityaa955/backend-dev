// import {upperCase, reverseStr, vowelsCount} from "./ex2/stringUtils.js";  //importing the functions from stringUtils.js
// console.log(vowelsCount("hello my name is aditya"));
// console.log(upperCase("hello"));
// console.log(reverseStr("hello"));

import {createTask, readTask, updateTask} from "./ex4/todo.js";  //importing the functions from todo.js
console.log(createTask("aditya shukla",["task1","task2"]));  //creating a task for user with two tasks.
console.log(readTask("aditya"));  //reading the task for user .
console.log(updateTask("aditya shukla",["nodejs learn","javascript"]));  //updating the task for user  by adding a new task.
console.log(deleteTask("aditya"));  //deleting the task for user .