let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Please, enter a number");

  if (input === null) {
    for (const num of numbers) {
      total += num;
    }
    alert(`Total sum of numbers in ARRAY is ${total}`);
    break;
  }

  let num = Number(input);
  if (Number.isNaN(num)) {
    alert("Entered not a numbers, try again!");
  } else {
    numbers.push(num);
  }
}

console.log(numbers);
