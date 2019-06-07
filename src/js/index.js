import { getMessage } from './message';
import summModule from './arrow';
import '../styles/style.css';

console.log('Webpack working');

const text = getMessage(' bezyn4uk');

console.log(text + summModule(5, 6));

function selectTest(params) {
    return params;
}

console.log(selectTest(10));
