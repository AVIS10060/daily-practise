const CM = (arr) =>{


    if(arr.length === 0){
        return 0
    }


    let result = 0

    return arr.reduce((acc,curr)=>{
        acc = acc + curr

        result = acc
        return result
    },0)/arr.length

    
}


console.log(CM([]))