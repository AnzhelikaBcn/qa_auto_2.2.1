
// Функция increaseBalance принимает два аргумента и увеличивает значение x на значение y, возвращая результат.
function increaseBalance(x, y) {
  x += y;
  return x;
}

// Функция decreaseBalance принимает один аргумент x, но внутри функции используется y, который не был объявлен.
// Исправим это и вернем результат вычитания.
function decreaseBalance(x, y) {
x -= y;
return x;
}

// Функция divideBalanceByAccounts принимает два аргумента и делит x на y, возвращая результат.
// Строка console.log("x"); находится после return и не будет выполнена, так как код ниже return не выполняется.
function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}

// Функция getRestAfterDivision принимает два аргумента и возвращает остаток от деления x на y.
function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

// Далее, выполним вызовы функций с правильными аргументами и выведем результаты.
console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));

// Функция с инкрементом
function incrementBalance(x) {
  x++;
  return x;
}

// Функция с декрементом
function decrementBalance(x) {
  x--;
  return x;
}

// Вызываем функции и выводим результаты
console.log(incrementBalance(3000)); // Увеличиваем на 1
console.log(decrementBalance(3000)); // Уменьшаем на 1
