let images = document.querySelectorAll('.container .images img');

let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let i = 0


// prev.onclick = () => {
//     images[i].style.display = 'none'
//     i--
//     if (i < 0){
//         i = images.length -1 
//     }
//     images[i].style.display = 'block'
// }

// next.onclick = () => {
//     images[i].style.display = 'none'
//     i++
//     if (i >= images.length){
//         i = 0
//     }
//     images[i].style.display = 'block'
// }




prev.onclick = () => {
    images[i].style.display = 'none'
    i--
    if(i < 0){
        i = images.length - 1
    }
    images[i].style.display = 'block'
}

next.onclick = () => {
    images[i].style.display = 'none'
    i++
    if(i >= images.length){
        i = 0
    }
    images[i].style.display = 'block'
}
