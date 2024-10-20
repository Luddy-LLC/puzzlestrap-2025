import { addons } from '@storybook/manager-api';
import mptheme from './mptheme';

addons.setConfig({
  theme: mptheme,
});