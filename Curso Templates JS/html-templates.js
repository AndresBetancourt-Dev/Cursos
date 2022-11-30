//HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;

/**
 * Browser Support
 * Template Literals is an ES6 feature (JavaScript 2015).
 * It is supported in all modern browsers:
 */
