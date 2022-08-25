/*EQUATIONS*/ 
let screen;
screen = document.querySelector(".screen");
let disp;
disp = screen.innerHTML
let add = function(a, b){
    return parseFloat(a) + parseFloat(b)
}
let subtract = function(a, b){
     return parseFloat(a) - parseFloat(b)
}
let multiply = function(a, b){
    return parseFloat(a) * parseFloat(b)
}
let divide = function(a, b){
    if (parseFloat(b) == 0){return "...To Infinity and Beyond"}
    else{return parseFloat(a) / parseFloat(b)}   
}
let Squaring = function(a){
    return parseFloat(a) * parseFloat(a)
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
        /*Save first number and operator selected*/
        disp = screen.innerHTML
        /*let arr = disp.match(/\d+/g)*/

        /*let regex = /\d+.?\d+?(?=\D)?/g*/
        let regex = /√?(\d*[.])?\d+/g;
        let nums = disp.match(regex);
        console.log(nums)
        console.log(nums.slice(-1).join())
        /*let regex2 = /\D(?=\d)?[^.]/g*/
        let regex2 = /[^.√\d\u00B2]/g;
        let signs = disp.match(regex2);
        console.log(signs)
        console.log(signs.slice(-1).join())
        
        let regex3 = /^[x÷]/;
        let regex4 = /\d+/
        let disp2;
        let operator;
        let equal;
        
        function allSigns(arrSign){
            return arrSign.every(sign => {
                return isNaN(sign)
            })
        }
    
        equal = document.querySelector(".equal");
        disp2 = document.querySelector(".screenB");
    
        if(isNaN(disp.split("").slice(-1).join("")) == true || regex3.test(disp.split("")[0]) == true || regex4.test(screen.innerHTML) == false){
            equal.addEventListener("click", function(){
                disp2.innerHTML = "Syntax Error"
                return disp2.innerHTML
            })
        }
        else if(screen.innerHTML.includes("\u00B2") == true){
            equal.addEventListener("click", function(){
                disp2.innerHTML = operate(disp2.innerHTML, nums.slice(-1).join(""), signs.slice(-1).join(""))
                return disp2.innerHTML
            })
            operator = document.querySelectorAll(".operator")
            operator.forEach(item => item.addEventListener("click", function(){
                disp2.innerHTML = operate(disp2.innerHTML, nums.slice(-1).join(""), signs.slice(-1).join(""))
                return disp2.innerHTML
        }))
            
        }
        else if(nums.length == 2){
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
        equal.addEventListener("click", function(){
            disp2.innerHTML = operate(disp2.innerHTML, nums.slice(-1).join(""), signs.slice(-1).join(""))
            console.log(disp2.innerHTML)
            return disp2.innerHTML
        })
        operator = document.querySelectorAll(".operator")
        operator.forEach(item => item.addEventListener("click", function(){
            disp2.innerHTML = operate(disp2.innerHTML, nums.slice(-1).join(""), signs.slice(-1).join(""))
            console.log(disp2.innerHTML)
            return disp2.innerHTML
        }))
    }
    
    /*CLEAR*/
    disp2 = document.querySelector(".screenB")
    let clear = document.querySelector(".clear")
    clear.addEventListener("click", function(){
        screen.innerHTML = ""
        disp2.innerHTML = parseInt("0")
        console.clear()
        nums.splice(0, nums.length, 0, 0)
        signs.splice(0, signs.length, "+")
    })
})) 


/*DELETE*/
let del = document.querySelector(".del");
del.addEventListener("click", function(){
    let arr = screen.innerHTML.split('');
    arr.splice(-1)
    screen.innerHTML = arr.join('')
})

 /*Pi*/
 screen = document.querySelector(".screen");
 let pi = document.querySelector(".pi")
 pi.addEventListener("click", function(){
 if(screen.innerHTML != ""){
     /*let val = parseFloat(operate(22, 7, "/")).toFixed(0)*/
     let val = pi.value
     screen.insertAdjacentText("beforeend", val)   
 }
 else {
     /*let val = parseFloat(operate(22, 7, "/")).toFixed(0);*/
     let val = pi.value
     screen.innerHTML = val;
 }
 })

 /*SQUARE ROOT */
let Root = document.querySelector(".Root")
Root.addEventListener("click", function(){
    if(screen.innerHTML != ""){
        screen.insertAdjacentText("beforeend", Root.innerHTML)   
    }
    else{
        screen.innerHTML = Root.innerHTML
    }
})

/*SQUARE*/
let regex5 = /(\d*\.)?\d+/;
equal = document.querySelector(".equal");
let disp2 = document.querySelector(".screenB");
let square = document.querySelector(".square")
square.addEventListener("click", function(){
    let squared = "\u00B2"
    if(screen.innerHTML != ""){
        screen.insertAdjacentText("beforeend", squared)   
    }
    disp2.innerHTML = Squaring(parseFloat(screen.innerHTML.match(regex5).join("")))
})


/*disp2 = document.querySelector(".screenB")
let clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    screen.innerHTML = ""
    disp2.innerHTML = ""
    
})*/


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