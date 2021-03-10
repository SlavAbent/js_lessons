const person = {
    name: 'Alex',
    age: 25,

    get UserAge(){
        return this.age; 
    },

    set UserAge(num){
        this.age = num;
    }
};

console.log(person.age);
console.log(person.UserAge = 30);