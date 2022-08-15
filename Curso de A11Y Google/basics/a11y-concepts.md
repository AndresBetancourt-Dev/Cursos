# Keyboard Navigation

- Basically some users may use our site with keyboard and if the experience it's not good that means our site
isn't accesible at all,

- We need to keep in my proper usage of links and when hidden use polyfills, inert attribute or a logic that allows they aren't
navigatable when not visible

# Focus

Directing keyboard events to a selected element
There's certain number of interactable elements

Reordering elements sometimes it's the solution to unbalanced keyboard navigation flows.

# Tabindex

It's an antipattern, will bounce around like pinball
It's kind of a bad practice if only used in a single anchor or interactable elements

5 > 1 > 0

Native controls it's always better than predefined controls

# Roving tabindex