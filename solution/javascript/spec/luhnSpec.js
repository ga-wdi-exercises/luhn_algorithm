describe("Luhn Validator", function() {
  var Luhn = require('../lib/luhn');
  var luhn = new Luhn();

  it("returns true for valid numbers", function() {
    var validNumber = 4408041234567893;
    expect(luhn.validate(validNumber)).toEqual(true);
  });

  it("returns false for invalid numbers", function() {
    var invalidNumber = 1234567890123456;
    expect(luhn.validate(invalidNumber)).toEqual(false);
  });

});
