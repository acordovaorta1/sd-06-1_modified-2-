// Type your code below this line!

const prompt = require('prompt-sync')()

function Mail(subj, msg) {
  this.subject = subj
  this.message = msg
  this.printMail = function() {
    console.log(this.subject + ": " + this.message)
  }
}

const subjectInput = prompt("Cual es el asunto?: ")
const messageInput = prompt("Cual es el mensaje?: ")

const newMail = new Mail(subjectInput, messageInput)

// Type your code above this line!

newMail.printMail()