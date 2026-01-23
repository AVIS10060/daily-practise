

const HashTagGenerator = (str) => {
    if(str.length>280 || str.trim().length === 0){
        return false
    }

    
    // str = str.trim().split(/\s+/); split group of spaces to one 
    str = str.split(" ")
    str = str.map((curr)=> 
        // curr.replace(curr[0],curr[0].toUpperCase())
    curr[0].toUpperCase() + curr.slice(1)
)
console.log(str)

    str = `#${str.join("")}`

    return str



}


console.log(HashTagGenerator("my name is avi sharma"))
