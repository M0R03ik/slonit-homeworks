'use strict'

function secretNumberGame() {
  let minNumber = 1
  let maxNumber = 100
  let attempt = 0

  const getMiddleNumber = (min, max) => {
    return Math.floor((min + max) / 2)
  }

  const computerOneNumber =
    Math.floor(Math.random() * (maxNumber - minNumber - 1)) + minNumber

  let computerTwoNumber = null

  while (true) {
    attempt++
    computerTwoNumber = getMiddleNumber(minNumber, maxNumber)

    console.log(`Компьютер 2: Пробую число ${computerTwoNumber}.`)
    if (computerOneNumber - computerTwoNumber > 0) {
      console.log(`Компьютер 1: Больше.`)
      console.log('\n')

      minNumber = computerTwoNumber + 1
    } else if (computerOneNumber - computerTwoNumber < 0) {
      console.log(`Компьютер 1: Меньше.`)
      console.log('\n')

      maxNumber = computerTwoNumber - 1
    } else {
      console.log(`Компьютер 1: Угадал c ${attempt} попытки.`)
      break
    }
  }
}

secretNumberGame()
