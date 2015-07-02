// sample valid number
var numberToCheck = 4408041234567893;

// sample invalid number
// var numberToCheck = 1234567890123456;


////////////////////////////////////////////////////////////////
// convert number to an array of its digits
////////////////////////////////////////////////////////////////
var numberAsString = numberToCheck.toString();
var numberAsArray = [];
var len = numberAsString.length;

for (var i = 0; i < len; i += 1) {
  var currentDigit = parseInt(numberAsString.charAt(i));
  numberAsArray.push(currentDigit);
}

////////////////////////////////////////////////////////////////
// Check number according to the Luhn Algorithm.
////////////////////////////////////////////////////////////////
var checksum = 0;           // holds the sum of all digits
var atEvenPosition = false; // tracks whether we should double the digit before adding it

for (var n = numberAsArray.length - 1; n >= 0; n--) {
	var currentDigit = numberAsArray[n];

  // if we're in an even position we need to double the number
	if (atEvenPosition) {
    currentDigit = currentDigit * 2;

    // if the number is greater than nine, we need to add up it's digits, which
    // is the same as subtracting 9
		if (currentDigit > 9) {
      currentDigit -= 9;
    }
	}

	checksum += currentDigit;
	atEvenPosition = !atEvenPosition;
}

// check whether the checksum ends in a 0, if so, the number is valid
var valid = ((checksum % 10) == 0);
console.log(valid);
