import {LitElement, html} from 'lit-element';

export class MyElement extends LitElement {
  // this does not work with renderRoot
  static get styles() {
    return;
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
  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }
  render() {
    return html`
      <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <h1>Hello, ${this.name}!</h1>
      <button class="my-element-button" @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-outline-success">
        Success <i class="fab fa-angellist"></i>
      </button>

      <!-- uses solid style -->
      <i class="fas fa-user"></i>
      <!-- uses regular style -->
      <i class="far fa-user"></i>

      <!--brand icon-->
      <i class="fab fa-github-square"></i>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('my-element', MyElement);
