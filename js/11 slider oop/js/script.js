window.onload = function(){
    let images = document.querySelectorAll('.gallery1 .photos img');
    let slider = new Slider(images);
    document.querySelector('.gallery1 .buttons .prev').onclick = function(){
        slider.prev();
    }
    document.querySelector('.gallery1 .buttons .next').onclick = function(){
        slider.next();
    }

    let images2 = document.querySelectorAll('.gallery2 .photos img');
    let slider2 = new Slider(images2);
    document.querySelector('.gallery2 .buttons .prev').onclick = function(){
        slider2.prev();
    }

    setInterval(function(){
        slider2.next();
    }, 3000);
    
    document.querySelector('.gallery2 .buttons .next').onclick = function(){
        slider2.next();
    }
    
}



function Slider(images){
    this.images = images;
    let i = 0

    this.prev = function(){
        this.images[i].classList.remove('showed');
        i--;
        
        if(i < 0){
            i = this.images.length - 1;
        }
        
        this.images[i].classList.add('showed');
    }

    this.next = function(){
        this.images[i].classList.remove('showed');
        i++;
        
        if(i >= this.images.length){
            i = 0;
        }
        
        this.images[i].classList.add('showed');
    }

    
}

