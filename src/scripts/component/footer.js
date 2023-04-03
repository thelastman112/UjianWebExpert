import { LitElement, html, css } from 'lit-element'

class Footer extends LitElement {
  static styles = css`
    :host {
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        color:#00ADB5;
        overflow: hidden;
    }
    `
  render () {
    return html`
    <footer id="footer">
        <h4 tabindex="0">Copyright &copy; 2023 - Pangananku</h4>
    </footer>
    `
  }
}
customElements.define('footer-comp', Footer)
