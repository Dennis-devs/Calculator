/*Equations*/ 
let add = function(a, b){
    return  parseInt(a) + parseInt(b)  
}
let subtract = function(a, b){
    return  parseInt(a) - parseInt(b) 
}
let multiply = function(a, b){
    return  parseInt(a) * parseInt(b)   
}
let divide = function(a, b){
    return  parseInt(a) / parseInt(b)   
}

/*Populate screen when empty and when not*/
let screen = document.querySelector(".screen");
let num = document.querySelectorAll(".print");

let dispVal = num.forEach(item => item.addEventListener("click", function(){
    if(screen.innerHTML !== ""){
        let vals = item.innerHTML
        screen.insertAdjacentText("beforeend", vals)   
        let disp = screen.innerHTML
        console.log(disp)
    }
    else{
    let vals = item.innerHTML
    let disp = screen.innerHTML = vals
    let screen2 = document.querySelector(".screen")

    console.log(disp)
    }

/*Save first number and operator selected*/
    let disp = screen.innerHTML
    let arr1 = []
    let arr = disp.split("")
    console.log(arr)
    let operators = document.querySelectorAll(".operator")
    operators.forEach(item => arr1.push(item.innerHTML))
    console.log()

    let sign = arr.filter(item => arr1.includes(item))
    console.log(sign)
    
    let arr2 = arr.slice(0, arr.indexOf(sign[0])).join('')
        console.log(arr2)
    let arr3 = arr.slice(arr.indexOf(sign[0]) + 1).join('')    
    console.log(arr3)
    
/*call equations*/
    function Ops(){
    let num1 = arr2
    let num2 = arr3
    if(sign[0] == "+"){
        return add(num1, num2)
    } 
    else if(sign[0] == "-"){
        return subtract(num1, num2)
    }
    else if(sign[0] == "x"){
        return multiply(num1, num2)
    }
    else if(sign[0]){
        return divide(num1, num2)
    }
}

function operate(a, b, operator){
    
    (`${a} ${operator} ${b}` + ' = ' + screen.html )
    
}

let equal = document.querySelector(".equal")
equal.addEventListener("click", function(){

    if(arr3 == undefined){
        screen.innerHtml = 'Syntax Error'
    } 
    else{
    operate(arr2, arr3, sign[0])
    screen.innerHTML = Ops()
    }
})

    
}))

let operation;
/*let operators = document.querySelectorAll(".operator")
function Ops(){
operators.forEach(item => item.addEventListener("click", function(){
    let num1 = arr2
    let num2 = arr3
    if(sign[0] == "+"){
        add(num1, num2)
    } 
    else if(sign[0] == "-"){
        subtract(num1, num2)
    }
    else if(sign[0] == "x"){
        multiply(num1, num2)
    }
    else if(sign[0] == "&#247;"){
        divide(num1, num2)
    }
}*/

/*let equal = document.querySelector(".equal")
equal.addEventListener("click", function(){
    operate(arr1, arr3, sign[0])
    screen.innerHTML = Ops()
})*/

let clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    screen.innerHTML = ""
})

/*num.forEach(item => item.addEventListener("click", function(){
    let vals = item.innerHTML
    let disp = screen.innerHTML = vals
}))*/