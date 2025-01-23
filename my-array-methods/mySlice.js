function mySlice(arr, start = 0, end = arr.length) {
  const newArray = []
  let index = start < 0 ? end + start : start

  while (index < end) {
    newArray.push(arr[index])
    index++
  }

  return newArray
}

console.log(mySlice(['t', 'e', 's', 't'], -2))
console.log(mySlice(['t', 'e', 's', 't'], 1, 3))
console.log(mySlice([0, 1, 2, 3, 4, 5]))
console.log(mySlice([0, 1, 2, 3, 4, 5], 3, 5))
