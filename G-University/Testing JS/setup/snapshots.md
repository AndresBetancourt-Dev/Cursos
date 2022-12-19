# What is Snapshot testing?

- Snapshots allows to keep a check on unexpected changes in UI components. A Snapshot test verifies that a piece of functionality works the same as it did when the snapshot was created

- Snapshot testing is a feature of JEst that allows you to test Javascripts objects

- A snapshot is a state of an UI component at a given time. It is saved as reference to compare against future snapshot of the same component:

## When to write snapshot tests

- If a component is not updated often
- If a component is not too complex
- If it is easy to see what you are actually testing
