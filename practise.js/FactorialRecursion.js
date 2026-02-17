const FR = (n)=>{

    if(n==0 || n==1){
        return 1
    }

    return n * FR(n-1)



}


console.log(FR(4)) //////////////