var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  object.assign ({}, {prop2: 2})
  return (object)
}

