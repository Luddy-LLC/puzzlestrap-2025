import { html } from 'lit';

export default {
  title: 'Mega Puzzle/Input Field',
  component: 'Input',
  id: 'input',
  
  render: ({ label, fieldId, placeholder }) => html`<mp-input field-id="${fieldId}" label="${label}" placeholder="${placeholder}"></mp-input>` 
};

export const justAField = {
  args: { label: 'Email', fieldId: 'ea', placeholder: 'Enter your email address' },
};

export const exampleUsage = {
  args: { label: 'Email', fieldId: 'ea', placeholder: 'Enter your email address' },
  render: ({ label, fieldId, placeholder }) => html`
  <form action="">
    <mp-input field-id="${fieldId}" label="${label}" placeholder="${placeholder}"></mp-input>
    <button class="primary" type="submit">Check Answer</button>
</form>` 
}


