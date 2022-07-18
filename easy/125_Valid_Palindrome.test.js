const isPalindrome = require("./125_Valid_Palindrome_SM_7182022_v1");

describe("Testing valid Palindrome", () => {
  // #region Is "race a car" valid palindrome?
  describe(`Test "race a car"`, () => {
    test(`should return false for "race a car"`, () => {
      const input = "race a car";
      //NOTE This is supertest way of assertions
      const answer = isPalindrome(input);

      //NOTE The below expect is jest way but supertest has a better way as shown above
      expect(answer).toBe(false);
    });
  });
  // #endregion

  // #region Test 2 - Is "race car" valid palindrome?
  describe(`Test "race car"`, () => {
    test(`should return true for "race car"`, () => {
      const input = "race car";
      //NOTE This is supertest way of assertions
      const answer = isPalindrome(input);

      //NOTE The below expect is jest way but supertest has a better way as shown above
      expect(answer).toBe(true);
    });
  });
  // #endregion

  // #region Test 3 - Is "A man, a plan, a canal: Panama" a valid palindrome
  describe(`Test "A man, a plan, a canal: Panama"`, () => {
    test(`should return true for "A man, a plan, a canal: Panama"`, () => {
      const input = "A man, a plan, a canal: Panama";
      //NOTE This is supertest way of assertions
      const answer = isPalindrome(input);

      //NOTE The below expect is jest way but supertest has a better way as shown above
      expect(answer).toBe(true);
    });
  });
  // #endregion

  // #region Test 3 - Is " " a valid palindrome
  describe(`Test " "(space only)`, () => {
    test(`should return true for " "(space only)`, () => {
      const input = " ";
      //NOTE This is supertest way of assertions
      const answer = isPalindrome(input);

      //NOTE The below expect is jest way but supertest has a better way as shown above
      expect(answer).toBe(true);
    });
  });
  // #endregion
});
