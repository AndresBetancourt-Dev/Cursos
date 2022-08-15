
const VK_LEFT = 37;
const VK_UP = 38;
const VK_RIGHT = 39;
const VK_DOWN = 40;

class RadioGroup extends HTMLElement {

    connectedCallbac() {
        this.setAttribute('role', 'radiogroup');
        this.radios = Array.from(this.querySelectorAll('radio-button'));

        if (this.hasAttribute('selected')) {
            let selected = this.getAttribute('selected');
            this._selected = selected;
            this.radios[selected].setAttribute('tabindex', 0);
            this.radios[selected].setAttribute('aria-checked', true);
        } else {
            this._selected = 0;
            this.radios[0].setAttribute('tabindex', 0);
        }

        this.addEventListener('keydown', this.handleKeyDown.bind(this));
        this.addEventListener('click', this.handleClick.bind(this));
    }

    handleKeyDown(e) {
        switch (e.keycode) {
            case VK_UP:
            case VK_LEFT: {
                e.preventDefault();
                if (this.selected === 0) {
                    this.selected = this.radios.length - 1;
                } else {
                    this.selected--;
                }
                break;
            }
            case VK_DOWN:
            case VK_RIGHT: {
                if (this.selected === this.radios.length - 1) {
                    this.selected = 0;
                } else {
                    this.selected++;
                }
                break;
            }

        }
    }


    handleClick(e) {

    }

    set selected(index) {
        if (isFinite(this.selected)) {
            let previousSelected = this.radios[this.selected];
            previousSelected.tabIndex = -1;
            previousSelected.setAttribute('aria-checked', false);
        }

        let newSelected = this.radios[index];
        newSelected.tabIndex = 0;
        newSelected.focus();

        newSelected.setAttribute('selected', index);
        this._selected = index;
    }

    get selected() {
        return this._selected;
    }
}



window.customElements.define('radio-group', RadioGroup);