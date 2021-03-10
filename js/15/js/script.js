// const Animal =  {
//     name: 'Animal',
//     age: 12,
//     hasTail: true
// }


class Animal  {

    static type = 'ANIMAL'
    constructor(options){
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice(){
        console.log('i am Animal');
    }
}


// const animal = new Animal({
//     name: 'Animal',
//     age: 12,
//     hasTail: true
// })

class Cat  extends Animal {
    static type = 'CAT'

    constructor(options){
        super(options)
        this.color = options.color
    }

    voice(){
        super.voice()
        console.log('i am cat');
    }

    
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})