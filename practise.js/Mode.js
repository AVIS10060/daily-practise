

const numbers = [1,2,2,4,4,4,4,4,4,3,5,6,3]

const count = {}
let max = 0
let mode = 0


for(let element of numbers){
    count[element] = (count[element] || 0) + 1
    if(count[element]>max){
        max = count[element]
        mode = element

    }
}

console.log(mode)



