// const tinderUser = new Object() singleton object
const tinderUser ={ 

} //non singleton object

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);



const regularUser = {
    email: "122@gmail.com",
    fullname:{
        username: {
            firstname:"megha",
            lastname:"sharma",
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const onj1 ={
    1:"a",
    2:"n",
}
const onj2 ={
    3:"b",
    4:"d",
}

const onj3 ={
    3:"b",
    4:"d",
}
//const obj3 = { onj1, onj2}
//const obj3 = Object.assign({} , onj1, onj2,onj3)
const obj3 = {...onj1,...onj2,...onj3}//spread method
// console.log(obj3);

const user =[
    {
        id:1,
        email:"h@gmail.com",
    }
]

// user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //give results in array 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //less uses but its given key and values as array 



console.log(tinderUser.hasOwnProperty('idi')); //giving result in boolean 


const course = {
    coursename:"js",
    price:"999"
}
//object destructure

const  { coursename: js} = course
console.log(js);
// {
//     "name": "megha",
//     "age": 23,
//     "email":"12@gmail.com"

// }


