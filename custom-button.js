class CustomButton extends HTMLElement {
  constructor() {
    super();

    const shadowDOM = this.attachShadow({ mode: 'open' });

    shadowDOM.innerHTML = `
      <button type="button">This is a Custom Button!</button>
    `;
  }
}

customElements.define('custom-button', CustomButton);