let arr = [1, 2, "sdasd", 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];

const addToArray = function (arr) {
  let responseArray = [];
  responseArray["int"] = [];
  responseArray["float"] = [];
  responseArray["string"] = [];
  for (let item of arr) {
    if (Number.isInteger(item)) {
      responseArray["int"].push(item);
    } else if (item % 1 !== 0 && typeof item === "number") {
      responseArray["float"].push(item);
    } else if (typeof item === "string") {
      responseArray["string"].push(item);
    }
  }
  return responseArray;
};

console.log(addToArray(arr));