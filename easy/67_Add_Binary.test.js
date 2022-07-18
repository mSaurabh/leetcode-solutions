const addBinary = require("./67_Add_Binary_SM_7182022_v1");

describe("Testing Binary Addition", () => {
  // #region TEST1 "11"+"1"
  describe(`Test "11" + "1"`, () => {
    test("should return with 100", () => {
      const input1 = "11";
      const input2 = "1";
      //NOTE This is supertest way of assertions
      const answer = addBinary(input1, input2);

      //NOTE The below expect is jest way but supertest has a better way as shown above
      expect(answer).toStrictEqual("100");
    });
  });
  // #endregion
});
