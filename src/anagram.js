function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const lookup = {};
  let str1Lower = str1.toLowerCase();
  let str2Lower = str2.toLowerCase();
  for (char of str1Lower) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of str2Lower) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }
  return true;
}

module.exports = isAnagram;
