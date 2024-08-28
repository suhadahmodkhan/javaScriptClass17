let data = fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
console.log(data)