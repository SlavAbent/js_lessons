

const arr = [1, 24, 34, 6435, 8];
// arr[99]  = 0;

arr.sort(compareNum);
console.log(arr);

function compareNum (a, b){
    return a - b;
}

// console.log(arr.length);
// console.log(arr);

// arr.pop(); //удаляет последний элемент
// arr.push(10);  // добавляет в конец.

// console.log(arr);


// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// for (let value of arr){
//     console.log(value);
// }


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));
