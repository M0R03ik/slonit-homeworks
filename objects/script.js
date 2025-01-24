'use strict'

function getSumOfNumberFields(obj) {
  let sum = 0

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key]
    }
  }

  return sum
}

const testObject = { name: 'Vasya', friends: 5, likes: 19, projects: 7 }

console.log(getSumOfNumberFields(testObject))

function getSortedArrayOfNumberFields(obj) {
  const result = []

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      result.push(key)
    }
  }

  return result.sort((a, b) => obj[b] - obj[a])
}

console.log(getSortedArrayOfNumberFields(testObject))
