function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
