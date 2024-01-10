class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Sevilla Luna David Alexis
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
