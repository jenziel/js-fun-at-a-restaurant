function createRestaurant(nameOfRestaurant){
 var restaurant = {
    menus:{breakfast: [], lunch: [], dinner: []}
 }
  restaurant.name = nameOfRestaurant

 console.log(restaurant)
 console.log(restaurant.menus)
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
    return restaurant.menus.breakfast
  } else if (newMenuItem.type === "lunch" && !restaurant.menus.lunch.includes(newMenuItem)) {
    restaurant.menus.lunch.push(newMenuItem)
    return restaurant.menus.lunch
  } else if (newMenuItem.type === "dinner" && !restaurant.menus.dinner.includes(newMenuItem)) {
    restaurant.menus.dinner.push(newMenuItem)
    return restaurant.menus.dinner
  }
}
  

 
 
function removeMenuItem(restaurant, existingMenuItem, whichMenu){
  console.log("restaurant: ", restaurant)

  if(whichMenu === "breakfast") {
    restaurant = restaurant.menus.breakfast
  } else if (whichMenu ==="lunch") {
    restaurant = restaurant.menus.lunch
  } else if (whichMenu ==="dinner") {
    restaurant = restaurant.menus.dinner
  }
var itemToFind = existingMenuItem
var foundIndex = restaurant.findIndex(el =>  el == itemToFind)
restaurant.splice(foundIndex, 1)
restaurant = 
console.log("restaurant ", restaurant)
return  `No one is eating our ${existingMenuItem} - it has been removed from the ${whichMenu} menu!`
}


function checkForFood(){

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}
