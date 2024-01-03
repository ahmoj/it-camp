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
//    __|       |    |   |    |      |__
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

// let kemal = prompt('Koliko ima kemal');
// const staZelisKupiti = prompt('Mozes kupiti 1.cokolada, 2.cigare , 3.sok').toLowerCase();
// console.log(typeof kemal);

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

// if (!isNaN(num)) {
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

function sabiranje(num1, num2){
    const sum = Number(num1) + Number(num2)
    alert(`${num1} + ${num2} = ${sum}`);
}

sabiranje(prompt('unesi 1. broj'), prompt('unesi 2. broj'))