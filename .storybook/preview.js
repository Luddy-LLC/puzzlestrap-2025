/** @type { import('@storybook/web-components').Preview } */
import '../components.js';

const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' }
      ],
      default: 'Dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default preview;
