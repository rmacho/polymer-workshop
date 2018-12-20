/* Use link import to include your components */
/* This is the start of you component, 
the dom-module id is the name of your component */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './components/add-contact.js';
import './components/show-contact-list.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 */
class PolymerWorkshopApp extends PolymerElement {
  static get template() {
    return html`
    <!-- CSS styling -->
    <style>
      :host {
        display: block;
      }
      #content {
        width: 400px;
        margin: 0 auto;
        padding: 10px;
      }
    </style>
    
    <div id="content">
      <h2>Hello [[prop1]]!</h2>
      
      <add-contact></add-contact>
      <show-contact-list id="showContactList" list="[[contactListItems]]"></show-contact-list>
    </div>
`;
  }

  static get is() { 
    return 'polymer-workshop-app'; 
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-workshop-app'
      },
      contactListItems: Array
    };
  }

  ready() {
    super.ready();
    this.addEventListener('newContactAdded', this.updateContactList);
    this.addEventListener('clearList', this.clearContactList);
    this.addEventListener('contactEdit', this.updateContactList);
  }

  updateContactList() {
    this.set('contactListItems', JSON.parse(localStorage.getItem('contactlist')) || [] );
    this.$.showContactList.opened=false;
  }

  clearContactList() {
    localStorage.removeItem('contactlist');
    this.set('contactListItems', [] );
  }
}

customElements.define(PolymerWorkshopApp.is, PolymerWorkshopApp);
