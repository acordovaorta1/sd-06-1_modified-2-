// Type your code below this line!

const prompt = require('prompt-sync')()

function Journey(start, end) {
  this.start = start
  this.end = end
}

const from = prompt("Desde donde inicia tu viaje?: ")
const to = prompt("Hacia donde te diriges?: ")

// Type your code above this line!
const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end)