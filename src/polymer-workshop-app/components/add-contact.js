import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './contact-inputs.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 */
class AddContact extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>

    <contact-inputs id="contactInputs" label-name="[[_labelName]]" label-phone="[[_labelPhone]]">
    </contact-inputs>
    
    <paper-button raised="" on-click="addContact"><iron-icon icon="account-circle"></iron-icon>Add contact</paper-button>
    <paper-button raised="" on-click="removeList"><iron-icon icon="delete-forever"></iron-icon>Clear contact list</paper-button>
`;
  }

  static get is() { return 'add-contact'; }
  static get properties() {
    return {
      _labelName: {
        type: String,
        value: 'Contact name'
      },
      _labelPhone: {
        type: String,
        value: 'Contact phone number'
      }
    };
  }

  addContact() {
    let contactList = JSON.parse(localStorage.getItem('contactlist')) || [];
    let contactInputsObject = this.$.contactInputs;
    
    if(contactInputsObject.$.contactName.value && contactInputsObject.$.contactPhone.value) {
      contactList.push({
        name: contactInputsObject.$.contactName.value, 
        phone: contactInputsObject.$.contactPhone.value
      });

      //Set contactlist in localstorage
      localStorage.setItem('contactlist', JSON.stringify(contactList));
      
      //Fire event when contact is added
      this.dispatchEvent(new CustomEvent('newContactAdded', {bubble: true, composed : true}));
    }
  }

  removeList() {
    // Clear localstorage
    localStorage.clear();
    //Fire clear event when localstorage is empty
    this.dispatchEvent(new CustomEvent('clearList', {bubble: true, composed : true}));
  }
}

customElements.define(AddContact.is, AddContact);
