function nameMenuItem(name) {
  return (`Delicious ${name}`)
}
function createMenuItem(name, price, type){
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem 

}


function addIngredients(newIngredients, ingredients) {
  if(!ingredients.includes(newIngredients))
  return ingredients.push(newIngredients)
}

function formatPrice(price, type) {
  formattedPrice = '$' + price
  return formattedPrice
}

function decreasePrice(price) {
  decreasedPrice = price - (price*.10)
  return decreasedPrice
}


function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe

}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}