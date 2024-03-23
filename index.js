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
//     ime : "Ahmed",
//     prezime : 'Jerebicanin',
//     godine : 13
// }

// ahmed.lokacija = 'Novi Pazar'
// console.log(ahmed);

// console.log(ahmed.ime);


// const user = {
//     username : '',
//     email : '',
//     password : ''
// }

// user.username = prompt('Unesite username')

// while (user.username.length < 3 || !isNaN(user.username)){
//     alert('Username treba da ima bar 3 slova...')
//     user.username = prompt('Unesite username')
// }

// user.email = prompt('Unesite vas email')

// while (user.email < 3){
//     alert('Email treba da sadrzi bar 3 karaktera...')
//     user.email = prompt('Unesite vas email')
// }

// while (!user.email.includes('@')){
//     alert('Email treba da sadrzi @...')
//     user.email = prompt('Unesite vas email')
// }

// user.password = prompt('Unesite password')

// while (user.password.length < 3 ){
//     alert('Password treba da ima bar 3 karaktera...')
//     user.password = prompt('Unesite password')
// }




// let usernameLogIn = prompt('Unesite username da bi se ulogovali')

// while (usernameLogIn !== user.username){
//     alert('Niste uneli tacni username...')
//     usernameLogIn = prompt('Unesite username da bi se ulogovali')
// }

// let passwordLogIn = prompt('Unesite password da bi se ulogovali')

// while (passwordLogIn !== user.password){
//     alert('Niste uneli tacnu sifru...')
//     passwordLogIn = prompt('Unesite password da bi se ulogovali')
// }

// console.log(user);

// const arr = [1,1,2,3,4,5,6,2,7,9,9]

// const noDuplicates = new Set (arr)
// console.log(noDuplicates);

// let output = {}

// arr.forEach((el) => output[el] = (output[el] || 0) + 1)

// console.log(output);

// const ucenik = {
//     ime: 'Sergej',
//     prezime: 'Knezevic',
//     starost: 15,
//     imeIPrezime: function () {
//         return `${this.ime} ${this.prezime}`
//     }
// }

// console.log(ucenik.imeIPrezime());

// function getFullName() {
//     return this.ime + '' + this.prezime
// }

// console.log(getFullName.call(ucenik));

// console.log(getFullName());

// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).
 
// const myCar = {
//     id: 1,
//     marka: "Audi",
//     model: "a4",
//     boja: "Crvena",
//     pogon: "prednji",
//     menjac: "automatski",
//     kontakt: '[0622222, 02033322]',
//     servis: {
//       datum: "04,maj",
//       km: 23000,
//       serviser: "Pasovic",
//     },
//     udaran: true,
//   };

// myCar.trenutnaBrzina = 0
// myCar.maxBrzina = 0

// myCar.povecanjeBrzine = function (povecanje) {
//     this.trenutnaBrzina += povecanje; 
//     if (this.trenutnaBrzina > this.maxBrzina){
//         console.log('Ne moze vise od 260...');
//         this.trenutnaBrzina = this.maxBrzina
//     }
// }

// myCar.smanjenjeBrzine = function (smanjenje) {
//     this.trenutnaBrzina -= smanjenje; 
//     if (this.trenutnaBrzina < 0){
//         console.log('Ne moze manje od 0...');
//         this.trenutnaBrzina = 0
//     }
// }

// myCar.koci = function () {
//     this.trenutnaBrzina = 0
// }

// myCar.povecanjeBrzine(300)
// console.log(myCar.trenutnaBrzina);

// myCar.smanjenjeBrzine(500)
// console.log(myCar.trenutnaBrzina);

// myCar.koci()
// console.log(myCar.trenutnaBrzina);

// class Age {
//     constructor(godina, mesec, dan) {
//         this.godina = godina
//         this.mesec = mesec
//         this.dan = dan
//     }
//     myCurrentAge(){
//         const date = new Date()
//         return date.getFullYear() - this.godina
//     }
//     myCurrentMonth(){
//         const date = new Date()
//         return date.getMonth() - this.mesec
//     }
//     myCurrentDay(){
//         const date = new Date()
//         return date.getDay() - this.dan
//     }
// }

// const myAge = new Age(prompt('Unesi godinu rodjenja'), prompt('Unesi mesec rodjenja'), prompt('Unesite dan rodjenja'))
// console.log(myAge);

// console.log(`Tvoj broj godina je ${myAge.myCurrentAge()} ${myAge.myCurrentMonth()} ${myAge.myCurrentDay()}` );

// const person = [
//     {
//         ucenik: {
//             skola: ['Osnovna', 'Srednja'],
//             informacije: {ime: 'ime', prezime: 'prezime'}
//         },
//     },
// ]

// const {ucenik} = person[0]
// const {skola, informacije} = ucenik
// const {ime, prezime} = informacije
// console.log('Prvo ime:', ime, 'Prezime:', prezime);

// const niz = [1,2,3,4,5]

// const [prviBroj, drugiBroj, ...restoBrojeva] = niz
// console.log(prviBroj, drugiBroj)
// console.log(...restoBrojeva);

// const restaurant = {
//     name: 'Classico Italiona',
//     location: 'Via Angelo Tavanti 23, Firenza, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Foccacia', 'Bruscetta', 'Garlic bread'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     openingHours: {
//         Thursday: {
            
//         }
//     }
// }

// class Covek {
//     constructor(ime, prezime, godine){
//         this.ime = ime
//         this.prezime = prezime,
//         this.godine = godine
//     }

//     getFullName(){
//         console.log(`Vase ime i prezime je : ${this.ime} ${this.prezime}`);
//     }
// }

// const ahmed = new Covek('Ahmed', 'Jerebicanin', 13)
// const kemal = new Covek('Kemal', 'Skrijelj', 18)

// ahmed.getFullName()

// const acc = []
// const pomocnaVar = true

// class Account {
//     constructor(username, password, email, godine){
//         this.username = prompt('Unesi ime')
//         this.password = prompt('Unesi password')
//     }

//     getInfo(){
//         console.log(this.username);
//     }
// }

// let counter = 0

// while (counter < 3){
//     acc.push(new Account())
//     counter++;
// }

// if (!localStorage.getItem('isLogedIn')){
//     console.log(localStorage.setItem('username', prompt('unesi ime')))
//     console.log(localStorage.setItem('sifra', prompt('unesi sifru')))
//     console.log(localStorage.setItem('isLogedIn', true))
// }
// else {
//     alert(`Dobro dosao ${localStorage.getItem('username')}`)
// }

// const osoba = {
//     ime:'ahmed',
//     prezime:'jerebicanin',
//     godine:13
// }

// Object.entries(osoba).forEach(([key, value]) =>{
//     console.log(`${key} : ${value}`);
// })

// class Osoba {
//     constructor(ime, prezime, godine){
//         this.ime = ime,
//         this.prezime = prezime,
//         this.godine = godine
//     }
// }

// class Ucenik extends Osoba {
//     constructor(skola, ime, prezime, godine){
//         super(ime, prezime, godine)
//         this.skola = skola  
//     }

//     info(){
//         console.log(this.godine, this.ime, this.prezime, this.skola);
//     }
// }

// const ahmed = new Ucenik('Cana', 'Ahmed', 'Jerbo', 13)

// ahmed.info()

// class Ljubimac {
//     constructor(ime, starost, boja){
//         this.ime = ime,
//         this.starost = starost
//         this.boja = boja
//     }
// }

// class Pas extends Ljubimac {
//     constructor(lajanje,ime, starost, boja ){
//         super(ime, starost, boja)
//         this.lajanje = lajanje
//     }

//     laj(){
//         console.log(this.lajanje)
//     }
// }

// const pas = new Pas('av! av!')

// pas.laj()

// class Macka extends Ljubimac {
//     constructor(mnjaukanje,ime, starost, boja ){
//         super(ime, starost, boja)
//         this.mnjaukanje = mnjaukanje
//     }

//     mnjauci(){
//         console.log(this.mnjaukanje);
//     }
// }

// const macka = new Macka('mnjau!')

// macka.mnjauci()

// const arr = [1,2,3,4,5,6,7,8,9]

// const sum = arr.reduce((prevVal, currVal) =>{
//     return prevVal + currVal
// })

// console.log(sum);

// const knjige = [{ime:'knj1', brojStr:200, tip:'roman'}, {ime:'knj2', brojStr:220, tip:'istorija'}, {ime:'knj3', brojStr:120, tip:'roman'}, {ime:'knj4', brojStr:340, tip:'roman'}]

// const str = knjige.reduce((prevVal, currVal) =>{
//     if(currVal.tip === 'roman'){
//         return prevVal + currVal.brojStr
//     }
//     else {
//         return prevVal
//     }
// },0)

// console.log(str);

// const ahmed = {
//     ime:'ahmo',
//     prezime:'jerebicanin',
//     godine:14
// }

// const {ime,...rest} = ahmed
// console.log(ime, rest);

// const terOper = 2 === 2 ? true : false
// console.log(terOper);
// const isCovek = 'covek' == 'zena' ? 'jesteCovek' : 'nijeCovek'
// console.log(isCovek);

// const arrObj = [{ime:'ime'}, {ime:'ime2'}]

// arrObj.push({prezime:'prezime'})
// console.log(arrObj);

// const arrOfKeys = []
// const arrOfValues = []

// const obj = {
//     ime:'ime1',
//     prezime:'prezime1',
//     godine: 13,
//     lokacija: '1234'
// }

// Object.entries(obj).forEach(([key, value]) =>{
//     arrOfKeys.push(key)
//     arrOfValues.push(value)
// })

// console.log(arrOfKeys)
// console.log(arrOfValues);

// const ahmed = 2

// try {
//     kemal = 3
// }
// catch (error){
//     console.log(error);
// }

// console.log('Jesi siguran');

// const obecanje = new Promise((res, rej) =>{
//     setTimeout(() =>{
//         const result = false
//         if(result){
//             res('Uspesno')
//         }
//         else {
//             rej('Neuspesno')
//         }
//     },1000)
// })

// obecanje.then((res) =>{
//     console.log(res);
// }).catch((rej) =>{
//     console.log(rej);
// }).finally(() =>{
//     console.log('Ne zanima me..');
// })

// const podaci = [
//     {ime:'Kemal', id:1}, {ime:'Veljko', id:2},
//     {ime:'Nadija', id:3}, {ime:'Sergej', id:4},
//     {ime:'Nerma', id:5}, {ime:'Ahmed', id:2},
//     {ime:'Mervan', id:2}, {ime:'Faris', id:2},
//     {ime:'Ahmed', id:2},{ime:'Kemal', id:1}, {ime:'Veljko', id:2},
//     {ime:'Nadija', id:3}, {ime:'Sergej', id:4},
//     {ime:'Nerma', id:5}, {ime:'Ahmed', id:2},
//     {ime:'Mervan', id:2}, {ime:'Faris', id:2},
//     {ime:'Ahmed', id:2},{ime:'Kemal', id:1}
// ]

/////////////////////////////////////////////

// const arr = [1,1,3,3,4,5,6,7,8,9,7,8]

// const noDuplicates = new Set (arr)
// console.log(noDuplicates);

// let output = {}

// arr.forEach((el) => output[el] = (output[el] || 0) + 1)

// console.log(output);

/////////////////////////////////////////////

// const ime = []

// for (let i = 0; i < podaci.length; i++){
//     if(podaci[i].ime.includes('Ah')){
//         ime.push(podaci[i].ime)
//     }
//     else {
//         continue;
//     }
// }

// console.log(ime);

/////////////////////////////////////////////

// for (let i = 0; i < podaci.length; i++){
//     if(podaci[i].id === podaci[i].id){
//         let unos = prompt('Unesi novi id')
//         podaci[i].id = unos
//     }
// }

// console.log(podaci);

// setInterval(() =>{
//     setTimeout(() => {
//         console.log('eto me tako to setTimeout');
//     },2000)
//     console.log('eto me tako to');
// },1000)

// let lengthOfUser;
// let dataFromApi = fetch('https://62e57f72de23e26379210498.mockapi.io/v1').then(res => res.json()).then(data => {
//     lengthOfUser = data.length
//     console.log(lengthOfUser);
//     let unos = prompt(`Unesite broj od 1 do ${lengthOfUser}`)


//     fetch(`https://62e57f72de23e26379210498.mockapi.io/v1/${unos}`).then(res => res.json()).then((data) => {
//         console.log(`data of user number: ${unos}`, data);
//     })
// })



