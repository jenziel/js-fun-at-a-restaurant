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



function addIngredients(item, ingredients) {
  var anyDuplicates = false;
  for (var i = 0; i < ingredients.length; i++) {
    if (item === ingredients[i]) {
      anyDuplicates = true;
    }
  }
  if (anyDuplicates === false) {
    ingredients.push(item);
  }
}

// var duplicates = [];
// function addIngredients(item, ingredients) {
//   for (var i = 0; i < ingredients.length; i++) {
//     if (item === ingredients[i]) {
//       duplicates.push(item);
//     } 
//   }
//   if (duplicates.length === 0) {
//     ingredients.push(item);
//   }
// }
// This code pushes any non-unique strings into an empty array.
// If the empty duplicates array has value in it, it will not push the item into the ingredients list.

// function addIngredients(newIngredients, ingredients) {
//   if(!ingredients.includes(newIngredients))
//   return ingredients.push(newIngredients)
// }
// I wanted to save this code to my file because I did not come up with it, but I wanted to save it as an example for future use.  
// Here we are checking if the ingredients array does NOT include the argument string, and pushing the string into the ingredients array
// only if the prev statement is true.  We use the .includes method which works by checking for a parameter in each index position of an array.  


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