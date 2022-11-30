# Curso Templates JS

<template/>: The Content Template element
The <template/> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.

Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the <template/> element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

Content categories Metadata content, flow content, phrasing content, script-supporting element
Permitted content No restrictions
Tag omission None, both the starting and ending tag are mandatory.
Permitted parents Any element that accepts metadata content, phrasing content, or script-supporting elements. Also allowed as a child of a <colgroup/> element that does not have a span attribute.
Implicit ARIA role No corresponding role
Permitted ARIA roles No role permitted
DOM interface HTMLTemplateElement
Attributes
The only standard attributes that the template element supports are the global attributes.

In Chromium-based browsers, the template element also supports a non-standard shadowroot attribute, as part of an experimental "Declarative Shadow DOM" proposal. In those browsers, a template element with the shadowroot attribute is detected by the HTML parser and immediately applied as the shadow root of its parent element.

Also, the HTMLTemplateElement has a standard content property (without a corresponding content/markup attribute), which is a read-only DocumentFragment containing the DOM subtree which the template represents. Note that directly using the value of the content property could lead to unexpected behavior; for details, see the Avoiding DocumentFragment pitfall section below.

Examples
First we start with the HTML portion of the example.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>
```

```html
<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

First, we have a table into which we will later insert content using JavaScript code. Then comes the template, which describes the structure of an HTML fragment representing a single table row.

Now that the table has been created and the template defined, we use JavaScript to insert rows into the table, with each row being constructed using the template as its basis.

```js
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {
// Instantiate the table with the existing HTML tbody
// and the row with the template
const tbody = document.querySelector("tbody");
const template = document.querySelector('#productrow');

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";

    tbody.appendChild(clone);

    // Clone the new row and insert it into the table
    const clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tbody.appendChild(clone2);

} else {
// Find another way to add the rows to the table because
// the HTML template element is not supported.
}
```

The result is the original HTML table, with two new rows appended to it via JavaScript:

Avoiding DocumentFragment pitfall
A DocumentFragment is not a valid target for various events, as such it is often preferable to clone or refer to the elements within it.

Consider the following HTML and JavaScript:

HTML
```html
<div id="container"></div>

<template id="template">
  <div>Click me</div>
</template>
```

JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Clicked this div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.firstElementChild.cloneNode(true);
secondClone.addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

firstClone is a DocumentFragment instance, so while it gets appended inside the container as expected, clicking on it does not trigger the click event. secondClone is an HTMLDivElement instance, clicking on it works as one would expect.
