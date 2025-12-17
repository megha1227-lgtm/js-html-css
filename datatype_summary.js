//primitive type datatype 

//7 category : string , number , boolean , null , undefined, symbol, bigint , 
const score=20;
const scoreValue=100.3;
const islogin = false;
const outsideTemp =null

let userEmail=undefined;

const id= Symbol('123')
const anoutherId= Symbol('123')

console.log( id === anoutherId);

const bigNumber = 24734693465903847045n

//reference type (non primitive )

// array , objects , 
const heros= [ "shaktiman", "naagraj", "doga"];

let myObj=
{
    name: "megha",
    age: 22,

}

//++++++++++++++++++++Memories++++++++++++++
//stack (primitive type), heap memory(non primitive type )

// in stack we get copy of data but in heap we get exact reference of data , in stact we do changes inside copy data no value changes in og data but inside heap we direct change value of the refernce data 

let myName="megha"
let anotherName = myName;
anotherName = "meghasharma"
console.log(anotherName);
console.log(myName);


let userOne ={
    email: "user@gmail.com",
    upi:"294834edi"
}

let userTwo = userOne


userTwo.email="meghasharma@gmail.com"


console.log(userTwo.email);
console.log(userOne.email);
