function greet(name){
    console.log('Привет - ', name)
}




const arrow = (name, age, str) => {
    // console.log('Привет - ', name, age)
    let d = document.createElement('div')
    d.classList = 'div'
    d.innerHTML = `'Привет -  ${name}, ${age}, ${str}`
    document.body.append(d);
} 

// const arrow2 = name => console.log('Привет - ', name);

arrow('Святослав', 26, 11222)
// arrow2('Святослав')


for(var i =0; links.length; i++){
    links[i].onclick = function(){
        this.classList.toggle('active');
    }
}