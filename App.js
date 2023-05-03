import react from 'react';
import reactDom from 'react-dom/client';

let header = react.createElement(
  'h1',
  {
    id: 'header',
  },
  'Hello namaste React'
);

let header2 = react.createElement(
  'h2',
  {
    id: 'header2',
  },
  'header2'
);

let container = react.createElement(
  'div',
  {
    id: 'div',
  },
  [header, header2]
);

let root = reactDom.createRoot(document.getElementById('root'));

root.render(container);
