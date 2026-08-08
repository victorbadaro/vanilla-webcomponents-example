class CustomButton extends HTMLElement {
  constructor() {
    super();

    const shadowDOM = this.attachShadow({ mode: 'open' });
    const customButtonStyles = document.createElement('style');
    const customButton = document.createElement('button');

    customButtonStyles.innerHTML = `
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
    `;

    customButton.type = 'button';
    customButton.textContent = 'This is a Custom Button!';
    customButton.addEventListener('click', function () {
      console.log('The Custom Button element was clicked! 🙌');
    });

    shadowDOM.appendChild(customButtonStyles);
    shadowDOM.appendChild(customButton);
  }
}

customElements.define('wc-custom-button', CustomButton);