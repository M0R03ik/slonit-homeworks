function myIncludes(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true
    }
  }

  return false
}

let arr = [1, 0, false]

console.log(myIncludes(arr, 0))
console.log(myIncludes(arr, false))
console.log(myIncludes(arr, null))
console.log(myIncludes(arr, 1))
