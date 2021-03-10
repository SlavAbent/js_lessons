
// class User {
//     constructor(username, password){
//         this.username = username;
//         this.password = password
//     }
// }

// let name = 'Слава'
// let last = 'Абент'

// // let name2 = 'Катя'
// // let pass2 = '0987654321'

// const person1 = new User(name, last)
// // const person2 = new User(name2, pass2)


// getFullYear() {
//     console.log(this.name1 + '' + this.last);
// }

// let a1 = 'Слава'


// class Person {
//     constructor(firstName, lastName, num) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.num = num
//     }
//     getFullName() {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }

// const person1 = new Person('slava', 10, 20)


let a1 = new Dog ('bobik', 10, 20)
let a2 = new Cat ('murzik', 1, 2)

a1.log()
a2.log()


class Animal {
    constructor(name, x, y){
        this.name = name
        this.x = x
        this.y = y
    }

    log(){
        console.log(this.name + ' ' + this.x + ' ' + this.y);
    }
}