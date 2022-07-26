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
    console.log()
    let arr = disp.match(/\d+/g)
    console.log()
    let regex = /\d+(?=\D)?/g
    let nums = disp.match(regex)
    console.log(nums)
    let regex2 = /\D(?=\d)/g
    let signs = disp.match(regex2)
    console.log(signs)

    let operate = function(a, b, operator){
        if(operator == '+'){
            return add(a, b)
        }
        else if(operator == '-'){
            return subtract(a, b)
        }
        else if(operator == 'x'){
            return multiply(a, b)
        }
        else 
            return divide(a, b)
    }
    let disp2;
    disp2 = document.querySelector(".screen2")
    let equal = document.querySelector(".equal")
    equal.addEventListener("click", function(){
        disp2.innerHTML = operate(nums[0], nums[1], signs[0])

    })

})) 
let dispArr = []
let del = document.querySelector(".del")
del.addEventListener("click", function(){
    dispArr.push(screen.innerHTML)
    dispArr.pop()
    screen.innerHTML = dispArr.join
    
})
let disp2;
disp2 = document.querySelector(".screen2")
let clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    screen.innerHTML = ""
    disp2.innerHTML = ""
})

/*num.forEach(item => item.addEventListener("click", function(){
    let vals = item.innerHTML
    let disp = screen.innerHTML = vals
}))*/