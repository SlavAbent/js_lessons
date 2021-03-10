// let a = 5
// let b = 7

// let a = 'slava'
// let b = 'abent'

// let sum = `${a} ${b}`
// console.log(sum)



// const calc = year =>{
//     return 2020 - year
// }

// const myAge = calc(1993)
// console.log(myAge)


// const logInfoAbout = (name, year) => {
//     const age = calc(year)

//     console.log('Человек с именем ' + name + ' ! его возраст ' + myAge) 
// }

// logInfoAbout('Святослав')



// const cars = ['Мазда', 'Мерседес', 'Форд'] 
// // const cars = new Array('Мазда', 'Мерседес', 'Форд')
// // console.log(cars.length)

// cars[0] = 'Porsche'
// cars[cars.length] = 'Мазда'

// console.log(cars)


// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche'] 


// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }

// for (let car of cars){    
//     console.log(car)
// }



// const person = {
//     firstName: 'slava',
//     lastName: 'abent',
//     year: 1993,
//     lang: ['ru', 'en'],
//     hasWife: false
// }


// const key = 'lang'
// console.log(person.lang[1])
// console.log(person[key])


// function logPerson (s, name, age){
//     console.log(s, name, age)
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = 'slava'
// const personAge = '27'

// const output =  logPerson`Имя: ${personName}, Возраст: ${personAge}!` 

// console.log(output)


// function greet(name){
//     console.log('Привет - ', name)
// }

// greet('Slava')
// let counter = 10 

// const interval = setInterval(function(){
//     if(counter === 5){
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
    

// }, 1000);

// const interval = setInterval(function(){
//         if(counter === 0){
//             clearInterval(interval)
//             document.querySelector('.h2').classList.add('h2-active')
//         } else {
//             let h1 = document.querySelector('.h1')
//             h1.innerHTML = --counter
//         }
        
    
//     }, 1000);

// let h3 = document.querySelector('.h3').onclick = function () {

//     this.classList.toggle('h3-elem')
// }

// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum())


// function sumAll(...all){
//     console.log(all)
//     let result = 0
//     for (let num of all){
//         result += num
//     }

//     return result
// }

// const res = sumAll(1,2,3,4,5)

// console.log(res)


// let counter = 5
// let h1 = document.querySelector('.h1')
// let new_div = null
// let btn = document.querySelector('.button')

// const interval = setInterval(function(){
//     if(counter === 0){
//         clearInterval(interval)
//         btn = document.createElement('div')
//         btn.innerHTML = '<button class="button">Нажми меня</button>'
        
//         new_div = h1
//         document.body.insertBefore(btn, new_div)
        
//     } else {
//         h1.innerHTML = --counter
        
//     }

// }, 1000)


// let person = [
//     {'name': 'Slava', 'category':'people'},
//     {'age:': '27', 'category':'ages'},
//     {'lang': 'ru', 'category':'languages'},
// ]

// // console.log (person[0].name)


// person.forEach((obj) => {
//     console.log(obj.category)
// })

// for ( let i = 0; i < person.length; i++){
//     console.log(person[i].category)
// }




// const arr = [
//     {
//         variation: {
//             attributes: {
//                 "attribute_pa_obem": "500-gr",
//                 "attribute_pa_czvet-produkta": "c-110-goluboj"
//             }
//         }
//     },
//     {
//         variation: {
//             attributes: {
//                 "attribute_pa_obem": "501-gr",
//                 "attribute_pa_czvet-produkta": "c-110-goluboj"
//             }
//         }
//     },
//     {
//         variation: {
//             attributes: {
//                 "attribute_pa_obem": "502-gr",
//                 "attribute_pa_czvet-produkta": "c-110-goluboj"
//             }
//         }
//     }
// ]

// for (let i = 0; i < arr.length; i++){
    
// }

// for (let value of arr)  {
//     // console.log(value.variation.attributes.attribute_pa_obem)

//     const ref = value.variation.attributes;
//     ref["attribute_pa_obem"]
//     ref["attribute_pa_czvet-produkta"] 
//     // console.log(ref)
// }



// let obj = {a:1, b:2, c:3};

// let person = {name: 'Slava', category: 'people'};

// for (let prop in person) {
//     for (let elem in person) {
//         console.log(elem + " = " + person[elem]);
//     }
// }


// let array = [[1, 2, 3], [4, 5], [6]]
// let sum = 0
// for (let obj of array){
    
//     for (let val of obj){
//         sum += val; 
//         console.log(sum)
        
//     }
// }


// let array2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0

// for (let mas of array2) {
//     for (let objs of mas){
//         for(let obj of objs){
//             sum += obj
//             console.log(sum)
//         }
//     }
// }


// let array3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9,10], [11,12]]];
// let sum = 0
// for (let mas of array3){
//     for(let objs of mas){
//         for (let obj of objs){
//             res = sum += obj
//             console.log(res)
//         }
//     }
// }


// const array = [
//     ['Святослав', 'банан'],
//     ['Екатерина', 'яблоко'],
//     ['Ольга', 'мандарин']
// ]

// for (let massive of array.keys()){
//     console.log(massive);
//     let l = massive[0]
//     // for (let i = 0; i<massive.length; i++){
//         setInterval(() => {
//             console.log(l[0]); 
//         }, 1000)
//     // }
// }


// let name = 'Святослав';

// // for (let val of name){

//     let person = name.split('').reverse().join('').toLowerCase();
    
//     console.log(person);
// // }


// console.log(array);

// const cars = ['Мазда', 'Форд', 'Киа'];

// // cars.unshift('Камаз') //добавление в начало
// // cars.push('Порше') //добавление в конец
// // cars.slice(1,3) от 1 до 3


// // const firstCar = cars.shift();//удаляет первый жлемент
// const firstCar = cars.pop() //удаляет полсдений элемент

// console.log(firstCar);


// const people = [
//     {name:'Slava', budget:4200},
//     {name:'Kate', budget:3500},
//     {name:'Elena', budget:1700}
// ]

// let findedPerson
// for (const person of people){
//     if(person.budget === 3500){
//         findedPerson = person
//     }
    
// }


// const person = people.find(person => person.budget === 3500)


// const index = people.findIndex(function(person){  //цикл
//     return person.budget === 3500
// });
// console.log(people[index]);

// console.log(people.indexOf(people, [0]));

// const nums = [6, 3, 5, 8]

// // const num = nums => nums ** 2 
// const doubles = nums.map(num => {
//     return num ** 2;
// });

// // const res = nums.map(num)
// console.log(doubles);

// const nums = [1, 2, 3, 4]
// const dbls = nums.map(num => num * 2);

//     // console.log(dbls);

// const numbers = nums.toLocaleString().reduce();

// console.log(numbers);



// let  elements = document.querySelectorAll('.h2s');
// console.log(elements);

// let elements = ['HTML', 'CSS', 'JS']
// let elms = elements.map(function(name){
//     return name.length;

    
// });
// console.log(elms);


// let names = ['HTML', 'CSS', 'JavaScript'];

// let nameLengths = names.map(function(name) {
//   return name.length;
// });

// console.log(nameLengths);


// for (let i = 0; i < elements.length; i++){
//     elements[i].onclick = function() {
        
//     }
// }


// elements.addEventListener('click', function(){
//     this.style.color = 'red'
// })

// const cars = ['мазда', 'лексус', 'камаз']
// const nums = [1, 3, 5, 7, 9]


// const upperCaseCars = cars.map(car => car.toUpperCase());
// console.log(upperCaseCars)

// const pow2Num = nums.map( el => {
//     return  el ** 2
// });
// console.log(pow2Num)


// const person = {
//     name: 'Святослав',
//     age: '27',
//     isProgrammer: 'true',
//     info(){
//         console.log('this:', this)
//         console.log('Информация про', this.name)
//     }
// }


// console.log(person);


// const person = {
//     name: 'Vladilen',
//     age: 26,
//     isProgrammer: true,
//     languages: ['ru', 'en', 'de'],
//     greet() {
//       console.log('greet from person')
//     },
//     info() {
//         // console.log(this);
//         console.log('Информация про человека по имени:', this.age)
      
//     }
  
// }

// person.info();

// window.onload = function(e){


//   document.body.addEventListener('click', some);
//   document.body.addEventListener('hover', function(e){
//     console.log(2);
//   });
//   document.body.addEventListener('contextmenu', function(e){
//     console.log(2);
//   });
  
// }

// const some = (e) => {
//   console.log(1);
// }

// const btns = document.querySelectorAll('.btn');


//   for (let i=0; i<btns.length; i++){
//     let btn = btns[i]
//     btn.onclick = (e) =>{
//       let name = btn.getAttribute('name');
//       console.log(name);  
//     };
//   }





// const item = document.querySelectorAll('.items .item');
// const divPrice = document.querySelector('.sum');
  
//   for(let i = 0; i < item.length; i++){
//       item[i].onclick = function(){
//           this.classList.toggle('item-active');
//           calcPrice();
//       }
//   }
  
// function calcPrice(){
//   let price = 0;
    
//     for(let i = 0; i < item.length; i++){
//         if(item[i].classList.contains('item-active')){
//             price += parseInt(item[i].getAttribute('data-price'));
//         }
//     }
    
//     divPrice.innerHTML = price;
// }



// const inp1 = document.querySelector('input[name=num1]');
// const inp2 = document.querySelector('input[name=num2]');
// const span = document.querySelector('.res');

// const buttons = document.querySelectorAll('input[type=button]');


// for (let i = 0; i < buttons.length; i++){
//     buttons[i].onclick = function(){
//         var data = this.getAttribute('data-op');
//         calcForm(data)
//     }
// }

// function calcForm(op){
//     let a = parseInt(inp1.value);
//     let b = parseInt(inp2.value);
//     let res = 0
//     if (op === '+'){
//         res = a + b
//     }
//     else if (op === '-'){
//         res = a - b
//     }
//     else if (op === '*'){
//         res = a * b
//     }
//     else if(op === '/'){
//         res = a / b
//     }

//     else {
//        res = 'что-то пошло не так'
//     }
//     span.innerHTML = res
// }




// const Person  = class {
//     constructor(name, age, budget){
//         this.name = name;
//         this.age = age;
//         this.budget = budget;
//     }
    
// }
// let person1 = new Person('Слава', 27, 2600)
// let person2 = new Person('Катя', 26, 2500)
// let person3 = new Person('Ольга', 25, 2200)

// console.log(person1.name);



// let count = 1

// for (let count=0; count<50; count++){
//     console.log(count);
    
// }


// let array = [1, 2, 3, 4]

// let res = 0;

// for(let i = 0; i < array.length; i++){
//     res = res + array[i]
// }

// console.log(res);

// let obj = {
//     'Москва': 'Россия',
//     'США': 'Вашингтон'
// }

// for (let key in obj){
//     console.log(obj[key]);
// }

// let obj = 0

// while (obj < 100){
//     console.log(obj)
//     obj++
// }


// let i = 50

// while (i < 100){
//     console.log(i);
//     i++
// }


// let monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,';
// let fruitsString = 'Яблоко, Банан, Груша';

// let b = monthString.split(', ')
// let с = fruitsString.split(', ')

// let d = monthString.concat(fruitsString);

// console.log(d);
// for(names of monthString){
//    

//     // console.log(b);

// let monthArray = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя',];
// let monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,';

// // for(month of monthArray){
// //     // month.join('/')

    
// // }

// monthArray.join()
// console.log(monthArray);


// monthString.split('-')
// console.log(monthString);



// const nums = ['1','2','3']

// const res = nums.reduce((sum, elem) => sum ** elem)


// console.log(res);
// for(num of nums){
//    let c = num**2

//    console.log(c);
// }

// const num = [1, 2, 3, 4]
// const dbls = nums.map(num => num * 2);

//     // console.log(dbls);

// const numbers = nums.toLocaleString().reduce();

// console.log(numbers);










// const people = [
//     {name: 'Святослав', age: 26},
//     {name: 'Катя', age: 25},
//     {name: 'Миша', age: 15}
// ]

// for (let i = 0; i<people.length; i++){
//     // console.log(people[i].age);
// }

// for (person of people){
//     // console.log(person);
// }

// // people.forEach((person)=>{
// //     console.log(person);
// // })

// // people.forEach(person => console.log(person))


// const newPeople = people.map(person => {
//     return person.name 
// })

// // console.log(newPeople);

// // const adults = people.filter(person => {
// //     if (person.age >= 18){
// //         return true 
// //     }
// // })

// // const adults = people.filter(person => person.age >= 18)
// // console.log(adults);



// // const amount = people.reduce((total, person) => {
// //     return total + person.age
// // }, 0)

// // console.log(amount);



// const amount = people.reduce((total, person) => total + person.age, 0)

// console.log(amount);


// let str = 'aaa@bbb@ccc';
// // let strMod = str.replace(/@/g, '!')
// let strMod1 = str.substr(4, 3); //substr(откуда отрезать, сколько отрезать)
// let strMod2 = str.substring(4, 7); //substring(откуда отрезать, докуда отрезать)
// let strMod3 = str.slice(4, 7); //slice(откуда отрезать, докуда отрезать)
// console.log(strMod1);
// console.log(strMod2);
// console.log(strMod3);


// let dateStr = 'Всем привет! dfgdfgd';
// let newDate = dateStr.split('').reverse().join('');
// console.log(newDate);

// var myString = 'Привет, мир. Как дела?';
// var splits = myString.split(' ', 3);

// console.log(splits);

// let str = 'я учу javascript!';ю
// let strSymbol = str.split('').reverse().join('').toUpperCase()[16]


// let x = myFunction(4, 3);       

// function myFunction(a, b) {
//    console.log(a * b);               
// }


// const sum = (a, b) => a + b
// console.log(sum(40, 6));
// let p = document.querySelector('.p').innerHTML = sum(40, 6)

//  const openMessage = (a, b) =>{
//     console.log(a + b);
//     console.log(a, b);
//  }

//  openMessage(5, 6)


// let counter = 0
// const interval =  setInterval(function(){
//     if(counter === 5){
//         clearInterval(interval)
//     }
//     console.log(++counter);
//  }, 1000)


// let name1 = 'Слава'
// let name2 = 'Катя'
// let counter = 0
// const interval = setInterval(function(){
//     console.log(++counter);
//     if(counter === 1){
//         console.log('Привет -', name1);
//     } else if(counter === 2){
//         console.log('Привет -', name2);
//     } else {
//         console.log('Всем привет!');
//         clearInterval(interval)
//     }
    
    
// }, 1000);





// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
//     }    
// }

// start();

// const personalMovieDB ={
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
//     for (let i = 0; i<2; i++){
//         const a = prompt('Один из просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if(a != null && b != null && a != '' && b != '' && a.length<50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// // rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10){
//         console.log('Просмотрено фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//         console.log('Вы классный зритель');
//     } else if(personalMovieDB.count >= 30){
//         console.log('Вы киноман!');
//     } else {
//         console.log('Произошла ошибка!');
//     }
// }

// // detectPersonalLevel();

// function showMyDB(hidden){
//     if(!hidden ){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYoueGenres(){
//     for (let i = 1; i <=3; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYoueGenres();


// function first(){
//     setTimeout(function(){
//         console.log(1);
//     }, 1000);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`${lang}`);
//     callback();
// }

// function done(){
//     console.log('я прошел этот урок');
// }

// learnJS('js', done);


const options = {
    name: 'Вася',
    width: 1024,  
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red' 
    } 
};

console.log(options);
// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`${i}, ${options[key][i]}`);
//         }
//     } else {
//         console.log(`${key}, ${options}`);
//     }
// }



// деструктуризация
const {border, bg} = options.colors
console.log(border, bg)