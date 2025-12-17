let myDate = new Date() // date is object type 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



let myCreatedDate = new Date("01-14-20023")

// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(Math.floor);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "narrow",
})