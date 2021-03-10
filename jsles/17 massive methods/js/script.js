

//filter

// const names = ['Ivan', 'Slava', 'Kate', 'Vladilen'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);


// map -  создает новый массив на основе старого

// let answers = ['IvAn', 'AnnA', 'Hello'];

// // const res = answers.map(item =>{
// //     return item.toLowerCase();
// // });

// const res = answers.map(item => item.toLowerCase());

// console.log(res);


//every/some - возвращают только bool(true/false)

// const some = [4, '5', '6'];

// console.log(some.some(item => typeof(item) === 'number')); // - лишь один элемент
// console.log(some.every(item => typeof(item) === 'number')); // - все элементы


// reduce

// const arr = [4, 5, 1, 3, 2, 6];
// const res = arr.reduce((sum, current) =>  sum + current);
// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// // const res = arr.reduce((sum, current) =>  sum + ', ' +current);
// const res = arr.reduce((sum, current) =>  `${sum}, ${current}`);
// console.log(res);


// const arr = [4, 5, 1, 3, 2, 6];
// const res = arr.reduce((sum, current) =>  sum + current, 3);
// console.log(res);


// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);

