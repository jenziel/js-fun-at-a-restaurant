function createRestaurant(nameOfRestaurant){
 var restaurant = {
    menus:{breakfast: [], lunch: [], dinner: []}
 }
  restaurant.name = nameOfRestaurant

 return restaurant
 console.log(restaurant)
 }
 // iteration 1:
//  function addMenuItem(restaurant, newLunchItem){
//  restaurant.menus.lunch[0] = newLunchItem
//  return restaurant.menus[0]
// }

//  iteration 2:
// function addMenuItem(restaurant, newMenuItem) {
//   if (newMenuItem.type === "breakfast"){
//     restaurant.menus.breakfast.push(newMenuItem)
//     return restaurant.menus.breakfast
//   } else if (newMenuItem.type === "lunch") {
//     restaurant.menus.lunch.push(newMenuItem)
//     return restaurant.menus.lunch
//   } else if (newMenuItem.type === "dinner") {
//     restaurant.menus.dinner.push(newMenuItem)
//     return restaurant.menus.dinner
//   }
// }

// iteration 3:
function addMenuItem(restaurant, newMenuItem) {
  if (newMenuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(newMenuItem)){
    restaurant.menus.breakfast.push(newMenuItem)
    // return restaurant.menus.breakfast
  } else if (newMenuItem.type === "lunch" && !restaurant.menus.lunch.includes(newMenuItem)) {
    restaurant.menus.lunch.push(newMenuItem)
    // console.log()
    // return restaurant.menus.lunch
  } else if (newMenuItem.type === "dinner" && !restaurant.menus.dinner.includes(newMenuItem)) {
    restaurant.menus.dinner.push(newMenuItem)
    // return restaurant.menus.dinner
  }
  
}
  

function removeMenuItem(restaurant, existingMenuItem, whichMenu){
  var onMenu = false
  var itemToFind = existingMenuItem
  var error1 = `Sorry, we don't sell ${existingMenuItem}, try adding a new recipe!`
  var error2 =  `No one is eating our ${existingMenuItem} - it has been removed from the ${whichMenu} menu!`
  
  for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
    if (whichMenu === "breakfast") {
      if (restaurant.menus.breakfast[i].name !== existingMenuItem) {
      onMenu = false
      }  else {
          onMenu = true
          var foundIndex = restaurant.menus.breakfast.findIndex(el =>  el == itemToFind)
          restaurant.menus.breakfast.splice(foundIndex, 1)
          return error2
      }
    }
  }
  for (var i = 0; i < restaurant.menus.lunch.length; i++) {
    if (whichMenu === "lunch") {
        if (restaurant.menus.lunch[i].name !== existingMenuItem) {
        onMenu = false
        }  else {
          onMenu = true
          var foundIndex = restaurant.menus.lunch.findIndex(el =>  el == itemToFind)
          restaurant.menus.lunch.splice(foundIndex, 1)
          return error2
        }
      }
  }
  for (var i = 0; i < restaurant.menus.dinner.length; i++) {
    if (whichMenu === "dinner") {
        if (restaurant.menus.dinner[i].name !== existingMenuItem) {
        onMenu = false
        }  else {
          onMenu = true
          var foundIndex = restaurant.menus.dinner.findIndex(el =>  el == itemToFind)
          restaurant.menus.dinner.splice(foundIndex, 1)
          return error2
        }
      }
  }
  if (onMenu === false) {return error1} 
 
}


  //passes test 1-3
// if (!restaurant.menus.breakfast.includes(existingMenuItem) && !restaurant.menus.lunch.includes(existingMenuItem) && !restaurant.menus.dinner.includes(existingMenuItem )) {
// //   return error1} 
// function removeMenuItem(restaurant, existingMenuItem, whichMenu){
  
//   var error1 = `Sorry, we don't sell ${existingMenuItem}, try adding a new recipe!`
//   var error2 =  `No one is eating our ${existingMenuItem} - it has been removed from the ${whichMenu} menu!`
//   if(whichMenu === "breakfast") {
//     restaurant = restaurant.menus.breakfast;
//   }
//   if (whichMenu ==="lunch") {
//     restaurant = restaurant.menus.lunch
//   }
//   if (whichMenu ==="dinner" ) {
//     restaurant = restaurant.menus.dinner
//   } 
// var itemToFind = existingMenuItem
// var foundIndex = restaurant.findIndex(el =>  el == itemToFind)
// restaurant.splice(foundIndex, 1)
// return error2
// }

// //Passes iteration 1:
// function checkForFood(restaurant, foodItem) {
//   return `Yes, we're serving ${foodItem.name} today!`
// }

// // passes iteration 1 & 2: 
// function checkForFood(restaurant, foodItem) {
//   console.log("print out restaurant array: ", restaurant)
//   // for (var i = 0; i < restaurant.menus; i++)
//   if (restaurant.menus.breakfast.includes(foodItem) || restaurant.menus.lunch.includes(foodItem) || restaurant.menus.dinner.includes(foodItem)) {
//     return `Yes, we're serving ${foodItem.name} today!`
//   }
//  }

// passes all 4 tests: 
function checkForFood(restaurant, foodItem) {
  var unavailableResponse = `Sorry, we aren't serving ${foodItem.name} today.`
  var weHaveIt = false;
  for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
    if (restaurant.menus.breakfast[i] === foodItem){
      weHaveIt = true
      }
  }
  for (var i = 0; i < restaurant.menus.lunch.length; i++) {
    if (restaurant.menus.lunch[i] === foodItem) {
    weHaveIt = true
  }
  }
  for (var i = 0; i < restaurant.menus.dinner.length; i++) {
    if ( restaurant.menus.dinner[i] === foodItem)  {
      weHaveIt = true
    }
  }
    if (weHaveIt === false){
      return unavailableResponse
    } else return`Yes, we're serving ${foodItem.name} today!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood,
}