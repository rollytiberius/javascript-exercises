const sumAll = function (start, stop) {
  let result = 0;

  function isNumber(value) {
    return typeof value === "number";
  }
  if (!isNumber(start)) {
    return "ERROR";
  }

  if (!isNumber(stop)) {
    return "ERROR";
  }
  if (!Number.isInteger(start)) {
    return "ERROR";
  }
  if (!Number.isInteger(stop)) {
    return "ERROR";
  }
  if (stop < 0 || start < 0) {
    return "ERROR";
  } else {
    if (start > stop) {
      for (let i = stop; i <= start; i++) {
        result = result + i;
      }
    } else {
      for (let i = start; i <= stop; i++) {
        result = result + i;
      }
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
