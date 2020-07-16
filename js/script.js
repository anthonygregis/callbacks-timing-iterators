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
//console.log(greeting(myName, anotherGreeting))

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

//printArray(numbersArray, printArrayAgain)

calculator = (num1, num2, callbackOne, callbackTwo) => {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2)

    return result;
}

addNumbers = (num1, num2) => {
    let result = num1 + num2

    return result;
}

subtractNumbers = (num1, num2) => {
    let result = num1 - num2

    return result;
}

console.log(calculator(5, 77, addNumbers, subtractNumbers))