import { html } from 'lit';
import '../components'
import './nav.css';

export const Nav = ({ label, solveable }) => {
    return html`<mp-nav title="${label}" is-solveable="${solveable}"></mp-nav>`;
};