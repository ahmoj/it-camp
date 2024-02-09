// var ovoJeNumber = 23;
// var ovoJeBoolean = true;
// var ovoJeString = 'Ahmed';
// var ovoJeUndefined = undefined;
// var ovoJeNull = null;

// var ovoJeArray = ['d', 2, {}];
// var ovoJeObject  = {
//     ime : 'Ahmed',
//     prezime : 'Jerebicanin',
//     godine : 13
// }
// function test(e){
//     console.log(e)
// }

// // test(5)

// // console.log(ovoJeUndefined);
// // console.log(ovoJeNumber)
// // console.log(ovoJeArray)
// // console.log(ovoJeObject)
// // console.log(ovoJeNull);

// let dodeliVrednost = 23;
// let plus = 2+2;
// let minus = 2-2;
// let mnozenje = 2*2;
// let deljenje = 2/2;
// let number = 2;
// let string = '2';

// let test1 = (number == string) || false;
// // console.log(!test1);

// let test2 = 2>=2                                                            
// // console.log(test2);

// let mojNovacanik = 100;

// const kafa = 10;
// const sok = 20;
// const cigare = 250;

// console.log(mojNovacanik >= kafa);
// mojNovacanik = mojNovacanik - kafa; 
// console.log(mojNovacanik);
// console.log(mojNovacanik >= (kafa, sok));
// mojNovacanik = mojNovacanik - sok
// console.log(mojNovacanik);
// console.log(mojNovacanik >= cigare);


//             ________________
//          __|                |__
//       __|     ____     ____    |__
//    __|       | __ |   | __ |      |__
//   |          |____|   |____|         |                  
//   |                                  | 
//   |    |__                     __|   |
//   |       |__                __|     |      
//   |__        |______________|      __|
//      |__                        __| 
//         |__                  __| 
//            |________________|


// const test = prompt('unesi nesto')

// console.log( test, 'test');

// console.log(typeof test);

// let user = prompt('Koliko ima user');
// const staZelisKupiti = prompt('Mozes kupiti 1.cokolada, 2.cigare , 3.sok').toLowerCase();
// console.log(typeof user);

// const sok = 60;
// const cokolada = 40;
// const cigare = 480;

// switch (staZelisKupiti){
//    case 'cokolada':
//       if(kemal >= cokolada){
//          kemal = kemal - cokolada;
//          console.log(`Kupio si ${staZelisKupiti} i ostalo ti je ${kemal}`)
//          console.log(typeof kemal);
//       }
//       else{
//          console.log('Nemas dovoljno para...')
//       }
//       break;
//    case 'cigare':
//       if(kemal >= cigare){
//          kemal = kemal - cigare
//          console.log(`Kupio si ${staZelisKupiti} i ostalo ti je ${kemal}`);
//       }
//       else{
//          console.log('Nemas dovoljno para...');
//       }
//       break;
//    case 'sok':
//       if(kemal >= sok){
//          kemal = kemal - sok
//          console.log(`Kupio si ${staZelisKupiti} i ostalo ti je ${kemal}`);
//       }
//       else{
//          console.log(`Nemas para...`);
//       }
//    default:
//       console.log(`Nisi nista kupio`);
// }

// let num = prompt('unesi broj');

// if (!isNan(num)) {
//    console.log('Vas broj je broj')

//    if(num % 2 == 0){
//     console.log('Vas broj je paran')
//    }
//    else{
//     console.log('Vas broj je neparan');
//    }
// }
// else {
//     console.log('Reko sam ti da uneses broj');
// }

// const num = prompt('unesi broj')

// if(num % 3 == 0){
//     console.log('fizz')
// }
// else if(num % 5 == 0){
//     console.log('buzz');
// }
// else if(num % 3 == 0 && num % 5 == 0 ){
//     console.log('fizzbuzz');
// }
// else if(isNaN(num)){
//     console.log('nije broj');
// }
// else{
//     console.log('nije deljiv ni sa cim');
// }

// const num1 = prompt('unesi 1. broj');
// const num2 = prompt('unesi 2. broj');
// const num3 = prompt('unesi 3. broj');

// if(num1 % 3 == 0){
//     console.log('fizz')
// }
// else if(num1 % 5 == 0){
//     console.log('buzz');
// }
// else if(num1 % 3 == 0 && num1 % 5 == 0 ){
//     console.log('fizzbuzz');
// }
// else if(isNaN(num1)){
//     console.log('nije broj');
// }
// else{
//     console.log('nije deljiv ni sa cim');
// }

// if(num2 % 3 == 0){
//     console.log('fizz')
// }
// else if(num2 % 5 == 0){
//     console.log('buzz');
// }
// else if(num2 % 3 == 0 && num2 % 5 == 0 ){
//     console.log('fizzbuzz');
// }
// else if(isNaN(num2)){
//     console.log('nije broj');
// }
// else{
//     console.log('nije deljiv ni sa cim');
// }

// if(num3 % 3 == 0){
//     console.log('fizz')
// }
// else if(num3 % 5 == 0){
//     console.log('buzz');
// }
// else if(num3 % 3 == 0 && num3 % 5 == 0 ){
//     console.log('fizzbuzz');
// }
// else if(isNaN(num3)){
//     console.log('nije broj');
// }
// else{
//     console.log('nije deljiv ni sa cim');
// }

// function sabiranje(num1, num2){
//     const sum = Number(num1) + Number(num2)
//     alert(`${num1} + ${num2} = ${sum}`);
// }

// sabiranje(prompt('unesi 1. broj'), prompt('unesi 2. broj'))

// let fruits = ['jabuka', 'banana', 'kruska', 'pomorandza', 'sljiva']
// for (let i = 0; i < fruits.length; i++) {
//   text = fruits[i] 
//   console.log(text);
// }

// const arr = [1,2,3,4,5,6,7,8,9,10]
// let counter = arr.length -1

// while(counter >= 0){
//     console.log(arr[counter])
//     counter--;
// }

// const arr = [1,2,3,4,5,6]

// let index = 0;

// while(index < arr.length){
//     console.log(arr[index])
//     index++;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
// const parni = []
// const neparni = []

// let index = 0;

// while(index < arr.length){
//     if(arr[index] % 2 == 0){
//         parni.push(arr[index])
//     }
//     else{
//         neparni.push(arr[index])
//     }
//     index++;
// }

// console.log(parni);
// console.log(neparni);

// const username = 'ahmed'
// const password = 'ahmed123'
// let unosUsername = ''
// let unosPassword = ''

// while (username !== unosUsername){
//     unosUsername = prompt('Unesite username')
//     if(unosUsername !== username){
//         alert('Pogresili ste username ili password')
//     }
// }

// while (password !== unosPassword){
//     unosPassword = prompt('Unesite password')
//     if(unosPassword !== password){
//         alert('Pogresili ste username ili password')
//     }
// }

// alert('Uspesno ste se ulogovali')

// window.location.replace('menu.html')

// const arr = [1,2,3,4,5,6,7]
// const reverseArr = [];

// for (let i = arr.length - 1; i >= 0; i--){
//     reverseArr.push(arr[i])
// }

// console.log(reverseArr);

// const arr1 = [1,2,3,4,5,6,7]
// const arr2 = [1,3,3,5,6,7,8]
// const newArr = []

// for (i = 0; i < arr1.length; i++){
//     if(arr1[i] === arr2[i]){
//         newArr.push(arr1[i])
//     }
// }

// console.log(newArr);

// const arr = [[1,2,3],[1,2,3],[1,2,3]];
// const newArr = []

// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//         newArr.push(arr[i][j])
//     }
// }

// console.log(newArr);

// const text = 'ime-prezime'

// let ime = ''
// let prezime = ''
// let pomocnaVar = false

// for (let i = 0; i < text.length; i++){
//    if (text[i] === '-'){
//     pomocnaVar = true;
//     continue;
//    }
//    if (pomocnaVar === false){
//     ime += text[i]
//    }
//    if (pomocnaVar === true){
//     prezime += text[i]
//    }
// }

// console.log(ime,prezime);

// const arr = [1,2,3,4,5,6,7,8]

// console.log(arr.includes(1));

// const arr1 = arr.join('\n')

// console.log(arr1);

// const ahmed = 'ahmed nije dolazio'

// const ahmed1 = ahmed.replace('nije','je')
// console.log(ahmed1);

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const arr1 = []
// const arr2 = []

// for (let i = 0; i < arr.length; i++){
//     arr1.push(arr[i] * arr[i])
// }

// for (let j = 0; j < arr1.length; j++){
//     arr2.push(arr1[j].toString())
// }

// console.log(arr1)
// console.log(arr2);

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const noviNiz = arr.map((el) => String(el*el))
// console.log(noviNiz);

// const zadatakZadaca = [12,32,32,321,213,3213,1313131,313131]


// const  bucanResenje = zadatakZadaca.map((el,i,arr) => {
//     if(i === 0){
//        return el;
//     }
//     else {
//         if(el % 2 === 0){
//             return el-arr[i-1]
//         }
//         else  {
//             return el
//         }    }
// })

// console.log(bucanResenje);


// const arr = [1,2,3,4,5,6,7,8,9,10]

// const newArr = arr.map((el,i,arr) => {
//     if (el % 2 === 0){
//         return el - 1;
//     }
//     else{
//         return el + 1;
//     }
// })

// console.log(newArr);

// broj = prompt('Unesi broj:')
// operator = prompt('Unesi operator')
// const newArr = []
// function newMap(arr){
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(eval(`${arr[i]} ${operator} ${broj}`))
//     }
// }

// newMap([1,2,3,4,5])
// console.log(newArr);

// const kemal = [1,2,3,4,5,6,7,8,9,10,11,12]
// const veljko = [2,3,4,5,6,7,8,9]

// let kemalVeljko = []

// kemalVeljko = kemal.concat(veljko)

// console.log(kemalVeljko);

// const svi = [1,2,3,4,5,6,7,8,9,10]

// const samoNeparni = []

// // for (let i = 0; i < svi.length; i++){
// //     if(svi[i] % 2 !== 0) samoNeparni.push(svi[i])
// // }

// const samoNeparniFilter = svi.filter((el) => el % 2 !== 0)

// console.log(samoNeparniFilter);

// console.log(samoNeparniFilter.includes(1));

// const bazaPodataka = ['Ahmed', 'Silvester', 'Veljko', 'Nerma', 'Faris', 'Mervan', 'Sergejbit']
// let sergejBezBit = ''

// bazaPodataka.forEach((el,i,arr) => {
//     if (el === 'Sergejbit'){
//         sergejBezBit = 'Sergej'
//     }
// })

// console.log(sergejBezBit);

// function swapCase(text) {
//     let newText = ''

//     for (let i = 0; i < text.length; i++){
//         let char = text[i]

//         if (char === char.toUpperCase()){
//             newText += char.toLowerCase()
//         }
//         else {
//             newText += char.toUpperCase()
//         }
//     }
//     return newText;
// }

// console.log(swapCase('The Quick Brown Fox'));

// const arr = ['Nan', 0, 15, false, -22, '',undefined, 47, null]
// const newArr = []

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 'Nan'){
//         continue;
//     }
//     if (arr[i] === 0){
//         continue;
//     }
//     if (arr[i] === false){
//         continue;
//     }
//     if (arr[i] === ''){
//         continue;
//     }
//     if (arr[i] === undefined){
//         continue;
//     }
//     if (arr[i] === null){
//         continue;
//     }
//     else {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);

// const arr = [[1,2,3,4], [5,6,7,8,9,10]]
// const newArr = []

// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//         newArr.push(arr[i][j])
//     }
// }

// console.log(newArr);

// const flex = arr.flat()
// console.log(flex);



//             ________________
//          __|                |__
//       __|     ____     ____    |__
//    __|       | __ |   | __ |      |__
//   |          |____|   |____|         |                  
//   |                                  | 
//   |    |__                     __|   |
//   |       |__                __|     |      
//   |__        |______________|      __|
//      |__                        __| 
//         |__                  __| 
//            |________________|

// const testSome = [1,2,3,4,5,6,7]

// console.log(testSome.some((el) => el > 0));

// const ucenici = [['Kemal', 'Skrijelj', 18, 'SVE'], ['Ahmed', 'Jerebicanin', 13, 'Dobar Covek']]

// console.log(ucenici[1])

// const ahmed = {
//     ime : 'Ahmed',
//     prezime : 'Jerebicanin',
//     godine : 13,
//     zanimanje : 'Dobar Covek',
// }

// ahmed.lokacija = 'Novi Pazar'
// console.log(ahmed);

// const user = {
//     ime : prompt('Unesite ime'),
//     prezime : prompt('Unesite prezime'),
//     godine : prompt('Unesite godine'

