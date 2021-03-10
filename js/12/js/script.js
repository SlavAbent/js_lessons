let elems = document.querySelectorAll('.count-buttons__table-td');

for (let i = elems.length - 1; i >= 0; i--) {
  elems[i].addEventListener('click', myFunc, false);
}

function myFunc() {
  document.getElementById('qty').value = this.innerHTML;
}




// let p = document.querySelector('.p');
// let input = document.querySelector('.input');
// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     input.value = p.innerHTML
// }

// // const myFuncts = () => {

    
// // }
// // p.addEventListener('click', myFuncts, false)
