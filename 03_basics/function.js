

function sayMyname(){
console.log("h");
console.log("e");
console.log("i");
console.log("o");
}


//sayMyname //function refernce 
//sayMyname()function execution
//num1,num2 is parameters
// function addTwoNumber (number1, number2){
//     console.log(number1+number2); 
// }

function addTwoNumber (number1, number2){
    let result =number1+number2

    return result
    
}

const result =addTwoNumber(4,5)
// console.log("result:", result);
 //4,5isarrguments


 function loginUserMess (username="sam"){
//! this sign mean to convert false value into trueand true value into false
    if(!username) {
        console.log("please enter your name");
        return
    }
    return `${username} just logged in`

 }
// console.log( loginUserMess("megha"));

//what if i have to pass multiple values (...)rest operator
function CartPrice(...num1){
    return num1
}

// console.log(CartPrice(200, 400, 500, ));

const user= {
    username: "megha",
    age:23
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
}

// handleobject(user)

handleobject({
    username:"sam",
    age:25
})


const myNewArr =[200, 400,100, 600]

function handleArry(GetArry){
    return GetArry[1]
}

console.log(handleArry(myNewArr));
