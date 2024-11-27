import { html } from 'lit';

export default {
  title: 'Mega Puzzle/Input Field',
  component: 'Input',
  id: 'input',
  argTypes: {
    type: { control: { type: "select"}, options: ["text", "email", "password", "tel", "url"] },
    autocomplete: { control: { type: "select"}, options: ["off","given-name", "username", "email", "organization"] }
  },
  render: ({ label, fieldId, placeholder, type, autocomplete }) => html`
  <div class="form-group">
    <input class="mp-input" id="${fieldId}" placeholder="${placeholder}" name="${fieldId}" type="${type}" autocomplete="${autocomplete}"  required="required">
    <label for="${fieldId}">${label}</label>
</div>` 
};

export const justAField = {
  args: { label: 'Email', fieldId: 'ea', placeholder: 'Enter your email address', type: 'email', autocomplete: 'email' },
};

export const exampleUsage = {
  args: { label: 'First Name', fieldId: 'fn', placeholder: 'Enter your first name', type: 'text', autocomplete: 'given-name' },
  render: ({ label, fieldId, placeholder, type, autocomplete }) => html`
  <form onsubmit="">
    <div class="form-group">
      <input class="mp-input" id="${fieldId}" placeholder="${placeholder}" name="${fieldId}" type="${type}" autocomplete="${autocomplete}" required="required">
      <label for="${fieldId}">${label}</label>
    </div>
    <button class="primary" type="submit">Check Answer</button>
</form>` 
}


