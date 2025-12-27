//singleton  
//object literals
//where
const mySym = Symbol("key1")

const jsUser = {
    name: "megha",
    "full name": "meghasharma",
    age: 23,
    location:"haryana",
    email:"meghasharma@gmail.com",
    isloggedIn: false,
    lastLoginDays:["monday","saturday"],
    [mySym]: "mykey1"

}

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log( jsUser[mySym]);




// Object.freeze(jsUser)
// jsUser.email = "ms@gmailmy.com"
// console.log(jsUser);


jsUser.greeting = function (){
    console.log("hello js user");
    
}
console.log(jsUser.greeting());

jsUser.greetingtwo = function (){
    console.log(`hello js user ,${this.name}`);
    
}
console.log(jsUser.greetingtwo());