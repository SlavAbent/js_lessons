const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};

const Jonh = Object.create(soldier);

// const Jonh = {
//     health: 100
// };

// Object.setPrototypeOf(Jonh, soldier);

Jonh.sayHello();