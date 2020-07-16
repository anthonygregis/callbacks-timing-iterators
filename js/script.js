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

printArray = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let arrayElement = array[i]

        console.log(arrayElement)
    }

    callback(array)
}

printArrayAgain = array => {
    for (let i = 0; i < array.length; i++) {
        let arrayElement = array[i]

        console.log(arrayElement)
    }
}

const numbersArray = [1,2,3,4,5,6,7,0]

printArray(numbersArray, printArrayAgain)