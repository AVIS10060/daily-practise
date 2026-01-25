// first method 


const FindFactorial = (n)=>{
    if( n===0 || n===1){
        return 1
    }


    return n * FindFactorial(n-1)
}


console.log(FindFactorial(4))