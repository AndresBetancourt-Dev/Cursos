# Aria Authoring practices guide

Properties doesn't change too much
States are expected to be more dynamic

Role > Supported States and Properties

role="radiogroup"
requires own elemens role="radio"

aria-activedescendant Leave focus in the descendants
<dash-radio-group role="radiogroup" tabindex="0" aria-activedescendante="rb1">
    <dash-radio-button id="rb1" role="radio" aria-checked="true">
    <dash-radio-button id="rb2" role="radio" aria-checked="false">
    <dash-radio-button id="rb3" role="radio" aria-checked="false">
</dash-radio-group>