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

superHero = (heroName, callbackOne, callbackTwo) => {
    let superPowers = heroName + callbackOne + callbackTwo

    return superPowers
}

superPower1 = power => {
    let superPowerString = (" has the ability to " + power)

    return superPowerString
}

superPower2 = power => {
    let superPowerString = (" and has the ability to " + power)

    return superPowerString
}

console.log(superHero("Rome", superPower1("shoot lasers"), superPower2("fly")))

blastOff = () => {
    let num = 0;

    for (let i = 10; i >= num; i--) {
        console.log(i);
    }

    console.log("Blast off!!!!")
}

setTimeout(blastOff, 5000)

printMyName = (name) => {
    let myName = "My name is " + name;

    console.log(myName)
}

setTimeout(printMyName("Anthony"), 5000)