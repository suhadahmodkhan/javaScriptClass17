const object = {
    name : "hakim",
    roll : 5 ,
    batch : 2247 ,
    class : 13 
}
// console.log(object)

const objectApi = JSON.stringify(object)
console.log(objectApi)
const {name , ...rest} = object ;
// console.log( amarName = name ,rest)


const freeze = Object.freeze(object)
delete object.roll 
// console.log(object)


