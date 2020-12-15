const logItems = function (array) {
    let itemNumber = 1;
    for (const itemValue of array) {
        console.log(`${itemNumber} - ${itemValue}`)
        itemNumber++;
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
