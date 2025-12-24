const user ={
    username:"megha",
    price:239,
//this mean current context (current value)
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);
//inside function this not work only its work inside object 
// function chai (){
//     let username ="megha"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username= "megha"
//     console.log(this.username);   
// }

// const chai = ()=>{
//     let username= "megha"
//     console.log(this);   
// }
// chai()
//basics
// const addTwo = (value1, value2, value3)=>{
//     return value1+value2+value3
// }
//Explicit Return  and Implicit Return
//inside explicit return we have to write return keyword with {} but inside implicit return there is no need of using return keyword
//const addTwo = (value1, value2, value3)=> value1+value2+value3

// const addTwo = (value1, value2, value3)=> (value1+value2+value3)

//if we have to use object in arrow function
const addTwo = (value1, value2, value3)=> ({
    username:"megha"
})
console.log(addTwo(4,5,6));

// const myArr =[2,4,6,7]

// myArr.forEach()
