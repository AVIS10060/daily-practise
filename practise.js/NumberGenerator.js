const NG = (a,b) =>{

    let arr = []
    // arr[0] = a

    // arr.length = b-a+1
    // console.log(arr.length)

    // for(let i = 1;i<arr.length;i++){
    //     arr[i] = a + i
        
    // }
    while(a<=b){
        arr.push(a)
        a++
    }



    return arr    
}


console.log(NG(0,5))