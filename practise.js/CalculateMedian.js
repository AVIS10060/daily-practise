import React from 'react'

function CalculateMedian(arr) {

    let newArr = arr.sort((a,b)=>a-b)
    console.log(newArr)

    if(newArr.length === 0){
        return 0
    }

  
    else if((newArr.length)%2 !== 0){
        let i = Math.floor(newArr.length/2)
        return newArr[i]
    }

    let i = newArr.length/2


    return (newArr[i] + newArr[i-1])/2

  
}

console.log(CalculateMedian([3,3,5,9,15]))
console.log(CalculateMedian([3,5,7,9]))
console.log(CalculateMedian([])) //