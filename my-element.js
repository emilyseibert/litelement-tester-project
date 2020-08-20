/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';
import '@lit-element-bootstrap/button/bs-button.js';
import {DefaultThemeCss} from '@lit-element-bootstrap/theme/default-theme-css.js';
import {BsButtonPrimaryCss} from '@lit-element-bootstrap/button/css/bs-button-primary.css.js';
import {BsButtonSecondaryCss} from '@lit-element-bootstrap/button/css/bs-button-secondary.css.js';
import Fontawesome from 'lit-fontawesome';

// importing styles with webpack & litelement: https://github.com/drdreo/lit-scss-loader

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  // static get styles() {
  //   return
  // }
  static get styles() {
    return [
      Fontawesome,
      DefaultThemeCss,
      BsButtonPrimaryCss,
      BsButtonSecondaryCss,
      css`
        :host {
          display: block;
          border: solid 1px gray;
          background-color: #eee;
          padding: 16px;
          max-width: 800px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <bs-button context="primary">Primary</bs-button>
      <bs-button context="secondary">Secondary</bs-button>

      <h1>Hello, ${this.name}!</h1>
      <bs-button context="secondary" @click=${this._onClick}>
        <i class="fas fa-fw fa-calculator"></i> Click Count:
        ${this.count}</bs-button
      >

      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('my-element', MyElement);
