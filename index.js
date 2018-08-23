var recipes = { key: "object"}

function updateObjectWithKeyAndValue(object, key, value) {
  var glob = Object.assign(object, { key : value})
  return glob
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj.key
  return object[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}