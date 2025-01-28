'use strict'

function simpleCalculator(a, b, operation) {
  return operation(a, b)
}

const getMultiply = function (a, b) {
  return a * b
}

const getDivision = function (a, b) {
  return a / b
}

const getSum = function (a, b) {
  return a + b
}

const getDiff = function (a, b) {
  return a - b
}

const operations = {
  multiply: getMultiply,
  division: getDivision,
  addition: getSum,
  subtraction: getDiff,
}

const firstOperation = 'multiply'
const secondOperation = 'division'
const thirdOperation = 'subtraction'
const fourthOperation = 'addition'

console.log(simpleCalculator(6, 3, operations[firstOperation]))
console.log(simpleCalculator(6, 3, operations[secondOperation]))
console.log(simpleCalculator(6, 3, operations[thirdOperation]))
console.log(simpleCalculator(6, 3, operations[fourthOperation]))
