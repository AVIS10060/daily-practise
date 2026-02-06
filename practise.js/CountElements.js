

const numbers = [1,2,2,4,3,5,6,3]

const count = {}

for(let element of numbers){
    count[element] = (count[element] || 0) + 1
}



console.log(count)