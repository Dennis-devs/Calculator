let add = function(a, b){
    return a + b  
}

let subtract = function(a, b){
    return a - b 
}
subtract(4, 1)
let multiply = function(a, b){
    return a * b   
}
let divide = function(a, b){
    return a/b   
}

function operate(a, b, operator){
    
    console.log(`${a} ${operator} ${b}` + ' = ' + divide(a, b) )
    
}
operate(8, 4, '/')