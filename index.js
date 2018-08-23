var recipes = { key: "object"}

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes = Object.assign({}, object, { prop2: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj.keyr
  return object[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}