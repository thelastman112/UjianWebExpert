import { LitElement, html, css } from 'lit-element'
import './buttonBars'

class NavBar extends LitElement {
  static styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  :host {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    background-color: #222831;
    position: relative;
    overflow-y: hidden;
  }
  :host > a {
    display: flex;
  }
  :host > a > h1 {
    font-size: 40px;
    color: #00ADB5;
    font-family: Brush Script MT, cursive;
    align-self: center;
  }
  :host > ul > li {
    width: 100px;
    text-align: center;
    align-self: center;
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
  @media (max-width: 768px) {
    :host {
      height: 50px;
    }
    :host > a {
      display: block;
    }
    :host > ul {
      position: absolute;
      justify-content: center;
      width: 100%;
      opacity: 0%;
      height: 50px;
      margin: 0;
      display: none;
    }
  }
  @media (min-width: 768px) {
    :host > ul {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  
  `

  constructor () {
    super()
    this.open = false
    this.logo = 'Pangananku'
    this.brand = `
      <a href="/" class="brand">
        <h1>${this.logo}</h1>
      </a>
    `
    this.ul = document.createElement('ul')
    this.ul.innerHTML = `
      <li><a href="/">Home</a></li>
      <li><a href="#">Favorite</a></li>
      <li>
          <a href="https://github.com/thelastman112" target="_blank" rel="noopener">About Us</a>
      </li>
    `
  }

  static properties () {
    return {
      open: {
        type: Boolean,
        reflect: true,
        value: false
      }
    }
  }

  connectedCallback () {
    super.connectedCallback()
    this.nextelement = this.parentElement.querySelectorAll('nav')[1]
    console.log(this.nextelement)
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    this.removeEventListener('click', this.toggle)
  }

  toggle () {
    this.open = !this.open
    const ul = this.shadowRoot.querySelector('ul')
    const navbar = this.shadowRoot.getRootNode().host
    if (this.open) {
      console.log('open')
      ul.style.display = 'flex'
      ul.animate([{
        opacity: 0,
        transform: 'translateY(0%)'
      }, {
        opacity: 1,
        transform: 'translateY(100%)'
      }], {
        duration: 400,
        fill: 'forwards'
      })
      navbar.animate([
        { height: '50px' },
        { height: '100px' }
      ], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards'
      })
    } else {
      console.log('closed')
      ul.animate([{
        opacity: 1,
        transform: 'translateY(100%)'
      }, {
        opacity: 0,
        transform: 'translateY(0%)'
      }], {
        duration: 400,
        fill: 'forwards'
      })
      navbar.animate([
        { height: '100px' },
        { height: '50px' }
      ], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards'
      })
      setTimeout(() => {
        ul.style.display = 'none'
      }, 400)
    }
  }

  render () {
    return html`
      <a href="/" class="brand">
        <h1>${this.logo}</h1>
      </a>
      <button-bars @click="${this.toggle}"></button-bars>
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
