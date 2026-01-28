const CC = (s)=>{

    s = s.trim().split(' ')
    s = s.map((curr,index) =>{
        if(index ===0){
            return curr.toLowerCase()
        }
        return curr[0].toUpperCase() + curr.slice(1).toLowerCase()
    })
    return s.join('')


}


console.log(CC("hello world avi"))