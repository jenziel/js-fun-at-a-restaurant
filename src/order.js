function takeOrder(order1, deliveryOrders) {
  if(deliveryOrders.length < 3)
  return  deliveryOrders.push(order1)
  }




function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++)
  if (deliveryOrders[i].orderNumber === orderNumber) {
    return deliveryOrders.splice([i], 1) 
  }

}
function listItems(deliveryOrders) {
  var newArray = []
  for (var i = 0; i < deliveryOrders.length; i++) {
  newArray.push(deliveryOrders[i].item)
} 
return newArray.join(', ')
}

// go through each object in the array, 
//check to see if that item is in the list

function searchOrder(deliveryOrders, item1) {
  var emptyArray = []
for (var i = 0; i < deliveryOrders.length ; i++) {
  emptyArray.push(deliveryOrders[i].item)
  emptyArray.join(', ')
} {
  if (emptyArray.includes(item1)) {
  return true
} else {
  return false
}
}
}
 

//  if (deliveryOrders[i].item === item1) 
//   return true


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}