import { html } from 'lit';

export default {
  title: 'Mega Puzzle/Button',
  component: 'Button',
  id: 'btn',
  args: { label: "I'm an anchor tag", href: "https://reeceneedham.com", primaryColour: false, openInNewTab: false}
};

export const anchor = {
  args: { label: "I'm an anchor tag", href: "https://reeceneedham.com", openInNewTab: false, primaryColour: false},
  render: ({label, href, openInNewTab, primaryColour}) => {

    return openInNewTab ? 
    html`<a class="${primaryColour ? `primary`:``}" href="${href}" target="_blank" rel="noopener">${label}</a>`:
    html`<a class="${primaryColour ? `primary`:``}" href="${href}">${label}</a>`;
  }
};

export const button = {
  args: { label: "I'm a button!", primaryColour: true},
  render: ({label, primaryColour}) => {
    return html`<button class="${primaryColour ? `primary`:``}">${label}</button>`
  }
};
