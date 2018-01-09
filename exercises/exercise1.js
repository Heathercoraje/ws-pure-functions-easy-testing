// leave me alone :) :) :) <3 <3 <3
var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};
// leave me alone :) :) :) <3 <3 <3

// Refactor the following functions into pure functions:

var addOne = function (n) {
  n += 1;
  return n;
};

var timesTwo = function (n) {
  n = n * 2;
  return n;
};

var incrementArray = function (array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i]);
  }
  newArr.forEach(function (x, i) {
    newArr[i] = x + 1;
  });
  return newArr;
};

var addNumberArray = function (array, number) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i]);
  }
  newArr.push(number);
  return newArr;
};

var incrementObject = function (object) {
  var newObj = Object.assign({}, object);

  Object.keys(newObj).forEach(function (x) { // looping array of keys of obj
    newObj[x] = newObj[x] + 1;
  });
  return newObj;
};

module.exports = {
  addOne,
  timesTwo,
  incrementArray,
  addNumberArray,
  incrementObject,
  constantNumber,
  constantArray,
  constantObject
}
