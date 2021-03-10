// const person = {
//     name: 'Person',
//     age: 27,
//     hasWife: false
// }


class Person {
    // static type = 'PERSON'

    constructor(options){
        this.name = options.name,
        this.age = options.age,
        this.hasWife = options.hasWife
    }

    voice(){
        console.log('i am a Person');
    }
}

// const person = new Person({
//     name: 'Person',
//     age: 27,
//     hasWife: false
// })


class People extends Person {
    // static type = 'Kate'

    constructor(options){
        super(options)
        this.color = options.color
    }

    voice(){
        super.voice()
        console.log('i am Kate');
    }

    get ageInfo(){
        return this.age + 1 
    }

    set ageInfo(newAge){
        this.age = newAge
        newAge = 8
    }
}


const people = new People({
    name: 'Person2',
    age: 0,
    hasWife: false,
    color: 'white'
})