// function maxSubArray(arr, num) {
//   if (num > arr.length) return null;
//   let max = -Infinity;
//   for (let i = 0; i < arr.length + 1 - num; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//       if (temp > max) {
//         max = temp;
//       }
//     }
//   }
//   return max;
// }

function maxSubArray(arr, num) {
  if (num > arr.length) return null;
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(temp, max);
  }
  return max;
}

module.exports = maxSubArray;
