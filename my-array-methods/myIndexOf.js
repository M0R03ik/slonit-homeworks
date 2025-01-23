function myIndexOf(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i
    }
  }

  return -1
}

let arr = [1, 0, false]

console.log(myIndexOf(arr, 0))
console.log(myIndexOf(arr, false))
console.log(myIndexOf(arr, null))
