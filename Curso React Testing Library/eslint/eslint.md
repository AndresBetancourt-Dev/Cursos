# ESLint

- Popular linter for Javascript
- Linting keeps code style consistent
    - especially for multi-eng projects
- Also catches errors in code
    - using variable before defining
    - importing from nonexisting file
    - etc

Linter: analyses static text and marks syntax that break rules
Static: analyze code as written, not what happens when code is run

Liting vs Formatter

## Formatters

### Prettier

Formatters (like prettier) automatically format code (indents, spacing) 
    - example: space around curly braces

Before formatting
import {useEffect} from 'react';

After formatting
import { useEffect } from 'react';

Linters address format and style
    - example: preferred assertion method


expect(checkbox).toHaveAttribute(checked);
    expect(checkbox).toBeChecked();


## Plug-ins extend ESLint

Testing Library and jest-dom ESLint plugins
    - Enforce best practices

https://github.com/testing-library/eslint-plugin-testing-library

https://github.com/testing-library/eslint-plugin-jest-dom