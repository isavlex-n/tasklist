export function chunkArray(array, size) {
  const iterations = array.length / size
  const result = []
  let start = 0
  for (let i = 0; i < iterations; i++) {
    result.push(array.slice(start, start + size))
    start += size
  }
  return result
}

// chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2); // [[1, 2], [3, 4], [5, 6], [7, 8]]
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
