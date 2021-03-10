// foo /3
// bar /5
// foobar / 3 & 5

// let foo = 'foo',
//     bar = 'bar',
//     foobar = 'foobar';

// let count = 100;

// for (let i = 1; i < 100; i++){
//     console.log(i);

//     if (i % 3 === 0){
//         console.log(foo);
//     } else if (i % 5 === 0){
//         console.log(bar);
//     } else if(i % 3 === 0 && i % 5 === 0){
//         console.log(foobar);
//     }
// }


class Foobar {
    constructor(){
        let iterations = Math.floor(Math.random() * 100);
        for (let i = 0; i < iterations; i++ ){
            if (i % 3){
                this.foo();
            } else if (i % 2){
                this.bar();
            }
        }
    }

    foo(){
        console.log('foo');
    }

    bar(){
        console.log('bar');
    }
}