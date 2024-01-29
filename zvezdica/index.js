// let n = prompt('Unesite br')
// let zvezdica = ''

// for (let i = 1; i <= n; i++){
//   for (let j = 1; j <= i; j++){
//     zvezdica += '*'
//   }
//   zvezdica += '\n'
// }

// console.log(zvezdica);

let n = prompt('Unesite neki broj');
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

