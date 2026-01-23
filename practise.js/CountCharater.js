const CountCharacter = (word,char) =>{

    word  = word.toLowerCase()
    char = char.toLowerCase()

    let totalCount  = word.split("").reduce((accum,currChar)=>{
        if(currChar === char){
            accum++;

        }
        return accum
},0)

return totalCount

  

}




console.log(CountCharacter("MissIssippi","I"))