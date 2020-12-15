const checkForSpam = function (message) {
  // твой код
  // const spam = /[SPAM]/gi;
  // const sale = /[SALE]/gi;
  // const saleSpam = message.match(spam, sale);
  // Решение супер, так как охватывает все регистры)))

  const words = message.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i].toLowerCase().includes("spam") ||
    words[i].toLowerCase().includes("sale")
      ? console.log("true")
      : console.log("false");
  }
  return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam(prompt("Enter SPAM or Sale in any register")));

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
