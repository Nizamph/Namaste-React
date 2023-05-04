import react from 'react';
import reactDom from 'react-dom/client';

// let container = react.createElement(
//   'div',
//   {
//     className: 'container',
//   },
//   [
//     react.createElement(
//       'div',
//       {
//         key: 'div1',
//         className: 'shield',
//       },
//       [
//         react.createElement(
//           'h1',
//           {
//             key: 'h1',
//             className: 'title',
//           },
//           'header1'
//         ),
//         react.createElement(
//           'h1',
//           {
//             key: 'h2',
//             className: 'title',
//           },
//           'header2'
//         ),
//         react.createElement(
//           'h1',
//           {
//             key: 'h3',
//             className: 'title',
//           },
//           'header3'
//         ),
//       ]
//     ),
//   ]
// );

//react element with JSX

// let element = (
//   <div>
//     <div>
//       <h1>Heading1</h1>
//       <h2>Heading2</h2>
//       <h3>Heading3</h3>
//     </div>
//   </div>
// );

//functional component with JSX

let Title = () => {
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
};

let Element = () => (
  <div
    id='container'
    className='HeadingContainer'>
    <Title />
    <div key='div1'>
      <h1 key='h1'>Heading1</h1>
      <h2 key='h2'>Heading2</h2>
      <h3 key='h3'>Heading3</h3>
      <p key='p'>Heading3</p>
    </div>
  </div>
);

let root = reactDom.createRoot(document.getElementById('root'));

root.render(<Element />);

const nextEl = document.createElement('h1');
nextEl.innerHTML = 'Normal Javascript is also possible in react';
const target = document.getElementById('new');
target.appendChild(nextEl);
