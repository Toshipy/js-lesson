const num = "1300";
// console.log(typeof num);
// console.log(num.toLocaleString());

const formatter = num.toLocaleString === 'number' ? num.toLocaleString() : '数値を入力してください';

console.log(formatter);
