import { Nav } from './Nav';

export default {
    title: 'Mega Puzzle/Nav',
    tags: ['autodocs'],
    render: (args) => Nav(args),
    argTypes: {},
    args: {}
}

export const solveable = {
    args: { 
        label: 'Solveable!',
        solveable: true
    },
  };
  
  export const notSolveable = {
    args: { 
      label: 'Not Solveable :(',
      solveable: false
    },
  };