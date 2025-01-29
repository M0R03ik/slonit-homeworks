'use strict'

function myFilter(array, callback) {
  const filteredArray = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i])
    }
  }

  return filteredArray
}

const numbers = [1, 2, 3, 4, 5]

const evenNumbers = myFilter(numbers, function (num) {
  return num % 2 === 0
})
console.log(evenNumbers) // [2, 4]

const greaterThanThree = myFilter(numbers, function (num) {
  return num > 3
})
console.log(greaterThanThree) // [4, 5]
