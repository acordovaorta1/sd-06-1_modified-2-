// Type your code below this line!

const prompt = require('prompt-sync')()

function FriendsList() {
  this.names = []
}

const friendsList = new FriendsList()

const count = prompt("Cuantos nombres vas a ingresar?: ")

for (let i = 0; i < count; i++) {
  const name = prompt("Ingresa un nombre: ")
  friendsList.names.push(name)
}

console.log(friendsList.names)

// Type your code above this line!