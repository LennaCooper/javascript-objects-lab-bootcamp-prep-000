var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, { [key]: value })
}
const recipes = { prop: 1 }
 
updateObjectWithKeyAndValue(recipe, 'prop2', 2)
