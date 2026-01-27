const SumOfDigits = (n) =>{

    // let sum = 0

    // while(n>0){
    //     sum = sum + n%10
    //     n = Math.floor(n/10)
    // }

    // return sum 

    let arr = Array.from(String(n),Number)
    console.log(arr)
    return arr.reduce((accum,curr) => accum += curr,0 )




}

console.log(SumOfDigits(1234512))