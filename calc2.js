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
    else if (parseInt(b) == 0){return "...To Infinity and beyond"}
    else{return parseInt(a) / parseInt(b)}   
}

/*Populate screen when empty and when not*/
screen = document.querySelector(".screen");
let num = document.querySelectorAll(".print");

    num.forEach(item => item.addEventListener("click", function(){
        if(screen.innerHTML !== ""){
            let vals = item.innerHTML
            screen.insertAdjacentText("beforeend", vals)   
            disp = screen.innerHTML
            console.log(disp)
        }
        else{
            let vals = item.innerHTML
            screen.innerHTML = vals
            let disps = screen.innerHTML
            console.log(disps)
        
        }

/*Save first number and operator selected*/
    disp = screen.innerHTML
    /*let arr = disp.match(/\d+/g)*/

    let regex = /\d+(?=\D)?/g
    let nums = disp.match(regex)
    console.log(nums)
    console.log(nums.slice(-1).join())
    let regex2 = /\D(?=\d)?/g
    let signs = disp.match(regex2)
    console.log(signs)
    console.log(signs.slice(-1).join())
    

    let operate = function(a, b, operator){
        if(operator == '+'){
            console.log(add(a,b))
            return add(a, b)
        }
        else if(operator == '-'){
            console.log(subtract(a,b))
            return subtract(a, b)
        }
        else if(operator == 'x'){
            console.log(multiply(a,b))
            return multiply(a, b)
        }
        else 
        console.log(divide(a,b))
            return divide(a, b)
    }

    let disp2 ;
    let operator;
    let equal;

    disp2 = document.querySelector(".screenB")
    if (nums.length === 2){
        equal = document.querySelector(".equal")
        equal.addEventListener("click", function(){
            disp2.innerHTML = operate(nums[0], nums[1], signs[0]) 
            return disp2.innerHTML   
    })
        operator = document.querySelectorAll(".operator")
        operator.forEach(item => item.addEventListener("click", function(){
            disp2.innerHTML = operate(nums[0], nums[1], signs[0])
            return disp2.innerHTML
    }))
    }
    
    else if(nums.length > 2){
        equal = document.querySelector(".equal")
        equal.addEventListener("click", function(){
            disp2.innerHTML = operate(disp2.innerHTML, nums.slice(-1).join(), signs.slice(-1).join())
            return disp2.innerHTML
    })
    
    operator = document.querySelectorAll(".operator")
    operator.forEach(item => item.addEventListener("click", function(){
        disp2.innerHTML = operate(disp2.innerHTML, nums.slice(-1).join(), signs.slice(-1).join())
        return disp2.innerHTML
    }))
}

        
})) 


let del = document.querySelector(".del")
del.addEventListener("click", function(){
let arr = screen.innerHTML.split('')
arr.splice(-1)
screen.innerHTML = arr.join('')
})

let disp2;
disp2 = document.querySelector(".screenB")
let clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    screen.innerHTML = ""
    disp2.innerHTML = ""
})

/*num.forEach(item => item.addEventListener("click", function(){
    let vals = item.innerHTML
    let disp = screen.innerHTML = vals
}))*/

/*else if(nums.length === 3) {
        disp2 = document.querySelector(".screenB")
        equal = document.querySelector(".equal")
        equal.addEventListener("click", function(){
            disp2.innerHTML = operate(disp2.innerHTML, nums[2], signs[1])
            console.log(disp2.innerHTML)
            return disp2.innerHTML
        })
        
        operator = document.querySelectorAll(".operator")
        operator.forEach(item => item.addEventListener("click", function(){
            disp2.innerHTML = operate(disp2.innerHTML, nums[2], signs[1]) 
        }))
    }*/