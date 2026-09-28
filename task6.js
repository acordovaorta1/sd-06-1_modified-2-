// Type your code below this line!

const prompt = require('prompt-sync')()

function ShoppingList() {
  this.items = []
}

const shoppingList = new ShoppingList()

const count = prompt("Cuantos articulos vas a agregar?: ")

for (let i = 0; i < count; i++) {
  const itemName = prompt("Nombre del articulo: ")
  const itemQty = prompt("Cantidad de " + itemName + ": ")
  shoppingList.items.push({ name: itemName, quantity: itemQty })
}

console.log(shoppingList.items)

// Type your code above this line!