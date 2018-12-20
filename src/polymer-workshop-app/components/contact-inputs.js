import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 */
class ContactInputs extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>
    
    <paper-input id="contactName" label="[[labelName]]" value="[[prefilledName]]"></paper-input>
    <paper-input id="contactPhone" label="[[labelPhone]]" value="[[prefilledPhone]]" auto-validate="" pattern="^[0-9]*\$" error-message="Numbers only!">
    </paper-input>
`;
  }

  static get is() { return 'contact-inputs'; }
  static get properties() {
    return {
      labelName: String,
      labelPhone: String,
      prefilledName: String,
      prefilledPhone: String
    };
  }
}

customElements.define(ContactInputs.is, ContactInputs);
