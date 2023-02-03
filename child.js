import { LightningElement, api } from 'lwc';

export default class Input extends LightningElement {
    @api label; 
    @api helpText; 
    @api color;
    //used api decorator to make it available to parent component

    get labelStyles() {
        return `color: var(--lwc-color, ${this.color})`;
    }
 	 
    //have not set the value of helptext as it will be set from parent lwc
}
