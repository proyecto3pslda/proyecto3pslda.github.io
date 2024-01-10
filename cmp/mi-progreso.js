class MiProgeso
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p><progress max="100">
        Cargando…
      </progress></p>`;
    
  }
}

customElements.define(
  "mi-progreso", MiProgeso);
