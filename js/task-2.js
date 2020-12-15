const calculateEngravingPrice = function (message, pricePerWord) { 
    const words = message.split(" ");
    const totalWordPrice = words.length * pricePerWord;

    return totalWordPrice;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 Я убрал пару провверок, на их место ввел проверку на любое количество слов и любую цену
 */

console.log(
    calculateEngravingPrice(
        prompt("Enter some words"),
        parseInt(prompt("Enter price for One word")
        )
    )
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20
  )
); // 160

console.log(
    calculateEngravingPrice('Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, doloribus',
        35)
); // 350