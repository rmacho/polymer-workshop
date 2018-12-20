import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-behavior/paper-dialog-behavior.js';
import '@polymer/neon-animation/neon-animatable.js';
import './edit-contact.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * @customElement
 * @polymer
 */
class ShowContactList extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
      h2 {
          margin: 20px 15px;
      }
    </style>
    <template is="dom-if" if="[[list]]">
        <h2>List of contacts</h2>
    </template>
    <iron-list items="[[list]]" as="listItem">
        <template>
            <paper-item>
                <paper-item-body two-line="">
                    <div>[[listItem.name]]</div>
                    <div secondary=""><iron-icon icon="settings-phone"></iron-icon> [[listItem.phone]]</div>
                </paper-item-body>
                <paper-button noink="" on-click="_showDialog">Edit</paper-button>
            </paper-item>
        </template>
    </iron-list>
    <paper-dialog id="editDialog" opened="[[opened]]">
            <edit-contact contact-object="[[_contactObj]]"></edit-contact>
            <paper-button noink="" on-click="_closeDialog"> Close </paper-button>
        </paper-dialog>
`;
  }

  static get is() { return 'show-contact-list'; }
  static get properties() {
    return {
      list: Array,
      _showChangeBlock: {
          type: Boolean,
          value: false
      },
      opened:{
          type: Boolean,
          value: false
      },
      _contactObj: Object
    };
  }

  _showDialog(e) {
      this.set('_contactObj', e.model.listItem);
      this.set('opened', true);
  }

  _closeDialog() {
      this.set('opened', false);
  }
}

customElements.define(ShowContactList.is, ShowContactList);
