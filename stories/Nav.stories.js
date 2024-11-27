import { html } from 'lit';

export default {
  title: 'Mega Puzzle/Navigation Bar',
  component: 'Nav',
  id: 'nav',
  render: ({ label, solveable }) => html`<mp-nav title="${label}" is-solveable="${solveable}"></mp-nav>` 
};

export const solveable = {
  args: { label: 'Solveable!', solveable: true },
};

export const notSolveable = {
  args: { label: 'Not Solveable :(', solveable: false }
};
