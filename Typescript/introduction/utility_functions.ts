/**
 * Compile a TypeScript file
 * As you learned earlier, TypeScript is a strict superset of ECMAScript 2015 (ECMAScript 6 or ES6). This means that all JavaScript code is also TypeScript code, and a TypeScript program can seamlessly consume JavaScript. In fact, you can convert a JavaScript file to a TypeScript file by simply renaming the extension from .js to .ts.
 * 
 * However, not all TypeScript code is JavaScript code. This is because TypeScript adds new syntax to JavaScript, which makes the JavaScript easier to read and implements some features, such static typing. Although the TypeScript code makes development easier and less error prone, browsers and most other runtimes don't natively support TypeScript. For this reason, TypeScript requires a build step (transpiler) to transform it to JavaScript for your application to work.
 * 
 * You transform TypeScript code into JavaScript code by using the TypeScript compiler, or you can use a TypeScript-compatible transpiler, such as Babel, swc, or Sucrase. This process removes the TypeScript-specific code (for example, type declarations and interfaces). Additionally, it generates a clean JavaScript file that you can run from your web pages, and it's compatible with browsers.
 * Compile a TypeScript file
 * 
 * You run the TypeScript compiler at the command prompt by using the tsc command. When you run tsc without additional parameters, it compiles all the .ts files in the current folder and generates a .js file for each one.
 * You can also compile a specific file. For example, to compile a TypeScript file named utility_functions.ts, enter tsc utility_functions.ts.
*/

console.log("Something");