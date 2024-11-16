const leapYears = function (year) {
	let result = false;
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			return true;
		}
		return false;
	}
	if (year % 4 === 0) {
		result = true;
	}
	return result;
};

// Do not edit below this line
module.exports = leapYears;
