const NG = (a,b,arr = []) =>{
    if(a <= b){
    arr.push(a)
    return NG(a+1,b,arr)  
        
    }
    return arr

      
}




console.log(NG(0,5))