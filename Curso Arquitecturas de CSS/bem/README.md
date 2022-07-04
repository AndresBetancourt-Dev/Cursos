# BEM

On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.

However, when it comes to larger, more complex projects, how you organize your code is the key to efficiency in at least these three ways: it affects how long it takes you to write code, how much of that code you’ll have to write and how much loading your browser will have to do. This becomes especially important when you’re working with teams of themers, and when high performance is essential.

## Methodologies

There are plenty of methodologies out there aiming to reduce the CSS footprint, organize cooperation among programmers and maintain large CSS codebases. This is obvious in large projects like Twitter, Facebook and Github, but other projects often grow into some “Huge CSS file” state pretty quickly.

### OOCSS
Separating container and content with CSS “objects”
### SMACSS
Style-guide to write your CSS with five categories for CSS rules
5 Categories for CSS Rules
### SUITCSS
Structured class names and meaningful hyphens
### Atomic
Breaking down styles into atomic, or indivisible, pieces

## Why BEM over the others?
No matter what methodology you choose to use in your projects, you will benefit from the advantages of more structured CSS and UI. Some styles are less strict and more flexible, while others are easier to understand and adapt in a team.

The reason I choose BEM over other methodologies comes down to this: it is less confusing than the other methods (i.e. SMACSS) but still provides us the good architecture we want (i.e. OOCSS) and with a recognizable terminology.

Mark McDonnell, Maintainable CSS with BEM

## Blocks, Elements and Modifiers
You will not be surprised to hear that BEM is an abbreviation of the key elements of the methodology — Block, Element and Modifier. BEM’s strict naming rules can be found here.

### Block
Standalone entity that is meaningful on its own.

### Element
A part of a block that has no standalone meaning and is semantically tied to its block.

### Modifier
A flag on a block or element. Use them to change appearance or behavior.

## Under the hood
Let’s look how one particular element on a page can be implemented in BEM. We will take button from GitHub:

We can have a normal button for usual cases, and two more states for different ones. Because we style blocks by class selectors with BEM, we can implement them using any tags we want (button, a or even div). The naming rules tell us to use block--modifier-value syntax.

## Benefits
### Modularity
Block styles are never dependent on other elements on a page, so you will never experience problems from cascading.

You also get the ability to transfer blocks from your finished projects to new ones.

### Reusability
Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code that you will have to maintain.

With a set of style guidelines in place, you can build a library of blocks, making your CSS super effective.

### Structure
BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.