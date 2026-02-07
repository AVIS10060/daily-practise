const TS = (str,len) => {

    str = str.slice(0,len).concat(" ...")
    
    return str

}


console.log(TS("hello world",8))