const SW = (str,word) =>{

    // return str.toLowerCase().startsWith(word.toLowerCase())
    return str.toLowerCase().slice(0,word.length) === word.toLowerCase()
}

console.log(SW("Hello World","hello"))
console.log(SW("Hello World","World"))