const repeatString = function (string, repeatTimes) {
  if (repeatTimes < 0) {
    return "ERROR";
  }
  let repeat = repeatTimes;
  let finalString = "";
  while (repeat > 0) {
    repeat -= 1;
    finalString += string;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
