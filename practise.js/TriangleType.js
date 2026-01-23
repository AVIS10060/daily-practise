const TriangleType = (a,b,c) => {

    

    if( a === b && b === c){
        return "equilateral"
    }
    else if( a === b  && b !== c){
        return "isos"
    }
     else if( a === c && b  !== c){
        return "isos"
    }
     else if( b === c && c!== a){
        return "isosceles"
    }
    
    return "scalene"


}


console.log(TriangleType(5,2,3))