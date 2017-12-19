import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

ReactDOM.render(
  (<div>
    <div className="book">
      <h2>Red Rising</h2>
      <h3>Author: Pierce Brown</h3>
      <img
        alt="Red Rising"
        src="https://images-na.ssl-images-amazon.com/images/I/51o6CzgXwLL._SX331_BO1,204,203,200_.jpg" />
    </div>
    <div className="book">
      <h2>Golden Son</h2>
      <h3>Author: Pierce Brown</h3>
      <img
        alt="Golden Son"
        src="https://images-na.ssl-images-amazon.com/images/I/51iGvbVBQfL.jpg" />
    </div>
    <div className="book">
      <h2>Morning Star</h2>
      <h3>Author: Pierce Brown</h3>
      <img
        alt="Morning Star"
        src="https://images-na.ssl-images-amazon.com/images/I/51wCZkVLyPL._SX335_BO1,204,203,200_.jpg" />
    </div>
  </div>),
  document.getElementById('app')
);
