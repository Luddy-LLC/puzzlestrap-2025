import { html } from 'lit';

/**
 * An alert box to notify the user of a result of their action.
 * ## Usage Notes
 * Be careful when using alert. `info` alerts are "respectful" to screen readers and can be used for purely informational contexts. `success`,`warning`, and `failure` alerts use `role="alert"` and, when visible, will interupt a screen reader and jump the user to the alert. These should only be used when necessary to inform the user of a successful or failed, time-sensitive action. [Overuse of this role could be harmful. Learn more at MDN.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
 */

export default {
  title: 'Mega Puzzle/Alert',
  component: 'Alert',
  id: 'alert',
  argTypes: {
    type: { control: { type: "select"}, options: ["info", "success", "warning", "failure"] }
  },
  args: { label: "Here's some info", type: "info"},
  render: ({label, type}) => {
    return html`<mp-alert label="${label}" type="${type}"></mp-alert>`
  }
};

export const success = {args: { label: "Wahoo! You did it.", type: "success"}};
export const warning = {args: { label: "Did you mean to do that?", type: "warning"}};
export const failure = {args: { label: "Girl, go back and study suh'more.", type: "failure"}};
export const info = {args: { label: "Here's some info", type: "info"}};
