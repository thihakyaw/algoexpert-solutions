function sortedSquaredArray(array) {
  const result = array.map(value => value * value);
  return result.sort((a,b) => a - b);
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))