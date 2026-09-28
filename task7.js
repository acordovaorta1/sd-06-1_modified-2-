// Type your code below this line!
// Type your code below this line!

const prompt = require('prompt-sync')()

function Carro(marca, modelo, anio, color, puertas, kilometraje, tipoMotor) {
  this.marca = marca
  this.modelo = modelo
  this.anio = anio
  this.color = color
  this.puertas = puertas
  this.kilometraje = kilometraje
  this.tipoMotor = tipoMotor
}

const marcaInput = prompt("Marca del coche: ")
const modeloInput = prompt("Modelo del coche: ")
const anioInput = prompt("Año del coche: ")
const colorInput = prompt("Color del coche: ")
const puertasInput = prompt("Numero de puertas: ")
const kilometrajeInput = prompt("Kilometraje: ")
const motorInput = prompt("Motor de combustible o electrico o hibrido?: ")

const miCoche = new Carro(marcaInput, modeloInput, anioInput, colorInput, puertasInput, kilometrajeInput, motorInput)

console.log(miCoche)

// Type your code above this line!