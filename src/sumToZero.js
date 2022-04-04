// function sumToZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

function sumToZero(arr) {
  // using the multiple pointers pattern
  let first = 0;
  let last = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[first] + arr[last] === 0) {
      return [arr[first], arr[last]];
    } else if (arr[first] + arr[last] > 0) {
      last--;
    } else {
      fitst++;
    }
  }
}

module.exports = sumToZero;
