const IsPallindrome = (word) =>{

    
    word = word.toLowerCase().replace(/\W/g,"")
    // word = word.trim().split("")
    // console.log(word)

    let r_str = word.split("").reverse().join("")

    return word === r_str ? true : false

    // let j = word.length - 1

    // for(let i = 0;i<j;i++){
    //     if(word[i] !== word[j]){
    //         return false
    //     }
    //     return true 
    // }

}

console.log(IsPallindrome("racecar"))