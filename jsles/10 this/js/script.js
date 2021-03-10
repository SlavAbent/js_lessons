


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         // console.log(this);
//         function shout(){
//             console.log(this);
//         }

//         shout();
//     }
// };

// obj.sum();


// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;

// }

// let slava = new User('Slava', 27);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'Slava'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num){
//     return this*num;
// }

// const double = count.bind(2)
// console.log(double(3));

//1) обычная функция: this -> window, но если 'use strict' -> undefined
//2) контекст у методов - сам объект
//3) this в конструкторах и классах - новый экземпляр объекта
//4) ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function(){
//         const say = () => {
//             console.log(this);
//         };

//         say();
//     }
// };

// obj.sayNumber();


// const double = a => a * 2;
// console.log(double(4));
 btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
    console.log(this);
    
});