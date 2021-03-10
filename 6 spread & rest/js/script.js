// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылка
// copy.a = 11;

// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);


const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));


const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();
newArray[1] = 'asf';

// console.log(newArray);
// console.log(oldArray);


// SPREAD

const video = ['youtube', 'vimeo', 'twitch'],
      blogs = ['wp', 'dtf'],
      internet = [...video, ...blogs, 'world wide web'];

      console.log(internet);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);




const array = ['a', 'b'];

const newAar = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

// SPREAD полностью копирует массив

var arr = [1, 2, 3, 4, 5];
var data = [...arr];
// console.log(data); // [1, 2, 3, 4, 5]


// //Важно понимать, что при подобном использовании оператора ... происходит именно копирование всех свойств, а не ссылки на массив.

// var arr = [1, 2, 3, 4, 5];
// var data = [...arr];
// var copy = arr;

// arr === data; // false − ссылки отличаются − два разных массива
// arr === copy; // true − две переменные ссылаются на один массив


// // REST


// function sum(a, b){  // <- ...rest    sum(a, b, ...rest), где rest хранит в себе массив 3,4,5
//         return a + b;
// }

// const numbers = ['1', '2', '3', '4', '5']


// // spread
// console.log(sum(...numbers));


// let carsOne = ['ford', 'toyota', 'lexus'],
//     carsTwo = ['renault', 'porsche', 'lamborghini'],
//     carsAll = [...carsOne, ...carsTwo];

//     // console.log(carsAll.push('lada'));

//     console.log(carsAll.join(', '));



// let carsMarks = ['infinity', ...carsAll]
// // console.log(carsMarks);


// // carsMarks.unshift('lada');

// // for (car of carsMarks){
// //     console.log(car);
// // }

