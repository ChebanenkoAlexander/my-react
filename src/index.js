import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const text = 'Знакомство с реактом, 122 урок.';
const elem = (
<div>
<h2 className='text'> Текст: {text} </h2>
<input type="text" />
<label htmlFor=''></label>
<button tabIndex="0">Click</button>
</div>
)
ReactDOM.render(
  elem,
  document.getElementById('root')
);
