const RD = (arr) =>{


    let newArr = [...new Set(arr)]
    return newArr
}

console.log(RD([1,2,3,1]))