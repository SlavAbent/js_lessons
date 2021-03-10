

// function User(name, age){
//     this.name = name;
//     this.age = age;

//     this.say = function(){
//         console.log(`Имя: ${this.name}! Возраст ${this.age}`);
//     };
// }


// const slava = new User('Slava', 27);
// console.log(slava.name);
// console.log(slava.age);

// slava.age = 30;
// slava.name = 'Alex';

// slava.say();



// function User(name, age){
//     this.name = name;
//     let userAge = age;

//     this.say = function(){
//         console.log(`Имя: ${this.name}! Возраст ${userAge}`);
//     };

//     this.getAge = function(){
//         return userAge;
//     };

//     this.setAge = function(age){
//         if(typeof age === 'number' && age > 0 && age < 110){
//             userAge = age;
//         } else {
//             console.log('неизвестно');
//         }
//     };
// }


// const slava = new User('Slava', 27);
// console.log(slava.name);
// console.log(slava.getAge());

// slava.setAge(30);
// slava.setAge(300);
// slava.name = 'Alex';

// slava.say();


class User{
    constructor(name, age){
        this.name = name;
        this._age = age;
    }

    #surname = 'Abent';

    say () {
        console.log(`Имя: ${this.name} ${this.#surname}! Возраст ${this._age}`);
    }

    get age(){
        return this._age;
    }

    set age(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('неизвестно');
        }
    }
}


const slava = new User('Slava', 27);
console.log(slava.surname);
slava.say();