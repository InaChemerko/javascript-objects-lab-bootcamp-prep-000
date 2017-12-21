var recipes = {
  eggs: '3',
  flour: '1',
  sugar: '0.5',
  solt: 'by taste'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {key: [value]});
 return newObject;
   }

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  
}



