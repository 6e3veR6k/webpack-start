import { getMessage } from './message';
import summModule from './arrow';
import '../assets/svg/jupiter-planet.svg';
import '../assets/svg/003-book.svg';
import listItemTmpl from '../list-item.hbs';
import '../styles/style.css';

console.log('Webpack working');

console.log(summModule(5, 6));
console.log(getMessage(' bezyn4uk'));

listItemTmpl('text');

function selectTest(params) {
  return params;
}

console.log(selectTest(10));

const container = document.querySelector('.container');
console.log(container);
container.insertAdjacentHTML('afterbegin', '<h1> hello from index.js </h1>');
