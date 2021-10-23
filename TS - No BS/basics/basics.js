"use strict";
let userName = "Andrés";
let hasLoggedIn = true;

/** Without Typescript the boolean it's converted to a string */
hasLoggedIn += " " + userName;
console.log(hasLoggedIn);
