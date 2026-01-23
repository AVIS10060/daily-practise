console.log("FindLongestWord module loaded");



const findLongestWord = (str)=>{
    if(str.trim().length === 0){
        return false
    }

    let words = str.split(" ")
    words = words.sort((a,b) => b.length - a.length)
    console.log(words[0])


    // another method 

    // words.reduce((accum,currWord)=>(currWord.length > accum.length ? currWord : accum),"")

    



}


findLongestWord("watch thapaji technical javascript course on youtube")  