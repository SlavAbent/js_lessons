// let a = 5
// let b = a

// b = b + 5

// // console.log(a);
// // console.log(b);


// const obj = {
//      a: 5,
//      b: 1
// }

// const copy = obj

// copy.a = 10

// console.log(obj);


// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key]
//     }

//     return objCopy
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(numbers)

// console.log(newNumbers);

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }


// const add = {
//     d: 17,
//     e: 20
// }

// console.log(Object.assign(numbers, add))

// SPREAD
// const video = ['youtube', 'twitch', 'vimeo'],
//     blogs = ['wordpress', 'livejournal'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);]]



// const nums = (a, b) => {
//     return a + b
// };

// console.log(nums(7, 3));


// console.log(nums(2, 8));

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: () => {
//         console.log('Hello');
//     }
// }

// const Slava = Object.create(soldier)


// Slava.sayHello();


// console.log(4 +  +'5');


// let incr = 10,
//     decr = 10;


//     console.log(++incr);
//     console.log(--decr);


//     console.log(5%2);

//     console.log(2*4 == '8');

// const person = {
//     name: 'Slava',
//     lastname: 'Abent',
//     voice(){
//         console.log('Hi');
//     }
// }

// const info = {
//     age: 27,
//     bornYear: 1993
// }
// function showMessage(person, info){
//     console.log(person, info);
// }
// showMessage(person.voice(), info.bornYear)


// let inp1 = document.querySelector('.inp1'),
//     inp2 = document.querySelector('.inp2').value,
//     div = document.querySelector('.div'),
//     plus = document.querySelector('.plus'),
//     minus = document.querySelector('.minus'),
//     i = 0;



//     plus.addEventListener('click', function(){
//         div.innerText++;
//         inp1.value++ - 1 == div.innerHTML
//         console.log(inp1.value);
//         console.log(div.innerHTML);
//     });
//     minus.addEventListener('click', function(){
//         div.innerText--;
//         if(minus <= 0){
//             minus = 1;
//         } 
//     });

// let calculate = document.getElementById("calculation");
// let count = document.getElementById("buttonCountNumber");
// calculation = document.getElementById("calculation").innerHTML;

// document.getElementById("buttonCountPlus").onclick = function() {
//     count.innerHTML++;
//     let countPlus = count.innerHTML;
//     calculate.innerHTML = calculations(countPlus) ;
// }

// document.getElementById("buttonCountMinus").onclick = function() {
//   let countMinus = count.innerHTML;
//   if(+countMinus >= 2){
//     count.innerHTML--;
//     let countMinus = count.innerHTML;
//     calculate.innerHTML = calculations(countMinus) ;
//   }
// }

// calculations = (count) => {
//   return (+count)*(+calculation);

// }


let btnplus = document.querySelector('.btnplus'),
    btnminus = document.querySelector('.btnminus'),
    cnt = document.querySelector('.btncount'),
    sum = document.querySelector('.sum'),
    summary = document.querySelector('.sum').innerHTML;

btnplus.onclick = () => {
  cnt.innerHTML++;
  let cntPlus = cnt.innerHTML;
  console.log(cntPlus);
  sum.innerHTML = summarys(cntPlus)
}
btnminus.onclick = () => {
  let cntMinus = cnt.innerHTML;

  if(+cntMinus >= 2){
    cnt.innerHTML--;
    let cntMinus = cnt.innerHTML;
    console.log(cntMinus);
    sum.innerHTML = summarys(cntMinus)
  }
}

summarys = (cnt) => {

  return (+cnt) * (+summary)
}