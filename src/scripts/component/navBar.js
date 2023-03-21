import { LitElement, html, css } from 'lit-element'

class NavBar extends LitElement {
  static styles = css`
  * {
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  :host {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: #222831;
  }
  :host > a > h1 {
    font-size: 40px;
    color: #00ADB5;
    font-family: Brush Script MT, cursive;
  }
  @media (min-width: 768px) {
    :host > ul {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    :host > ul {
      display: none;
    }
  }
  :host > ul > li {
    width: 100px;
    text-align: center;
  }
  :host > ul > li > a {
    color: white;
    min-width: 44px;
    min-height: 44px;
    width: 44px;
    height: 44px;
  }
  :host > ul > li > a:hover {
    color: #00ADB5;
  }
  `
  static properties = {
    name: { type: String }
  }

  constructor () {
    super()
    this.logo = 'Pangananku'
  }

  render () {
    return html`
    <a href="/" class="brand">
      <h1>${this.logo}</h1>
    </a>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Favorite</a></li>
        <li>
            <a href="https://github.com/thelastman112" target="_blank" rel="noopener">About Us</a>
        </li>
    </ul>
    `
  }
}
customElements.define('nav-bar', NavBar)
