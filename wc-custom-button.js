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
          background-color: var(--custom-button-background-color, #9ae600);
          color: var(--custom-button-text-color, #192e03);
          transition: background-color 200ms, transform 200ms;
        }

        button:hover {
          background-color: var(--custom-button-background-color-hover, #7ccf00);
        }

        button:active {
          transform: scale(0.98);
        }
      </style>

      <button type="button" id="custom-button">This is a Custom Button!</button>
    `;

    const customButton = shadowDOM.getElementById('custom-button');

    customButton.addEventListener('click', function () {
      console.log('The Custom Button element was clicked! 🙌');
    });
  }
}

customElements.define('wc-custom-button', CustomButton);