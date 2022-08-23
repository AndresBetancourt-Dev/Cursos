# General course plan
## Start with very simple React
    - focus on Testing Library Syntax
## First app: not much of an app
    - changing button color, disabling button with checkbox
    - introduce: testing interactions that affect DOM, unit testing functions functions
## Build up more complex functionality and tests 
## Second app: design and order and ice cream sundae
    - testing more complex user interactions, interactions between components
    - mocking server responses with Mock Service Worker
    - Testing async functionality

## A note about React Explanations
    - folks come to this course at many levels
    - optional lectures explaining React syntax and decisions
    - Feel free to skip!

## Expect Method
Jest global, starts the assertion

## Argument
Subject of the assertion

## Matcher
Type of assertion
this matcher comes from Jest-DOM

## Mocking CSS Modules
https://jestjs.io/docs/webpack#mocking-css-modules

Testing styles from imported CSS modules
Testing Styles from Imported CSS Modules
A common question about testing styles is "why doesn't .toHaveStyle() work with classes from my imported CSS module?"

Mocking CSS modules
In the case of create-react-app applications -- or applications that have otherwise mocked css modules for Jest -- CSS module imports are simply ignored for Jest test.

Cosmetic Styles vs. Functional Styles
In many cases, the classes are merely cosmetic and won't affect functional tests (such as placement of the element on the page). In these cases, mocking the CSS modules works fine. However, sometimes classes do affect function. For example, say you have a CSS module that uses a hidden class, which results in display: none when interpreted. Without adding a Jest transformer to interpret the CSS, Testing Library will not know that hidden class would result in display: none. Tests around element visibility that rely on this class will fail.

Transformers
For styles to be interpreted in tests, you need a transformer to, well, transform the CSS classes into styles. Here are a couple options:

https://www.npmjs.com/package/jest-transform-css

https://www.npmjs.com/package/jest-css-modules-transform

The latter has more downloads per week, but the former seems to be more actively maintained.

Testing for Class Name
Another possibility would be to check explicitly for the class name (hidden in this example), using toHaveClass. This would be simpler, but farther from the actual user experience (this is testing implementation details, rather than how the user sees the page). It's always a balance, and I think either this approach or transforming the CSS would be defensible.

Questions? Please ask in the Q&A!