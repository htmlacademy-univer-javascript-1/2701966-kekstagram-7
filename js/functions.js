//Функция для проверки длины строки
let checkLength = function (string, maxLength){
  return (string.length <= maxLength);
};

/*
console.log(checkLength('проверяемая строка', 20)); // true
console.log(checkLength('проверяемая строка', 18)); // true
console.log(checkLength('проверяемая строка', 10)); // false
*/



//Функция для проверки строки на палиндром
let stringIsPalindrom = function (string){
  string = string.replaceAll(' ', '').toLowerCase();
  return (string === string.split('').reverse().join(''));
};

/*
console.log(stringIsPalindrom('топот')); // true
console.log(stringIsPalindrom('ДовОд')); // true
console.log(stringIsPalindrom('Кекс')); // false
console.log(stringIsPalindrom('Лёша на полке клопа нашёл ')); // true
*/



//Доп задание
let makeNumber = function (input){
  let string = input.toString();
  let newString = '';
  string = string.replaceAll(' ', '');
  for (i = 0; i < string.length; i++){
    if (string[i] in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']){
      newString += string[i];
    }
  }
  if (newString ===  '') {return NaN;}
  return (parseInt(newString));
};

/*
console.log(makeNumber('2023 год')); // 2023
console.log(makeNumber('ECMAScript 2022')); // 2022
console.log(makeNumber('1 кефир, 0.5 батона')); // 105
console.log(makeNumber('агент 007')); // 7
console.log(makeNumber('а я томат')); // NaN
console.log(makeNumber(2023)); // 2023
console.log(makeNumber(-1)); // 1
console.log(makeNumber(1.5)); // 15
*/
