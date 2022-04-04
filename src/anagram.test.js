const isAnagram = require("./anagram");

describe("isAnagram", () => {
  test("it returns false when two string are not of same length", () => {
    const value = isAnagram("azz", "azza");
    expect(value).toBe(false);
  });
  test("it returns true if two strings are anagram", () => {
    const value = isAnagram("aZZ", "zza");
    expect(value).toBeTruthy();
  });
  test("it returns false if two strings are not anagram", () => {
    const value = isAnagram("aza", "zza");
    expect(value).toBe(false);
  });
});
