// const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"]
// //for each methon not return any value it return undefined
// //what if we store foreach in a variable and try to print it then it will return undefined 
// const values = coding.forEach( (item)=>{
//     //console.log(item);
//     return item;
// })

// console.log(values);


// // for (const num of coding) 
//inside filter  we can see its returning a new array
//inside filter we see a call back function which return a each and every value based on condition if condition is true it will return that value in new array otherwise not

//we face issue
const num = [1,2,3,4,5,6,7,8,9,10];
// const newNum =num.filter((num)=>{
//     return num>4
// })

// const newNum = []

// num.forEach((num)=>{
//     if (num >4){
//         newNum.push(num)
//     }})
// console.log(newNum);


const books = [
    {title: "Book One", genre: "Fiction", published: 2001},
    {title: "Book Two", genre: "Fiction", published: 2002},
    {title: "Book Three", genre: "Non-Fiction", published: 2003},
    {title: "Book Four", genre: "Non-Fiction", published: 2004},
    {title: "Book Five", genre: "Fiction", published: 2005}
]

let userbooks = books.filter((br) => br.published >= 2005)
userbooks = books.filter((br) => br.genre === "Fiction" && br.genre === "Fiction")


console.log(userbooks);
