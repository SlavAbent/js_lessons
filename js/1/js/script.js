// const a = 5
// const b = 7
// const c = (a + b) / a

// console.log(c)


// const name = 'Slava'
// const age = 27

// const output = 'Привет, меня зовут ' + name +', и мне ' + 27 +' лет!' 
// console.log(output)


const date = 2020; //текущая дата
const year = 1993
const MyYear = date - year
const name = 'Святослав'
const age = MyYear

function getAge(){
    return age
}

// document.write('Привет! Меня зовут '+ name +'! Мой возраст '+ MyYear +' лет!');
// document.write(`Привет, меня зовут ${name}! Мой возвраст: ${age < 20 ? 'Ваш возраст меньше 20' : 'Ваш возраст подходит'} лет!`)
// document.write(`Привет, меня зовут ${name}! Мой возвраст ${getAge()} лет!`)

// let d = document.createElement('div');
// d.className = 'divMain';
// d.innerHTML = `<p>Меня звоут ${name}! Мой возраст ${getAge()} лет!</p>`;
// document.body.append(d);

let d = document.write(`
    <div class="divMain1">
        <p>Меня звоут ${name}! Мой возраст ${getAge()} лет!</p>
    </div>
`)
document.body.append(d);
