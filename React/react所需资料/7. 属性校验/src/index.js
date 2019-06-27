import React from 'react';
import { render } from 'react-dom';
import Person from './components/Person';


const person = {
  name: '杉杉',
  age: 18,
  sex: '女',
  figure: {
    weight: 95,
    height: 165
  },
  hobby: ['读书', '看报'],
  salary: 100
}

render(<Person {...person}></Person>, document.getElementById('root'))