// console.log('Запрос данных...');

// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'TV',
//         price: 2000
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000)

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => { //resolve - все хорошо; reject - что-то пошло не так.
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };


//         resolve(product);
//     }, 2000)
// });

// req.then((product) => { //выполнится, если resolve хороший в промисе
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product)
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Ошибка');
// }).finally(() => {
//     console.log('Ok');
// })

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All'); // Promise.all запустится после обработки всех промисов в массиве
// });



Promise.race([test(2000), test(1000)]).then(() => {
    console.log('Race'); //Promise.race - выполнится, если самый первый из промисов будет готов первым test(1000)
});