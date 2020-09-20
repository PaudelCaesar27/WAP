// Suppose you are given a file of javascript code containing a list of many function and varaible declarations.
// All of these function and variable names will be added to the Global javascript namespace. What simple
// modification to the javascript file can remove all the names from the Global namespace

// Ans. Encapsulation and namespace protection with closures i.e. using IIFE and revealing module pattern
// IFIE creates a local scope and keeps all the variables and functions inside of it as private.
// We can then return only those variables & functions to the outside world that we want to expose publicly.
// We assign the IIFE to a variable module. By doing this, we are creating a module that is globally accessible.
