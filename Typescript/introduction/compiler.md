# Exercise - Install the TypeScript compiler

Your code editor might have built-in language support for TypeScript but, to transform TypeScript code into JavaScript that a browser will understand, you need to first install the TypeScript library. The library also contains the TypeScript compiler, also called tsc.

You can install TypeScript globally (available anywhere in your file system) or locally (available only at the project level). In this exercise, you'll install TypeScript globally. As you work more with TypeScript in larger and more complex codebases, you'll likely switch to a per-project installation to have more control over the consistency of your projects.

### Test your TypeScript installation
You might already have TypeScript installed on your machine. You can verify this by opening the Command Prompt window and entering tsc. If TypeScript is installed, you'll see the version and a list of compiler commands. You're now ready to use TypeScript!

If TypeScript isn't installed, you'll see a message that the command is not recognized. Continue to the next step of this exercise.

### Install Node Package Manager (npm)
You'll need a copy of Node.js as an environment to run the TypeScript package. Node.js, a JavaScript library for server-side applications, is not required to learn TypeScript. But by installing it, you also get Node Package Manager, also called npm, the package manager for the JavaScript language. You'll then use npm to install the TypeScript package.

If you're a JavaScript developer, npm is likely already installed on your machine. You can verify this by opening the Command Prompt window and entering npm version. If npm is installed, you'll see the version and a list of compiler commands, and you're ready to use npm.

If npm isn't installed, you'll see a message that the command is not recognized. To install Node.js:

Go to the Node.js Downloads page.

Select any of the available versions of Node.js to download and install it.

To verify that npm is installed, open the Command Prompt window, and then enter npm version.

Install TypeScript
TypeScript is available as a package in the npm registry as typescript. To install the latest version of TypeScript:

In the Command Prompt window, enter 

```
npm install -g typescript.
```
Enter tsc to confirm that TypeScript is installed. If it was successfully installed, this command should show a list of compiler commands and options.


If there are no compiler errors, the tsc command generates a JavaScript file named utility_functions.js.

If the compiler finds errors in the code, it displays them in the command window. Fix the errors in the TypeScript file, and then rerun the tsc command.

### Compiler options
By using compiler options, you can control how the JavaScript is generated from the source TypeScript. You can set the options either at the command prompt, as you would with many command-line interfaces, or in a JSON file named tsconfig.json.

Numerous compiler options are available to you. You can find a complete list of options in the tsc command-line interfaces documentation. Here are a few of the most common options:

noImplicitAny
noEmitOnError
target
the directory options
To control the compilation, you can use compiler options with the tsc command, including:

The --noImplicitAny option instructs the compiler to raise errors on expressions and declarations with an implied any type. For example:

tsc utility_functions.ts --noImplicitAny

The --target option specifies the ECMAScript target version for the JavaScript file. This example compiles an ECMAScript 6-compliant JavaScript file:

tsc utility_functions.ts --target "ES2015"

You'll learn about other compiler options in later modules.