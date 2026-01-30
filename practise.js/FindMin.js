const FM = (arr) =>{

    // let min = Number.MAX_VALUE
    // return  arr.reduce((accum,curr)=> Math.min(accum,curr),min)

    return Math.min(...arr)
    
}

console.log(FM([2,55,-6]))