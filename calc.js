/*Equations*/ 
let screen;
screen = document.querySelector(".screen");
let disp;
disp = screen.innerHTML
let add = function(a, b){
    if(b == ""){return "Syntax Error"}
    else if(a == ""){return disp}
    else {return parseInt(a) + parseInt(b)} 
}
let subtract = function(a, b){
    if(b == ""){return "Syntax Error"}
    else if(a == ""){return disp}
    else {return parseInt(a) - parseInt(b)} 
}
let multiply = function(a, b){
    if(a == "" || b == ""){return "Syntax Error"}
    else {return parseInt(a) * parseInt(b)}
}
let divide = function(a, b){
    if(a == "" || b == ""){return "Syntax Error"}
    else if (parseInt(b) == 0){return "Math Error"}
    else{return parseInt(a) / parseInt(b)}   
}

/*Populate screen when empty and when not*/
screen = document.querySelector(".screen");
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
    console.log(disp)
    }

/*Save first number and operator selected*/
    disp = screen.innerHTML
    let arr1 = []
    let arr = disp.split("")
    console.log(arr)
    let operators = document.querySelectorAll(".operator")
    operators.forEach(item => arr1.push(item.innerHTML))
    console.log()

    let sign = arr.filter(item => arr1.includes(item))
    console.log(sign)
    
    let num1 = arr.slice(0, arr.indexOf(sign[0])).join('')
    console.log(num1)
    let num2 = (arr.slice(arr.indexOf(sign[0]) + 1, arr.indexOf(sign[1])).join('')) || (arr.slice(arr.indexOf(sign[0])).join(''))  
    console.log(num2)
    let num3 = (arr.slice(arr.indexOf(sign[1]) + 1, arr.indexOf(sign[2])).join('')) || (arr.slice(arr.indexOf(sign[1]) + 1).join(''))
    console.log(num3)
    let num4 = arr.slice(arr.indexOf(sign[2]) + 1, arr.indexOf(sign[3])).join('')    
    console.log(num4)
    let num5 = arr.slice(arr.indexOf(sign[3]) + 1, arr.indexOf(sign[4])).join('')    
    console.log(num5)

/*call equations*/
    function Ops(){
    /*for (let i = 0; i < sign.length; i++) {*/
    
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
    
    `${a} ${operator} ${b}` + ' = ' + Ops() 
    
}

let equal = document.querySelector(".equal")
equal.addEventListener("click", function(){

    operate(num1, num2, sign[0])
    screen.innerHTML = Ops()

})

    
}))

/*let operators = document.querySelectorAll(".operator")
function Ops(){
operators.forEach(item => item.addEventListener("click", function(){
    let num1 = num1
    let num2 = num2
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
    operate(arr1, num2, sign[0])
    screen.innerHTML = Ops()
})*/
let dispArr = []
let del = document.querySelector(".del")
del.addEventListener("click", function(){
    dispArr.push(screen.innerHTML)
    dispArr.pop()
    screen.innerHTML = dispArr.join
    
})

let clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    screen.innerHTML = ""
})

/*num.forEach(item => item.addEventListener("click", function(){
    let vals = item.innerHTML
    let disp = screen.innerHTML = vals
}))*/