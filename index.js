var recipes = {
  eggs: '3',
  flour: '1',
  sugar: '0.5',
  solt: 'by taste'
}

function updateObjectWithKeyAndValue(object, key, value) {
 var object1 = Object.assign({}, object, {key: [value]});
    return object1;
}




