// const sum = (a = 10, b = a * 3) => a + b
// console.log(sum())


// const sum = (a = 10, b = a * 3, c = (a + b) * 3) => a + b + c
// const c = 0
// console.log(sum())


// const res = sumAll (1, 2, 3, 4, 5)
// console.log(res)
// function sumAll (...all){
//     let result = 0
//     for (let num of all){
//         result += num
//     }

//     return result
// }


// const summary = sums (100, 200, 300)
// console.log(summary)

// function sums(...all){  //rest
//     let result = 0
//     for (let num of all){
//         result += num
//     }

//     return result
// }


// const person1 = { name: 'Svyatoslav', age: 26}
// const info = {...person1, city: 'Tyumen'}
// const main = {...person1, ...info, country: 'Russia'}
// const full = {...person1, ...info, ...main}


// console.log(person1)
// console.log(info)
// console.log(main)
// console.log(full)


// const noPassword = ({ pass, ...still }) => still
// const user = {
//   id: 100,
//   name: 'Howard Moon',
//   pass: 'Password!'
// }

// console.log(noPassword(user))





// let arr = [1, 2, 3, 4, 5]

// let res = arr.reduce(function(sum, current){
//     return sum + current

// }, 0)
// console.log(res)



// const user1 = {
//     id: 100,
//     name: 'Howard Moon',
//     password: 'Password!'
//   }
//   const removeProperty = prop => ({ [prop]: _, ...rest }) => rest
//   //                     ----       ------
//   //                          \   /
//   //                dynamic destructuring
  
//   const removePassword = removeProperty('password')
//   const removeId = removeProperty('id')
  
//   console.log(removePassword(user1) )//=> { id: 100, name: 'Howard Moon' }
//   console.log(removeId(user1))//=> { id: 100, name: 'Howard Moon' }



//   const user3 = {
//     password: 'Password!',
//     name: 'Naboo',
//     id: 300
//   }
  
//   const organize = object => ({ id: undefined, ...object })
//   //                            -------------
//   //                          /
//   //  move id to the first property
  
//   organize(user3)
//   //=> { id: 300, password: 'Password!', name: 'Naboo' }


// const renamed = ({ ID, ...object }) => ({ id: ID, ...object })

// const user = {
//   ID: 500,
//   name: "Bob Fossil"
// }

// renamed(user) //=> { id: 500, name: 'Bob Fossil' }


https://habr.com/ru/post/489550/