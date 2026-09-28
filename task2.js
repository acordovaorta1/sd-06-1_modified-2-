function Mail(subj, msg) {
  this.subject = subj
  this.message = msg
}

// Type your code below this line!

const prompt = require('prompt-sync')()

const subjectInput = prompt("Cual es el asunto?: ")
const messageInput = prompt("Cual es el mensaje?: ")

const newMail = new Mail(subjectInput, messageInput)

// Type your code above this line!

console.log(newMail.subject + ": " + newMail.message)