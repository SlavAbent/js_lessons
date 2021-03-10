function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name){
    console.log(`Пользователь ${this.name} ушел`);
}

const slava = new User('Slava', 27);
const alex = new User('Alex', 20);

slava.exit();

slava.hello();
alex.hello();

console.log(slava);
console.log(alex);

function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    } 

    console.log(sum());
}

showThis(4, 5);



