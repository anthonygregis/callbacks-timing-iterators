greeting = (name, callback) => {
    let sentence = "Hello, my name is " + name + " "

    let otherSentence = callback()

    return sentence + otherSentence
}

anotherGreeting = () => {
    let sentence = " I forgot my last name"
    
    return sentence
}

let myName = "Anthony"
console.log(greeting(myName, anotherGreeting))
