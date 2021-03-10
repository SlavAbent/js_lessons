

let accordions;

const accordionWrapper = document.querySelector('.accordion_wrapper');
console.log(accordionWrapper);


const contentData = [
  {
    id: 1,
    title: 'title1',
    content: 'content1'
  },
  {
    id: 2,
    title: 'title2',
    content: 'content2'
  },
  {
    id: 3,
    title: 'title3',
    content: 'content3'
  },
];

const createTemplate = item => {
  return `
  <div class="accordion_item">
    <div class="accordion_item-title">${item.title}</div>
    <div class="accordion_item-content">${item.content}</div>
  </div>
  `;
};



const fillHTMLList = () => {
  contentData.forEach(item => {
    accordionWrapper.innerHTML += createTemplate(item);
  });

  accordions = document.querySelectorAll('.accordion_item');
};

fillHTMLList();


if(accordions){
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
}
