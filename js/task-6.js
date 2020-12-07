let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число:');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз!');
  } else {
    numbers.push(Number(input));
  }
}

for (const number of numbers) {
  total += number;
}
alert(`Общая сумма чисел равна ${total}`);

/* Альтернативный вариант решения */

/*
alert(`Общая сумма чисел равна ${total}`);

while (true) {
  input = prompt('Введите число:');

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }

  if (!input) {
    for (const number of numbers) {
      total += number;
    }

    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  numbers.push(Number(input));
} 
*/
