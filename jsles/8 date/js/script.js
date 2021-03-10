
const now = new Date('2020-05-01');
// Date.parse('2020-05-01'); 

// console.log(now.getMonth()); // месяц  январь 0-ой месяц
// console.log(now.getDate()); // дата  
// console.log(now.getDay()); // день  вс  0-ой день
// console.log(now.getUTCHours()); // часовой пояс

// console.log(now.getTimezoneOffset());  //-300минут разница
// console.log(now.getTime());  //милисекунды с 1970 года

// console.log(now.setHours(18, 40)); //установить час, минуту
// console.log(now.setHours(40)); //40 часов - js сам переводит в 24. остальные 16 переводит на сл. день
// console.log(now);


let start = new Date(); //текущая дата

for(let i=0; i<100000;i++){
    let some = i ** 3;
}

let end = new Date();

alert(`${end - start}`);