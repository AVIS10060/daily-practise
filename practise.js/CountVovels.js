const CV = (word) =>{

    if(word.trim().length === 0) return false

    word = word.toLowerCase().split("")

    let count = word.reduce((accum,curr)=>{
        if(curr === 'a' || curr === 'e'|| curr==='i'|| curr==='o' || curr==="u"){
            accum++
        }
        return accum
        
        
    },0)


    return count

    
    


}

console.log(CV(""))