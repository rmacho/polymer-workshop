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
class EditContact extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>
    
    <contact-inputs id="editContactInputs" label-name="[[_labelName]]" label-phone="[[_labelPhone]]" prefilled-name="[[contactObject.name]]" prefilled-phone="[[contactObject.phone]]">
    </contact-inputs>

    <paper-button raised="" on-click="editContact"><iron-icon icon="account-circle"></iron-icon>Update contact</paper-button>
`;
  }

  static get is() { return 'edit-contact'; }
  static get properties() {
    return {
      _labelName: {
        type: String,
        value: 'Edit contact name'
      },
      _labelPhone: {
        type: String,
        value: 'Edit phone number'
      },
      contactObject: {
          type: Object, 
          value: {}
      }
    };
  }

  editContact() {
    let contactList = JSON.parse(localStorage.getItem('contactlist')) || [];
    let editContactInputsObject = this.$.editContactInputs;

    for(let contactObj of contactList) {
        if(contactObj.name === this.contactObject.name) {
            contactObj.name = editContactInputsObject.$.contactName.value,
            contactObj.phone = editContactInputsObject.$.contactPhone.value
        }
    }

    localStorage.setItem('contactlist', JSON.stringify(contactList));
    this.dispatchEvent(new CustomEvent('contactEdit', {bubble: true, composed : true}));
    
  }
}

customElements.define(EditContact.is, EditContact);
