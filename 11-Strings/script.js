'use strict'

function changeFirstLetterToUpperCase(string) {
  return string.at(0).toUpperCase() + string.slice(1)
}

console.log(
  changeFirstLetterToUpperCase('моя строка начинается с большой буквы')
)

function getTrimString(string, maxLength) {
  if (string.length <= maxLength) {
    return string
  }

  let resultString = ''
  const trimSymbols = [' ', ',', '.', '!', '?', ':', ';']

  for (let symbol of trimSymbols) {
    const lastIndex = string.lastIndexOf(symbol, maxLength)
    if (lastIndex > 0) {
      resultString = string.slice(0, lastIndex)

      break
    }
  }

  return resultString + '...'
}

console.log(getTrimString('Hello big? world', 16))
console.log(getTrimString('Hello big? world', 14))

function isSubstring(firstString, secondString) {
  return firstString.length > secondString.length
    ? firstString.includes(secondString)
    : secondString.includes(firstString)
}

console.log(isSubstring('Gendalf and Bilbo', 'Bilbo'))
console.log(isSubstring('Gendalf and Bilbo', 'Frodo'))
console.log(isSubstring('Bilbo', 'Gendalf and Bilbo'))
console.log(isSubstring('Frodo', 'Gendalf and Bilbo'))
