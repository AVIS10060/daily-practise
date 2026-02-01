const SOC = (arr) =>{
    let sum = 0

    // let summ = arr.reduce((accum,curr) =>{
    //     accum = curr
    //     accum = accum *curr
    //     sum += accum
    //     return sum
    // },0)
    // return summ

    for(let element of arr){
        sum +=  (element*element)
        
    }
    return sum

}


console.log(SOC([1,2,3]))