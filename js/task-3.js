const findLongestWord = function (string) {
  const stringArray = string.split(" "); //string.match(/\w[a-z]{0,}/gi); WAY HOW TO SOLVE IT
  let longestWord = stringArray[0];

  for (let i = 1; i < stringArray.length; i++) {
    if (longestWord.length < stringArray[i].length)
      longestWord = stringArray[i];
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
