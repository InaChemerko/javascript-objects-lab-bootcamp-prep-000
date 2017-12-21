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
  object[key] = value;
  return object;
}
 
function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, Object);
  delete newObject[key];
  return newObject;
}

