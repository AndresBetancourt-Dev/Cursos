# Overview of TypeScript

JavaScript, one of the world's most-used programming languages, has become the official language of the web. Developers use it to write cross-platform applications that can run on any platform and in any browser.

Although JavaScript is used to create cross-platform apps, it wasn't conceived for large apps involving thousands, or even millions, of lines of code. JavaScript lacks some of the features of more mature languages that power today's sophisticated applications. Integrated development editors (IDEs) can find it challenging to manage JavaScript and maintain these large code bases.

TypeScript addresses the limitations of JavaScript, doing so without compromising the key value proposition of JavaScript: the ability to run your code anywhere and on every platform, browser, or host.

### What is TypeScript?
TypeScript is an open-source language that was developed by Microsoft. It is a superset of JavaScript, which means that you can continue to use the JavaScript skills you've already developed and add certain features that were previously unavailable to you.

#### Type hints
The core feature of TypeScript is its type system. In TypeScript, you can identify the data type of a variable or parameter by using a type hint. With type hints, you describe the shape of an object, which provides better documentation and allows TypeScript to validate that your code is working correctly.

Through static type checking, TypeScript catches code issues early in development that JavaScript can't normally catch until the code is run in the browser. Types also let you describe what your code is intended to do. If you're working on a team, a teammate who comes in after you can easily understand it too.

Types also power the intelligence and productivity benefits of development tools, such as IntelliSense, symbol-based navigation, go to definition, find all references, statement completion, and code refactoring.

Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code. If TypeScript can determine the data type implicitly (for example, when you assign a value to a variable by using let age = 42), it automatically infers the data type.

```ts
function addNumbers(x: number, y: number) {
  return x + y;
}
```

In the TypeScript pane, notice the red squiggly lines under the parameter names in the addNumbers function. This indicates that the type checker identified errors. Hover over one of the parameters and read the description of the error. TypeScript has implicitly assigned a type of any, which is the broadest type because it can essentially contain anything.

Update the TypeScript code to specify a type for each parameter. Replace x with x: number and y with y: number.
You'll notice that the errors are now gone from the parameters, but a new one has appeared under the first argument in the function call: "Argument of type 'string' is not assignable to parameter of type 'number'."

### Other code features of TypeScript
TypeScript has additional coding features that you won't find in JavaScript:

Interfaces
Namespaces
Generics
Abstract classes
Data modifiers
Optionals
Function overloading
Decorators
Type utils
readonly keyword

You'll learn more about some of these features in later modules.

## TypeScript compatibility with JavaScript
TypeScript is a strict superset of ECMAScript 2015 (ECMAScript 6 or ES6). This means that all JavaScript code is also TypeScript code, and a TypeScript program can seamlessly consume JavaScript.

Browsers understand JavaScript only. For your application to work, when you write it in TypeScript, you need to compile your code and convert it to JavaScript. You transform the TypeScript code into JavaScript code by using the TypeScript compiler or a TypeScript-compatible transpiler. The resulting JavaScript is clean, simple code that runs anywhere JavaScript runs: In a browser, on Node.js, or in your apps.