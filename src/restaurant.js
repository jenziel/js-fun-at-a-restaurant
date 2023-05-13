function createRestaurant(nameOfRestaurant){
 var restaurant = {
    menus:{breakfast : [], lunch: [], dinner: []}
 }
 
 restaurant.name = nameOfRestaurant

 console.log(restaurant)
 console.log(restaurant.menus)
 return restaurant
 console.log(restaurant)
 }
 


function addMenuItem(){

}

function removeMenuItem(){

}
function checkForFood(){

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}