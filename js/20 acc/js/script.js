

const accordions = document.querySelectorAll('.accordion_item');

// const contentData = [
//   {
//     id: 1,
//     title: 'title1',
//     content: 'content1'
//   },
//   {
//     id: 2,
//     title: 'title2',
//     content: 'content2'
//   },
//   {
//     id: 3,
//     title: 'title3',
//     content: 'content3'
//   },
// ];

for(item of accordions){
  item.addEventListener('click', function(){
    if(this.classList.contains('active')){
      this.classList.remove('active');
    } else {
      for(el of accordions){
        el.classList.remove('active');
      }
      this.classList.add('active');
    }
  });
}