const removeFromArray = function(array, extraInput, oneMore = null) {
  const arraySort = array.filter((item) => {
    return item !== extraInput;
  });

  const arraySort2 = arraySort.filter((item) => {
    return item !== oneMore;
  });
  return arraySort2;
};

// Do not edit below this line
module.exports = removeFromArray;
