import { html } from 'lit';

export default {
  title: 'Mega Puzzle/Offcanvas',
  component: 'Offcanvas',
  id: 'oc',
  args: { offcanvas_id: "m", title: "Example modal", icon: "mp-sparkle", footer: "This is a footer"},
  argTypes: {
    offcanvas_id: { control: { type: "text"} },
    title: { control: { type: "text"} },
    icon: { control: { type: "text"} },
    footer: { control: { type: "text"} }
  }, render: ({offcanvas_id, title, icon, footer}) => {
    return html`
    <button popovertarget="${offcanvas_id}">Open Custom Offcanvas</button>
      <mp-offcanvas oc-id="${offcanvas_id}" title="${title}" icon="${icon}" footer="${footer}"
        full-height="">
      </mp-offcanvas>`
  }
};

export const hints = {render: () => {return html`
  <button popovertarget="hints-menu">Hints</button>
  <mp-hints></mp-hints>`}};
export const archive = {render: () => {return html`
  <button popovertarget="archive-menu">Archive</button>
  <mp-archive></mp-archive>`}};
export const solve = {render: () => {return  html`
  <button popovertarget="solve-menu">Solve</button>
  <mp-solve></mp-solve>`}};
export const music = {render: () => {return html`
  <button popovertarget="music-menu">Music</button>
  <mp-music></mp-music>`}};
