//array is resizable in js mean we can add new values
//zero base indexing 

const myArr =[ 0,1,2,3,4,5]
const myHero = ["ironmen", "batmen", ]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//array methods 

// myArr.push(6, 7, 8) //adding array
// myArr.pop() //remove last value in array 
// myArr.unshift(8)
myArr.shift()

console.log(myArr.includes(9));// answering the question 
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);



//slice , splice 
//slice doesn't change array but when it comes to splice its reflect the opposite 
console.log("A", myArr);

const myArr1= myArr.slice(1,3);
console.log(myArr1);
console.log("b", myArr);


const myA2 = myArr.splice(1,3);
console.log("c", myArr);
console.log( myA2);
