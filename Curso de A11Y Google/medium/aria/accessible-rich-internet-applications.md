# Accesible Rich Internet Applications (ARIA)
# Web Accesssibility Initiative

Specify attributes in elements which them alone doesn't have accessibility features
Or Add Semantics
Or Modify Semantics
Express more UI patterns
Extra Labels and Descriptions
Semantic Relationships

<!--Native checkbox-->
<label>
<input type="checkbox"/>
Receive promotional offers
</label>

checkbox
name: "Receive promotional offers"
state: checked

<!--Custom checkbox-->
<div class="checkbox checked" role="checkbox" aria-checked="true">
    Receive promotional offers
</div>

custom-checkbox
value: "Receive promotional offers"


<div class="checkbox checked" role="checkbox" aria-checked="true">
    Tim Tams
</div>
<div class="checkbox checked" role="checkbox" aria-checked="false">
    Mint Slices
</div>

## What it does
Modify the accessibility tree
Modify element appearance
Modify element behavior
Add focusability
Add keyboard event handling

<button role="switch" aria-checked="true" class="toggle">
Enable
</button>

<ul role="tree">
    <li role="treeitem" aria-expanded="true">Accessibility course</li>
    <li role="treeitem" aria-expanded="false">Introduction</li>
    <li role="treeitem" aria-expanded="false">Focus</li>
</ul>

<button id="controller" aria-controls="advanced-settings" aria-expanded="false">Settings</button>
<div id="advanced-settings">
    <label><input type="checkbox"> Offer to translate content</label>
    <label><input type="checkbox"> Send usage statistics and crash reports</label>
</div>

Live Updates

<div role="alert">Failed connecting...</div>