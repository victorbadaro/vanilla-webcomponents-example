class CustomButton extends HTMLElement {
  constructor() {
    super();

    const shadowDOM = this.attachShadow({ mode: 'open' });

    shadowDOM.innerHTML = `
      <style>
        button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background-color: #9ae600;
          color: #192e03;
          transition: background-color 200ms, transform 200ms;
        }

        button:hover {
          background-color: #7ccf00;
        }

        button:active {
          transform: scale(0.98);
        }
      </style>

      <button type="button">This is a Custom Button!</button>
    `;
  }
}

customElements.define('wc-custom-button', CustomButton);