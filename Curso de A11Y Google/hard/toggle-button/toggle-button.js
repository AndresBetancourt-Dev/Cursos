const template = document.createElement('template');


template.innerHTML = `
    <style>
    :host{
        display: inline-block;
        border: 1px solid blac;
        padding : 3px;
    }
    
    :host([pressed]){
        background: lightgreen;
    }

    :host([disabled]){
        background: red;
    }
    </style>
    <slot></slot>
`;

class ToggleButton extends HTMLElement {
    static get observedAttributes(){
        return ['pressed','disabled']
    }

    constructor(){
        super();
        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        if(!this.hasAttribute('role')){
            this.setAttribute('role','button');
        }

        if(!this.hasAttribute('tabindex')){
            this.setAttribute('tabindex','0');
        }

        if(!this.hasAttribute('aria-pressed')){
            this.setAttribute('aria-pressed','false');
        }

        this.addEventListener('click',this._onClick);
        this.addEventListener('keydown',this._onKeyDown);
    }

    set pressed(value){
        const isPressed = Boolean(value);
        if(isPressed){
            this.setAttribute('pressed','true');
        }else{
            this.removeAttribute('pressed');
        }
    }

    get pressed(){
        return this.hasAttribute('pressed');
    }

    set disabled(value){
        const isDisabled = Boolean(value);
        if(isDisabled){
            this.setAttribute('disabled','true');
        }else{
            this.removeAttribute('disabled');
        }
    }

    get disabled(){
        return this.hasAttribute('disabled');
    }

    attributeChangeCallback(name, oldValue, newValue){
        const hasValue = newValue !== null;
        this.setAttribute(`aria-${name}`, hasValue);
    }

    _onClick(){
        this._togglePressed();
    }

    _onKeyDown(event){
        if(event.altKey){
            return;
        }

        switch(event.keyCode){
            case KEYCODE.ENTER:
            case KEYCODE.SPACE:
                event.preventDefault();
                this._togglePressed();
                break;
            default:
                break;
        }
    }

    _togglePressed(){
        this.pressed = !this.pressed;
    }
}

window.customElements.define('toggle-button',ToggleButton);