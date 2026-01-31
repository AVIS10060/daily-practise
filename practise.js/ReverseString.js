const RS = (str)=>{

    str = str.trim().split('')
    console.log(str)
    let j = str.length

    for(let i = 0 ; i < j ; i++){

        let temp = str[i]
        str[i] = str[j]
        str[j] = temp

        j--

    }
    str = str.join('')
    return str
}

console.log(RS(" hello world "))