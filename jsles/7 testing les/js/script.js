// const items = ['items1', 'item2', 'item3'];
// const copies = [];

// // for (let i = 0; i < items.length; i++){
// //     copies.push(items[i]);
// // }

// items.forEach( (item) => {
//     copies.push(item);
// });

// console.log(copies);


// const options = {
//     name: 'Slava',
//     lastname: 'Abent',
//     parametres: {
//         age: 27,
//         width: 178,
//         weight: 78
//     }
// };

// console.log(options);


// // for(person in options){
// //     for(let i in person[key]){
// //         console.log(`${person[key][i]}`);
// //     }
// //     console.log(`${options[person]}`);
// // }


// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            
//             const div = document.createElement('div');
//             div.innerHTML = `Свойства ${i} имеет значение ${options[key][i]}`;
//             document.body.append(div);

//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);

//     }
// }


let btns = document.querySelectorAll('.btn'),
    wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == "BUTTON"){
        console.log('Hello');
    }
});


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(1);
    });
})

const btn = document.createElement('button');
btn.classList.add('btn_p1');
wrapper.append(btn);


// const deleteElement = () =>{
//     console.log(0);
// };

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         btn.classList.toggle('btn_two');
//     });
  
// });
