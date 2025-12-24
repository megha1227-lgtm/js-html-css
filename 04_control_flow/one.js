//if
//when we have to check variable date type the we use === for strick checking
//comparison operater <,>,<=,>=, ==,!=, ===
// const isUserloogedin= true
// const temp = 41

// if (temp ===41){

//     console.log(`less than 50`);
    
// }
// else{console.log(`temp is greater than 50`);}


// const score =200 
// if (score>100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }
//shorthand code 
// const balance = 1000
// //if (balance>500) console.log('test');
// if (balance < 500){
//     console.log(`less than `);
    
// }else if (balance <600){
//     console.log(`less than 600`);
    
// }else if (balance <650){
//     console.log(`less than 650`);
    
// }else if (balance <900){
//     console.log(`less than 900`);
    
// }else{
//     console.log(`less than 1200`);
    
// }

//logical operator
// && and  both condition have to true 
// || or 
const userLoogedIn = true
const debitCart = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoogedIn && debitCart && 2===2 ){
    console.log(`allowed to buy courses`);
    
}if (loggedInFromEmail || loggedInFromGoogle){
    console.log(` user logged in `);
    
}