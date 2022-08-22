# Jest - Test Runner

React Testing Library helps with
    - rendering components into virtual DOM
    - searching virtual DOM
    - Interacting with virtual DOM
Needs a test runner
    - Find tests, run them, make assertions

Jest
    - is recommended by RTL
    - comes with create react app

react-scripts test, Running jest in watch mode

## Watch mode
- Watch for changes in files since last commit
- Only run tests related to this files
- No changes? No tests.
    Type a to run all tests

# How does Jest works?

global test method has two arguments
    string description
    test function
Test fails if error is thrown when running function
    - assertions throw errors when expectation fails

No error -> Test Pass
 - empty test passes