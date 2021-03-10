// window.onload = function(e){

//     var block = document.querySelectorAll('.block');

//     for(var i=0; i<block.length; i++){
//         block[i].onclick = function(){
//             this.classList.toggle('active');
//         }
//     }
// }



$(function(){
    
    $('.wrapper').on('click', '.block', function(){
        $('.wrapper .block').removeClass('active');
        $(this).addClass('active');
    });
    $('.block').on('click', function(){
        $('.wrapper .block').removeClass('active');
        $(this).addClass('active');
    });


});
