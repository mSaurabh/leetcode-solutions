const isPalindrome = require("./125_Valid_Palindrome_SM_7182022_v1");

describe("Testing valid Palindrome", () => {
  // #region Is "race a car" valid palindrome ?
  describe(`Test "race a car"`, () => {
    test("should return with 100", () => {
      const input = "race a car";
      //NOTE This is supertest way of assertions
      const answer = isPalindrome(input);

      //NOTE The below expect is jest way but supertest has a better way as shown above
      expect(answer).toBe(false);
    });
  });
  // #endregion
});
