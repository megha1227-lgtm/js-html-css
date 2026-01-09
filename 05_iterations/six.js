//in map method we use to create a new array from an existing array by applying a function to each element of the original array.
//map is also a callback function like filter and for each
// inside map we return a value for each element and that value is stored in new array and that new array is returned by map method

const num = [1,2,3,4,5,6,7,8,9,10];
// const newNum = num.map((num)=> num +10)
// this type  of code is called chainning 
const newNum = num
                 .map((num) => num * 10)
                 .map((num)=> num + 1)
                 .map((num)=> num /2 )
                 .filter((num) => num >= 40)
console.log(newNum);
