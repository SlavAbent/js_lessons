const getResource = async (url) => {
  const responce = await fetch(url)

  if(!responce.ok){
    throw new Error(`${url}, ${responce.status}`)
  }

  return await responce.json()
}


getResource('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data))