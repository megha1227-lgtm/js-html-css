// for of loop ( arrays specifice loops )
// const myArry = [1,2,3,4,5,6,7,8,9,10];

// for (const num of myArry) {
//     console.log(num);   
// // }
// // const greeting = "Hello World";
// // for (const greet  of greeting) {
// //     console.log(`each char is ${greet}`);
    
// // }


// // Maps 

// const map = new Map();
// map.set('name', 'Bruce');
// map.set('age', 30);
// map.set('city', 'Gotham');


// // console.log(map);
// for (const [myMap, value] of map) {
//     //console.log(myMap , ':-', value);   
// }
 
// const key= {
//    "name": "Clark",
//    "age": 28,
//    "city": "Metropolis"
// }

// // for (const [ob, value] of key) {
// //     console.log(ob, ':-', value);
    
// // }
// //for in loop ( objects specific loops )
// const myObj = {
//     "js": "JavaScript",
//     "py": "Python",
//     "rb": "Ruby",
//     "rs": "Rust"
// }

// for (const obj in myObj) {
//     //console.log(`${obj} shortcut is file ${myObj[obj]}`);
 
// }

// const prog= ["js", "py", "rb", "rs"]

// for (const key in prog) {
//     console.log(prog[key]);  
// }
//map is not iterable with for in loop

const map = new Map();
map.set('name', 'Bruce');
map.set('age', 30);
map.set('city', 'Gotham');

for (const key in map) {
    console.log(map[key]);
}