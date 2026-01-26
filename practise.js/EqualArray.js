


const EqualArray = (arr1,arr2) =>{
    if(arr1.length !== arr2.length){
        return false 
    }

    return arr1.every((curr,index) => curr === arr2[index])

    





}


console.log(EqualArray([1,2,3,4],[1,2,3,4]))


