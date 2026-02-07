const RS = (str,n) =>{

    // let arr = []

    if(n<1){
        return str
    }

    // for(let i=0;i<n;i++){
    //     arr[i] = str
        
    // }
    


    // const result = arr.join("")
   return str.repeat(n)

}


console.log(RS("abc",3))