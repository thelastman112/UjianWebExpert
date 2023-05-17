import { LitElement, html, css } from 'lit-element'

class Loading extends LitElement {
	static styles = css`
	:host {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #222831;
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.load {
		width: 200px;
		height: 200px;
		border: 32px solid #f3f3f3;
		border-radius: 50%;
		border-top: 32px solid #3498db;
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	`
	render () {
		return html`
			<div class="load"></div>
		`
	}
}
customElements.define('loading-layer', Loading)

export default Loading
