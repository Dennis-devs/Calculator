let add = function(a, b){
    return a + b  
}
let subtract = function(a, b){
    return a - b 
}
let multiply = function(a, b){
    return a * b   
}
let divide = function(a, b){
    return a/b   
}

function operate(a, b, operator){
    
    (`${a} ${operator} ${b}` + ' = ' + divide(a, b) )
    
}
operate(8, 4, '/')

let screen = document.querySelector(".screen");
let num = document.querySelectorAll(".print");

num.forEach(item => item.addEventListener("click", function(){
    let vals = item.innerHTML
    let disp = screen.innerHTML = vals
}))