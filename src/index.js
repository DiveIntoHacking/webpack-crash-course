import _ from 'lodash'
import './style.css'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei')
