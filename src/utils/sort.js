function quiksort (array) {
  if (array.length < 1) { return array }
  let minIndex = Math.floor(array.length / 2)
  let minVal = array.splice(minIndex, 1)[0]

  let leftArr = []
  let rightArr = []

  array.forEach(arr => {
    arr <= minVal ? leftArr.push(arr) : rightArr.push(arr)
  })

  return quiksort(leftArr).concat(minVal, quiksort(rightArr))
}

export {quiksort}
